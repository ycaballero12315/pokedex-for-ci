const js = require("@eslint/js");

module.exports = [
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        // Node.js
        require: "readonly",
        module: "readonly",
        process: "readonly",
        __dirname: "readonly",
        console: "readonly",

        // Jest
        describe: "readonly",
        it: "readonly",
        expect: "readonly",
        test: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly",
      },
    },
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "double"],
    },
  },
];
