const path = require("path");
const root = path.resolve(__dirname, "./");

module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: ["eslint:recommended"],
  parser: "babel-eslint",
  parserOptions: {
    allowImportExportEverywhere: true,
    ecmaVersion: 2018,
    sourceType: "module"
  },
  rules: {
    "no-console": 1
  },
  settings: {
    "import/resolver": {
      "babel-module": {
        alias: {
          "@js": path.resolve(root, "src/js")
        }
      }
    }
  }
};
