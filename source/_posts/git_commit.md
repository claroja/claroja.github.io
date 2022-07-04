git_commit.md

参数|描述
--|--
`-a`| 执行`add ./`
`-m`| 输入简单的commit log
`--amend` | 将本次提交和上次提交合并
`--author` |`--author="Author Name <email@address.com>"` 用于设定用户名和邮箱, 默认使用`git config`设置的
`--no-edit` | 默认`git commit`会打开编辑器, 有此参数会忽略