# Notes

## commit 规范

### 安装插件

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
