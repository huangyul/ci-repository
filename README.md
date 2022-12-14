# Notes

## commit 提交规范

### 规范 commit 格式

使用`cz-conventional-changelog`

安装：`yarn add cz-conventional-changelog -D`

在`package.json`配置

```json
{
  "scripts": {
    "cz": "git add . && npx git-cz"
  },
  "config": {
    "commitizen": {
      "path": "./node_modules/cz-conventional-changelog"
    }
  }
}
```

### 校验 commit 格式

使用 `@commitlint/cli` 和 `@commitlint/config-conventional`

- @commitlint/cli: 强制执行常规提交
- @commitlint/config-conventional: 作为校验的配置

### 触发 git hooks

#### commit 前可以执行某些脚本，例如使用 eslint 规范代码

`npx husky add .husky/pre-commit 'yarn lint'`

> 前提是要配置好 `lint` 的脚本

#### commit 后检测

使用 `husky`

`yarn add husky -D`

设置 husky（适合版本大于 5.0.0）

1. 执行 `npx husky install` 安装 `git` 钩子
2. 执行 `npx husky add .husky/commit-msg 'npx commitlint --edit $1'` 启用适配 `commitlint` 的 `commit-msg hook`

[参考文档](https://juejin.cn/post/6990307028162281508)

## Eslint

安装 `yarn add eslint -D`

在 package.josn 中添加启动脚本

```json
{
  "script": {
    "lint": "eslint src --fix --ext .ts,.js,.vue"
  }
}
```

命令：--fix：修复 src：指定哪些文件 --ext：指定哪些文件类型
