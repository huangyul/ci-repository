module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: "eslint:recommended",
    overrides: [],
    parserOptions: {
    /** ecmaVersion: 指定 ECMA 语法版本
     *  取值：
     *      - "latest": 使用最新版本，现在 (2021) 等同于 12
     *      - 版本号：3, 5（默认）, 6, 7, 8, 9, 10, 11, 12
     *      - 年份命名法：2015(=6), 2016(=7), 2017(8) ...
     */
        ecmaVersion: "latest",
        sourceType: "module",
    },

    rules: {
        indent: ["error", 4],
        "linebreak-style": ["error", "windows"],
        quotes: ["error", "double"],
        semi: ["error", "never"],
    },
}
