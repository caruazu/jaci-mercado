import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { FlatCompat } from "@eslint/eslintrc";

// Plugins em ESM precisam ser importados manualmente
import tailwindPlugin from "eslint-plugin-tailwindcss";
import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";

// Helpers
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const compat = new FlatCompat({ baseDirectory: __dirname });

export default [
  // Configs oficiais do Next 15
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Tailwind — apenas em arquivos de UI
  {
    files: ["**/*.{ts,tsx,jsx,js}"],
    plugins: { tailwindcss: tailwindPlugin },
    extends: ["plugin:tailwindcss/recommended"],
    rules: {
      "tailwindcss/no-custom-classname": "off", // ajuste se usar nomes fora do config
    },
  },

  // TypeScript extra — ex.: no-unused-vars já considera overloads
  {
    plugins: { "@typescript-eslint": typescriptPlugin },
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
    },
  },

  // Prettier sempre por último!
  eslintConfigPrettier,
  {
    plugins: { prettier: eslintPluginPrettier },
    rules: { "prettier/prettier": "error" },
  },
];
