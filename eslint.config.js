import { defineConfig } from "eslint/config";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";
import esLintConfigPrettier from "eslint-config-prettier/flat";

export default defineConfig(
    eslint.configs.recommended,
    tseslint.configs.recommended,
    reactPlugin.configs.flat.recommended,
    reactPlugin.configs.flat["jsx-runtime"],
    esLintConfigPrettier,
    [
        {
            ignores: ["dist/**", "node_modules/**"],
        },
    ],
);
