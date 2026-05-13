# cicdwebdepl

A CI/CD web deployment project built with **AWS CDK** and **TypeScript**. This project provisions and manages cloud infrastructure for automated web application deployments using GitHub Actions workflows and the AWS Cloud Development Kit.

---

## Overview

`cicdwebdepl` leverages the AWS CDK to define cloud infrastructure as code in TypeScript. It is designed to support automated, repeatable deployments of web applications to AWS, integrating CI/CD pipelines via GitHub Actions.

**Tech Stack:**

- **Language:** TypeScript (64.7%) / JavaScript (35.3%)
- **Infrastructure:** AWS CDK (Cloud Development Kit)
- **CI/CD:** GitHub Actions (`.github/workflows/`)
- **Testing:** Jest
- **Package Manager:** npm

---

## Project Structure

```
cicdwebdepl/
├── .github/
│   └── workflows/        # GitHub Actions CI/CD pipeline definitions
├── bin/                  # CDK app entry point
├── lib/                  # CDK stack definitions
├── test/                 # Jest unit tests
├── cdk.json              # CDK toolkit configuration
├── jest.config.js        # Jest test configuration
├── tsconfig.json         # TypeScript compiler configuration
├── package.json          # npm dependencies and scripts
└── README.md
```

---

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later recommended)
- [AWS CLI](https://aws.amazon.com/cli/) configured with appropriate credentials
- [AWS CDK Toolkit](https://docs.aws.amazon.com/cdk/latest/guide/cli.html) installed globally:
  ```bash
  npm install -g aws-cdk
  ```

---

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/epruitt/cicdwebdepl.git
   cd cicdwebdepl
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Bootstrap your AWS environment** _(first-time setup only)_:
   ```bash
   npx cdk bootstrap
   ```

---

## Useful Commands

| Command          | Description                                          |
| ---------------- | ---------------------------------------------------- |
| `npm run build`  | Compile TypeScript to JavaScript                     |
| `npm run watch`  | Watch for changes and recompile automatically        |
| `npm run test`   | Run Jest unit tests                                  |
| `npx cdk deploy` | Deploy this stack to your default AWS account/region |
| `npx cdk diff`   | Compare the deployed stack with current local state  |
| `npx cdk synth`  | Emit the synthesized CloudFormation template         |

---

## CI/CD Pipeline

This project includes GitHub Actions workflow definitions in `.github/workflows/` that automate the build, test, and deployment process on push or pull request events.

---

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## License

This project is currently unlicensed. See the repository owner for usage permissions.

---

## Resources

- [AWS CDK Documentation](https://docs.aws.amazon.com/cdk/latest/guide/home.html)
- [AWS CDK API Reference](https://docs.aws.amazon.com/cdk/api/v2/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
