const js = require("@eslint/js");

module.exports = [
  js.configs.recommended,
  {
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "double"],
    },
  },
];
