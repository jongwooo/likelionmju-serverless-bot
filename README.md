<p align="center">
  <a href="https://github.com/likelionmju">
    <img alt="logo" src="https://likelionmju-serverless-bot-bucket.s3.ap-northeast-2.amazonaws.com/assets/images/likelionmju_logo.png" width="60" />
  </a>
</p>
<h1 align="center">
  likelionMJU Bot
</h1>

<h3 align="center">
  📬⚙️🤖
</h3>

<h3 align="center">
  Facebook Serverless Messenger Bot
</h3>

<p align="center">
  likelionMJU Bot is a simple facebook messenger bot to introduce <a href="https://github.com/likelionmju">likelionMJU</a>, using AWS services.
</p>

<p align="center">
  <a href="LICENSE">
    <img alt="GitHub" src="https://img.shields.io/github/license/jongwooo/likelionmju-serverless-bot?color=blue">
  </a>
  <a href="https://codecov.io/gh/jongwooo/likelionmju-serverless-bot">
    <img alt="Codecov coverage reports" src="https://codecov.io/gh/jongwooo/likelionmju-serverless-bot/branch/master/graph/badge.svg" />
  </a>
  <a href="https://github.com/jongwooo/likelionmju-serverless-bot/actions?query=workflow%3A%22PR+Test%22">
    <img alt="PR Test Status" src="https://github.com/jongwooo/likelionmju-serverless-bot/workflows/PR%20Test/badge.svg">
  </a>
  <a href="https://github.com/jongwooo/likelionmju-serverless-bot/actions?query=workflow%3A%22Deploy+to+lambda%22">
    <img alt="Deploy to Lambda Status" src="https://github.com/jongwooo/likelionmju-serverless-bot/workflows/Deploy%20to%20Lambda/badge.svg">
  </a>
</p>

<p align="center">
  <img alt="mockup" src="https://likelionmju-serverless-bot-bucket.s3.ap-northeast-2.amazonaws.com/assets/images/mockup.png">
</p>

## 🔍 Overview

<img alt="architecture" src="https://likelionmju-serverless-bot-bucket.s3.ap-northeast-2.amazonaws.com/assets/images/architecture.png">

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a likelionMJU Bot project.

    .
    ├── .github
    ├── node_modules
    ├── .eslintrc.js
    ├── .gitignore
    ├── .prettierignore
    ├── .prettierrc.js
    ├── CODE_OF_CONDUCT.md
    ├── CONTRIBUTING.md
    ├── LICENSE
    ├── README.md
    ├── index.js
    ├── index.test.js
    ├── jest.config.js
    ├── package-lock.json
    └── package.json

1.  **`/.github`**: This directory contains settings about Github Actions and templates about issue, pull-request.

2.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

3.  **`.eslintrc.js`**: This is a configuration file for [ESLint](https://eslint.org/). ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs.

4.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

5.  **`.prettierignore`**: This file tells Prettier which files it should not format for.

6.  **`.prettierrc.js`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

7.  **`CODE_OF_CONDUCT.md`**: This file defines standards for how to engage in a community. It signals an inclusive environment that respects all contributions.

8.  **`CONTRIBUTING.md`**: This file is guidelines for repository contributors.

9.  **`LICENSE`**: likelionMJU Bot is licensed under the MIT license.

10. **`README.md`**: A text file containing useful reference information about your project.

11. **`index.js`**: The handler of this file is the method in your Lambda function that processes events. When you invoke a function, the runtime runs the handler method. When the handler exits or returns a response, it becomes available to handle another event.

12. **`index.test.js`**: This file is a Jest based code for testing a handler.

13. **`jest.config.js`**: This is a configuration file for [Jest](https://jestjs.io/). Jest is a JavaScript testing framework.

14. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

15. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

## ✅ Testing

### Creating New Tests

Check out the [Jest documentation](https://jestjs.io/docs/en/snapshot-testing) for how to write more tests.

### Running Tests

To run Jest tests on the project, run `npm test` on the command line.

## ❗ Code of Conduct

I expect everyone participating in the contributing to abide by [Code of Conduct](CODE_OF_CONDUCT.md).

## 🤝 How to Contribute

Check out [Contributing guide](CONTRIBUTING.md) for ideas on contributing and setup steps for getting our repositories up and running on your local machine.

## 🐛 Bug reporting

If you found a bug in this repository, please let me know through the [Issue](https://github.com/jongwooo/likelionmju-serverless-bot/issues).

## 📝 License

Licensed under the [MIT License](LICENSE).
