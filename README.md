<p align="center">
  <a href="https://github.com/likelionmju">
    <img alt="logo" src="./assets/likelionmju_logo.png" width="60" />
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
    <img alt="LICENSE" src="https://img.shields.io/github/license/jongwooo/likelionmju-serverless-bot?color=blue">
  </a>
  <a href="https://www.codefactor.io/repository/github/jongwooo/likelionmju-serverless-bot">
    <img alt="CodeFactor" src="https://www.codefactor.io/repository/github/jongwooo/likelionmju-serverless-bot/badge">
  </a>
  <a href="https://github.com/jongwooo/likelionmju-serverless-bot/actions?query=workflow%3A%22PR+Test%22">
    <img alt="PR Test Status" src="https://github.com/jongwooo/likelionmju-serverless-bot/workflows/PR%20Test/badge.svg">
  </a>
  <a href="https://github.com/jongwooo/likelionmju-serverless-bot/actions?query=workflow%3A%22Deploy+to+lambda%22">
    <img alt="Deploy to Lambda Status" src="https://github.com/jongwooo/likelionmju-serverless-bot/workflows/Deploy%20to%20Lambda/badge.svg">
  </a>
</p>

<p align="center">
  <img alt="mockup" src="./assets/mockup.png">
</p>

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a likelionMJU Bot project.

    .
    ├── .github
    ├── assets
    ├── node_modules
    ├── router
    ├── .all-contributorsrc
    ├── .eslintrc.js
    ├── .gitignore
    ├── .prettierignore
    ├── .prettierrc.js
    ├── LICENSE
    ├── README.md
    ├── index.js
    ├── index.test.js
    ├── jest.config.js
    ├── meta-config.js
    ├── package-lock.json
    └── package.json

1.  **`/.github`**: This directory contains a set-up of GitHub Actions, a template for the issue / pull-request, and a guide to conducts and contributions.

2.  **`/assets`**: This directory contains the logo of this service.

3.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

4.  **`/router`**: This directory contains the functions that handler needs. For example, functions for processing GET / POST requests are included.

5.  **`.all-contributorsrc`**: This is a configuration file for [All Contributors](https://allcontributors.org). All Contributors is a specification for recognizing contributors to an open source project in a way that rewards each and every contribution, not just code.

6.  **`.eslintrc.js`**: This is a configuration file for [ESLint](https://eslint.org/). ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs.

7.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

8.  **`.prettierignore`**: This file tells Prettier which files it should not format for.

9.  **`.prettierrc.js`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

10. **`LICENSE`**: likelionMJU Bot is licensed under the MIT license.

11. **`README.md`**: A text file containing useful reference information about your project.

12. **`index.js`**: The handler of this file is the method in your Lambda function that processes events. When you invoke a function, the runtime runs the handler method. When the handler exits or returns a response, it becomes available to handle another event.

13. **`index.test.js`**: This file is a Jest based code for testing a handler.

14. **`jest.config.js`**: This is a configuration file for [Jest](https://jestjs.io/). Jest is a JavaScript testing framework.

15. **`meta-config.js`**: This file contains answers to questions, default replies, and answers to be ignored.

16. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

17. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

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
    <td align="center"><a href="https://github.com/jongwooo"><img src="https://avatars2.githubusercontent.com/u/44025432?v=4" width="100px;" alt=""/><br /><sub><b>Jongwoo Han</b></sub></a><br /><a href="https://github.com/jongwooo/likelionmju-serverless-bot/commits?author=jongwooo" title="Code">💻</a> <a href="https://github.com/jongwooo/likelionmju-serverless-bot/issues?q=author%3Ajongwooo" title="Bug reports">🐛</a> <a href="https://github.com/jongwooo/likelionmju-serverless-bot/commits?author=jongwooo" title="Documentation">📖</a> <a href="https://github.com/jongwooo/likelionmju-serverless-bot/pulls?q=is%3Apr+reviewed-by%3Ajongwooo" title="Reviewed Pull Requests">👀</a> <a href="https://github.com/jongwooo/likelionmju-serverless-bot/commits?author=jongwooo" title="Tests">⚠️</a> <a href="#ideas-jongwooo" title="Ideas, Planning, & Feedback">🤔</a> <a href="#infra-jongwooo" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#maintenance-jongwooo" title="Maintenance">🚧</a></td>
    <td align="center"><a href="http://www.likelion-mju.com"><img src="https://avatars3.githubusercontent.com/u/46788594?v=4" width="100px;" alt=""/><br /><sub><b>명지대학교(서울) x  Likelion</b></sub></a><br /><a href="https://github.com/jongwooo/likelionmju-serverless-bot/commits?author=likelionmyongji" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/all-contributors/all-contributors-bot"><img src="https://avatars3.githubusercontent.com/u/46843839?v=4" width="100px;" alt=""/><br /><sub><b>allcontributors[bot]</b></sub></a><br /><a href="https://github.com/jongwooo/likelionmju-serverless-bot/commits?author=allcontributors" title="Documentation">📖</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## 📝 License

Licensed under the [MIT License](LICENSE).
