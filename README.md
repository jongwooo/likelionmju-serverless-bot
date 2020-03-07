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
    ├── .github/workflows
    ├── node_modules
    ├── .eslintrc.js
    ├── .gitignore
    ├── .prettierignore
    ├── .prettierrc.js
    ├── LICENSE
    ├── README.md
    ├── index.js
    ├── index.test.js
    ├── package-lock.json
    └── package.json

1.  **`/.github/workflows`**: This directory contains settings about Github Actions.

2.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

3.  **`.eslintrc.js`**: This file is the configuration of ESLint. ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs.

4.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

5.  **`.prettierignore`**: This file tells Prettier which files it should not format for.

6.  **`.prettierrc.js`**: This file is the configuration of Prettier. This file allows you to format files within the directory.

7.  **`LICENSE`**: likelionMJU Bot is licensed under the MIT license.

8.  **`README.md`**: A text file containing useful reference information about your project.

9.  **`index.js`**: The handler of this file is the method in your Lambda function that processes events. When you invoke a function, the runtime runs the handler method. When the handler exits or returns a response, it becomes available to handle another event.

10. **`index.test.js`**: This file is a Jest based code for testing a handler.

11. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

12. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

## 📝 License

Licensed under the [MIT License](LICENSE).
