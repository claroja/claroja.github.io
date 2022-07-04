---
title: gitlab_CICD
toc: true
date: 2021-10-25 22:03:54
tags:
---
 A pipeline is a collection of jobs split in different stages.

一个pipeline是由分配在不同stages的jobs组成的. 在同一个stage的job会并发执行.一般来说, 后一个stage会在前一个stage所有job执行成功后触发.


job: 定义具体的执行, 比如: 编译或者测试代码
stage: 定义何时运行job, 比如: test code stage在compile code stage之后

![pipeline-overview.png](https://about.gitlab.com/images/blogimages/pipeline-overview.png)

比较典型的pipeline包含以下的stages:
1. build stage, 包含的job称为compile
2. test stage, 包含的job称为test
3. staging stage, 包含的job称为deploy-to-stage
4. production stage, 包含的job称为deploy-to-prod


# job
job的命令,跑在`runner`(实际上就是一台服务器)上, 每个job是独立的.
在`.gitlab-ci.yml`中定义job
```sh
job1: # job的id
  script: "make;make install" # 执行的脚本
job2:
  script: "test.sh"
```

# stage
stage可以包含一组job, 先在全局定义.
```yml
stages:
  - build
  - test
  - deploy
```
- 所有在build stage中的job, 并发执行
- 所有build stage的job执行成功后, 触发test的执行
- 如果所有deploy stage执行成功,  pipeline就passed
- 任何的job失败, pipline都会failed, 其后的stage也不会执行
- 如果在`.gitloab-ci.yml`中没有定义stages, 默认会有build, test, deploy三个stages




参考:
https://docs.gitlab.com/ee/ci/jobs/index.html
https://docs.gitlab.com/ee/ci/yaml/index.html#stages
https://about.gitlab.com/blog/2018/01/22/a-beginners-guide-to-continuous-integration/