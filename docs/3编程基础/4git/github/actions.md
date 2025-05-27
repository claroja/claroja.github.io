# actions


# github_actions

在上传github时, 自动触发工作流(workflow). 比如vuepress提交源码时, 在github服务器上自动触发编译, 生成githubpages. 配置文件下载git项目的`.github/workflows/deploy-docs.yml`中.


## 关键字段解释

- `name`: workflow 的名称。如果省略该字段，默认为当前 workflow 的文件名, 如`name: GitHub Actions Test`
- `on`: 定触发 workflow 的条件, 可以是单个事件, 如`on: push`, 也可以是多个`on: [push, pull_request]`. 另外还可以指定事件具体内容, 如指定`push`的`branch`

    ```yml
    on:
    push:
        branches:
        - master
    ```

- `jobs`: 文件的主体, 任务的具体内容

    - `job_id`, 每个`job_id`对应一个工作流. `name`是别名

        ```yml
        jobs:
            my_first_job:
                name: My first job
            my_second_job:
                name: My second job
        ```

    - `needs`, 定当前任务的依赖关系，即运行顺序。

        ```yml

        jobs:
        job1:
        job2:
            needs: job1
        job3:
            needs: [job1, job2]

        ```

    - `runs-on`, 指定运行所需要的虚拟机环境, 在github服务器上, 非本地, 如`runs-on: ubuntu-18.04`
    - `steps`, 指定每个 Job 的运行步骤, 每个步骤都可以指定: 

        - `name`：步骤名称。
        - `run`：该步骤运行的`action`, 就是命令
        - `env`：该步骤所需的环境变量
        - `uses`: 使用现有的`actions`
        - `with`: `uses`所需的参数


## 实践
这个是vuepress-hope主题创建时, 选择创建的. 仅需要在注释处做自定义的修改即可. 每次`push`源码后, 可以在`github`的`actions`中查看自动化流程

```yml

name: 部署文档

on:
  push:
    branches:
      # 确保这是你正在使用的分支名称
      - source

permissions:
  contents: write

jobs:
  deploy-gh-pages:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
        with:
          fetch-depth: 0
          # 如果你文档需要 Git 子模块，取消注释下一行
          # submodules: true



      - name: 设置 Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 20
          cache: npm

      - name: 安装依赖
        run: npm ci

      - name: 构建文档
        env:
          NODE_OPTIONS: --max_old_space_size=8192
        run: |-
          npm run docs:build
          > src/.vuepress/dist/.nojekyll

      - name: 部署文档
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          # 这是文档部署到的分支名称
          branch: main
          folder: src/.vuepress/dist
```





参考:
- [GitHub Actions 入门教程](https://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html)
- [GitHub Actions 文档](https://docs.github.com/zh/actions)












