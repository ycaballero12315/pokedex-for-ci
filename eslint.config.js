import js from "@eslint/js";
import react from "eslint-plugin-react";
import jest from "eslint-plugin-jest";

export default [
  {
    ignores: ["node_modules", "dist", "build"], // reemplaza lo que tenías en .eslintignore
  },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        browser: true,
        node: true,
        jest: true,
      },
    },
    plugins: {
      react,
      jest,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...jest.configs.recommended.rules,
    },
  },
];
