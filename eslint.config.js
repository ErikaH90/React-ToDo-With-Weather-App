import eslint from "@eslint/js";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,jsx}"],
    extends: [
      eslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
      },
    },
  },

  {
    files: ["tests/**/*.{js,jsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        beforeAll: "readonly",
        afterEach: "readonly",
        afterAll: "readonly",
      },
    },
  },

  {
    ignores: ["dist/**", "node_modules/**"],
  },
]);