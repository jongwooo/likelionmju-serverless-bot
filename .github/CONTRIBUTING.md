# How to Contribute

## Issue

Just follow `ISSUE_TEMPLATE`. done!

## Pull Request

### Forked strategy

This repository managed based on forked pull request strategy

```sh
# Fork this repository to yours.
$ git clone [YOUR_REPOSITORY_URL]
$ cd likelionmju-serverless-bot

# Install npm packages and start this project.
$ npm install

# (Working...)

$ git commit [...]
$ git push origin [YOUR_REPOSITORY]

# Before enroll pull-request.
$ npm run format
$ npm run lint

# Enroll pull-request!
# in https://github.com/jongwooo/likelionmju-serverless-bot
```

## Commit message rules

- The commit message does not exceed 50 characters, and the first letter is capitalized and does not end with a period.

- If you want to skip workflows([Deploy to Lambda](.github/workflows/deploy.yml), etc.), include the `[skip ci]` string in the commit message.
    - For example, `docs: Update .all-contributorsrc [skip ci]`.

- Write as a command without using a past tense.
    - `Fixed` -> `Fix`
    - `Added` -> `Add`

- Consider starting the commit message with a type label:

    - `feat:` prefix.
      - When create a new feature.
    - `fix:` prefix.
      - When fixing a bug.
    - `docs:` prefix.
      - When adding a document.
    - `style:` prefix.
      - When change the code format.
    - `refactor:` prefix.
      - When refactoring production code.
    - `test:` prefix.
      - When adding or refactoring tests.
    - `chore:` prefix.
      - When update a build test or setting up package manager.
  
### Thanks!

> I'm waiting for your pull request. :pray: