module.exports = {
    env: {
        es6: true,
        node: true,
        jest: true,
    },
    extends: ["eslint:recommended", "plugin:prettier/recommended"],
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
    },
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    rules: {},
}
