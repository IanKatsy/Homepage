// prettier.config.ts
import type { Config } from "prettier";

const config: Config = {
    printWidth: 80,
    tabWidth: 4,
    useTabs: false,
    semi: true,
    singleQuote: false,
    trailingComma: "none",
    bracketSpacing: true,
    arrowParens: "always",
    endOfLine: "lf",
};

export default config;
