# pandoc模板


## 最佳实践

1. 在`vscode`根目录的`.vscode`文件夹下, 创建`tasks.json`
    ```json
    {
        // See https://go.microsoft.com/fwlink/?LinkId=733558
        // for the documentation about the tasks.json format
        "version": "2.0.0",
        "tasks": [
            {
                "label": "pandoc",
                "type": "shell",
                "command": "pandoc.exe",
                "args": [
                    "${file}",
                    "-o",
                    "${fileDirname}\\${fileBasenameNoExtension}.docx",
                    "-d",
                    "option.yml"
                ],
            }
        ]
    }
    ```

1. 在`C:\Users\UserName\AppData\Roaming\pandoc\defaults`路径下下创建`option.yml`配置文件

    ```yml
    reference-doc: custom.docx  # 指定模板的文件名
    resource-path: ['C:\Users\UserName\AppData\Roaming\pandoc'] # 指定reference-doc(模板文件)的路径
    ```

1. 在`C:\Users\UserName\AppData\Roaming\pandoc`路径下下创建`custom.docx`模板文件


## 模板下载地址

https://github.com/Achuan-2/pandoc_word_template/tree/main?tab=readme-ov-file使用这个模板


## 官方模版样式制作

1. 随便写一个`.md`文档

    ```markdown
    # 这个是标题

    ## 第1段

    ### 第1.1.段

    ### 第1.2.段

    看`resource code`

    看**粗体**

    看==高亮==
    ```


2. 生成word文档, 获得`.docx`文件, 并修改相应的样式

    ![word](./word/word样式修改.png)

3. 将该文档放在`C:\Users\name\AppData\Roaming\pandoc`中, 并在`option.yml`中配置:
    ```yml
    reference-doc: custom.docx
    resource-path: ['C:\Users\Xinyu\AppData\Roaming\pandoc'] # 指定reference-doc(模板文件)的路径
    ```

4. 执行命令`pandoc test.md -o test.docx -d option.yml`



✨注意:
1. 设置了首行缩进后, 发现表格里的正文内容也变成了首行缩进, 通过样式很难修改, 可以直接在word里的`布局`中, 反向调节缩进.







## 参考
- https://blog.csdn.net/fengdu78/article/details/103907960
- https://ld246.com/article/1702570646974