import { Bucket } from "aws-cdk-lib/aws-s3";
import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { join } from "path";
import { existsSync } from "fs";
import { Distribution, OriginAccessIdentity } from "aws-cdk-lib/aws-cloudfront";
import { S3BucketOrigin } from "aws-cdk-lib/aws-cloudfront-origins";
import { BucketDeployment, Source } from "aws-cdk-lib/aws-s3-deployment";

export class WebdeplStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const deploymentBucket = new Bucket(this, "webDeploymentBucket");

    const uiDir = join(__dirname, "..", "..", "web", "dist");
    if (!existsSync(uiDir)) {
      console.warn("UI dir not found: " + uiDir);
      return;
    }

    const orginIdentity = new OriginAccessIdentity(
      this,
      "OriginAccessIdentity",
    );
    deploymentBucket.grantRead(orginIdentity);

    const distribution = new Distribution(this, "webDeploymentDistribution", {
      defaultRootObject: "index.html",
      defaultBehavior: {
        origin: S3BucketOrigin.withOriginAccessIdentity(deploymentBucket, {
          originAccessIdentity: orginIdentity,
        }),
      },
    });

    new BucketDeployment(this, "webDeployment", {
      destinationBucket: deploymentBucket,
      sources: [Source.asset(uiDir)],
      distribution: distribution,
    });

    new cdk.CfnOutput(this, "appUrl", {
      value: distribution.distributionDomainName,
    });
  }
}
