# [官网](https://eslint.org/)&[教程](https://eslint.org/docs/user-guide/)&[安装](https://eslint.org/docs/user-guide/getting-started)


# [配置文件](https://eslint.org/docs/user-guide/configuring/configuration-files)
在工程目录下创建`.eslintrc.cjs`

```js
{
    "root": true,
    "extends": ["plugin:vue/vue3-essential", "eslint:recommended", "@vue/eslint-config-prettier"]
    "rules": {
        // enable additional rules
        "indent": ["error", 4],
        "linebreak-style": ["error", "unix"],
        "quotes": ["error", "double"],
        "semi": ["error", "always"],
        // override configuration set by extending "eslint:recommended"
        "no-empty": "warn",
        "no-cond-assign": ["error", "always"],
        // disable rules from base configurations
         "for-direction": "off",
    }
    "ignorePatterns": ["src/**/*.test.ts", "src/frontend/generated/*"]
}
```

字段解释:
1. [root](https://eslint.org/docs/user-guide/configuring/configuration-files#cascading-and-hierarchy)
2. [extend](https://eslint.org/docs/user-guide/configuring/configuration-files#extending-configuration-files)
3. [rules](https://eslint.org/docs/rules/)