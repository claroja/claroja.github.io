# sftp



## ignore

```yml
"ignore": [
    "/.vscode"
]
```
`"/.vscode"`: 忽略根目录下的`.vscode`目录, 且目录本身不会同步
`"/.vscode"`: 忽略根目录下的`.vscode`目录下的文件, 但目录本身会同步, 即同步空空目录



## syncOption
`syncOption`设置同步参数, 默认为空`{}`


- `delete`：服务器较本地多余的文件将被删除. 

    > 风险是可能会误删文件(可以通过本地`.history`找回), 优点是在本地移动文件到一个文件夹, 服务器会同步, 否则会在新文件夹创建新文件, 造成冗余

- `skipCreate`：服务器没有的文件夹和文件会是否跳过. 
- `ignoreExisting`：服务器已经有的文件是否跳过
- `update`：只有本地文件有更新才上传到服务器

## watcher

- `files`：需要监听的文件，因为要监听dist文件夹的所有文件，所以可设为`**/*.*`。另外，`uploadOnSave`一定要设为false
- `autoUpload`：当然true
- `autoDelete`：当然false

## 实践

```json
{
    "name": "blog",
    "host": "121.37.191.55",
    "protocol": "sftp",
    "port": 22,
    "username": "root",
    "privateKeyPath": "~/.ssh/id_rsa",
    "remotePath": "/root/blog",
    "uploadOnSave": false,
    "useTempFile": false,
    "openSsh": false,
    "syncOption": {
        "delete": true,
        "skipCreate": false,
        "ignoreExisting": false,
        "update": true
    },
    "ignore": [
        "/.history",
        "/.git",
        "/node_modules/",
        "/src/.vuepress/.cache",
        "/src/.vuepress/.temp",
        "/src/.vuepress/dist",
        "/package-lock.json"
    ]
}


```



## 参考
- [sftp sync extension for VS Code](https://marketplace.visualstudio.com/items?itemName=liximomo.sftp)
- [vscode-sftp](https://github.com/liximomo/vscode-sftp/wiki/config)