import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { FlatCompat } from '@eslint/eslintrc';
import tailwind from 'eslint-plugin-tailwindcss';

// Plugins em ESM precisam ser importados manualmente
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';

// Helpers
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const compat = new FlatCompat({ baseDirectory: __dirname });

const config = [
  // Configs oficiais do Next 15
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  ...tailwind.configs['flat/recommended'],

  // Se você já usa prettier‑plugin‑tailwindcss para ordenar classes,
  // desligue a regra de ordenação para evitar conflitos:
  {
    rules: {
      'tailwindcss/classnames-order': 'off',
      // alerta de classe desconhecida como *erro*
      'tailwindcss/no-custom-classname': 'off',
    },
  },

  // TypeScript extra — ex.: no-unused-vars já considera overloads
  {
    plugins: { '@typescript-eslint': typescriptPlugin },
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' },
      ],
    },
  },

  // Prettier sempre por último!
  eslintConfigPrettier,
  {
    plugins: { prettier: eslintPluginPrettier },
    rules: { 'prettier/prettier': 'error' },
  },
];

export default config;
