<p align="center">
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
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
    ├── LICENSE
    ├── README.md
    ├── index.js
    ├── index.test.js
    ├── jest.config.js
    ├── package-lock.json
    └── package.json

1.  **`/.github`**: This directory contains a set-up of GitHub Actions, a template for the issue / pull-request, and a guide to conducts and contributions.

2.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

3.  **`.eslintrc.js`**: This is a configuration file for [ESLint](https://eslint.org/). ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs.

4.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

5.  **`.prettierignore`**: This file tells Prettier which files it should not format for.

6.  **`.prettierrc.js`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

7.  **`LICENSE`**: likelionMJU Bot is licensed under the MIT license.

8.  **`README.md`**: A text file containing useful reference information about your project.

9.  **`index.js`**: The handler of this file is the method in your Lambda function that processes events. When you invoke a function, the runtime runs the handler method. When the handler exits or returns a response, it becomes available to handle another event.

10. **`index.test.js`**: This file is a Jest based code for testing a handler.

11. **`jest.config.js`**: This is a configuration file for [Jest](https://jestjs.io/). Jest is a JavaScript testing framework.

12. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

13. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

## ✅ Testing

### Creating New Tests

Check out the [Jest documentation](https://jestjs.io/docs/en/using-matchers) for how to write more tests.

### Running Tests

To run Jest tests on the project, run `npm test` on the command line.

## ❗ Code of Conduct

We expect everyone participating in the contributing to abide by [Code of Conduct](.github/CODE_OF_CONDUCT.md).

## 🐛 Bug reporting

If you found a bug in this repository, please let us know through the [Issue](https://github.com/jongwooo/likelionmju-serverless-bot/issues).

## 🤝 How to Contribute

Check out [Contributing guide](.github/CONTRIBUTING.md) for ideas on contributing and setup steps for getting our repositories up and running on your local machine.

## ✨ Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://likelion-mju.com"><img src="https://avatars3.githubusercontent.com/u/46788594?v=4" width="100px;" alt=""/><br /><sub><b>명지대학교(서울) x  Likelion</b></sub></a><br /><a href="https://github.com/jongwooo/likelionmju-serverless-bot/commits?author=likelionmyongji" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/jongwooo"><img src="https://avatars2.githubusercontent.com/u/44025432?v=4" width="100px;" alt=""/><br /><sub><b>Jongwoo Han</b></sub></a><br /><a href="https://github.com/jongwooo/likelionmju-serverless-bot/commits?author=jongwooo" title="Code">💻</a> <a href="https://github.com/jongwooo/likelionmju-serverless-bot/issues?q=author%3Ajongwooo" title="Bug reports">🐛</a> <a href="https://github.com/jongwooo/likelionmju-serverless-bot/commits?author=jongwooo" title="Documentation">📖</a> <a href="https://github.com/jongwooo/likelionmju-serverless-bot/pulls?q=is%3Apr+reviewed-by%3Ajongwooo" title="Reviewed Pull Requests">👀</a> <a href="https://github.com/jongwooo/likelionmju-serverless-bot/commits?author=jongwooo" title="Tests">⚠️</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## 📝 License

Licensed under the [MIT License](LICENSE).
