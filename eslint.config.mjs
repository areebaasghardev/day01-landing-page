import js from "@eslint/js"
import prettier from "eslint-config-prettier"

export default [
  // Ignore HTML files so ESLint doesn't try to parse them
  {
    ignores: ["src/**/*.html"]
  },

  js.configs.recommended,
  prettier,

  {
    files: ["src/**/*.{js,jsx}"],
    languageOptions: {
      sourceType: "module",
      ecmaVersion: 2020,
      globals: {
        window: "readonly",
        document: "readonly",
        console: "readonly"
      }
    },
    rules: {}
  }
]
