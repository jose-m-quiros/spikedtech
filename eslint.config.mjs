import { FlatCompat } from "@eslint/eslintrc";
import { globalIgnores } from "eslint/config";
import path from "node:path";
import { fileURLToPath } from "node:url";

const baseDirectory = path.dirname(fileURLToPath(import.meta.url));
const compat = new FlatCompat({ baseDirectory });

const config = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  globalIgnores([
    ".next/**",
    "next-env.d.ts",
    "node_modules/**",
    "out/**",
    "coverage/**",
  ]),
];

export default config;
