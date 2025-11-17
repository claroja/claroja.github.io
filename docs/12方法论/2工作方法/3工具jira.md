# apply

## jira

1. ==dashboards==添加仪表盘, 添加挂件来查看==filter==,==calendar==等
   1. ==filter results== 用来展示==filter==的结果
   2. ==calendar== 用来展示日历, 在日历中设置颜色标记
2. ==project==用来设置项目
3. ==issues==用来设置==filter==
4. ==tempo==用来管理工时
5. ==boards==看板, 不常用
6. ==calendar==用来设置日历

## dashboard

1. 在`dashboard`中添加`Filter Results` 的 `gadget`, 用以展示需要的`issue`

## project

1. 点击左下角==Project settings==进行项目的配置
2. ==workflows==用来配置==issue==的工作流程
3. ==screens==用来配置==issue==的类型
4. ==fields==用来配置==issue==的显示字段
5. ==priorities==用来配置==issue==的优先级
6. ==versions==用来配置版本发布
7. ==components==用来设置模块

## issue和filter

### issue

1. 一个项目下有很多`issue`, 一般都设置类型为`task`的`issue`
2. 一个`issue`下可以设置`child issue`.
    建议使用`child issue`进行项目分阶段管理

### filter

1. 筛选器用来对issue进行筛选
2. 点击`Issues`, 点击`Search for Issues`
3. 使用`advance`模式集合`jql`语法, 对`issue`进行过滤. 最佳时间是:
   1. `project = 项目名称 AND status in (Open, "In Progress", Reopened, "To Do")` 查看自己负责的项目正在进行的issue
   2. `project != 项目名称 AND assignee = currentUser() AND status in (Open, "In Progress", Reopened, "To Do")` 查看非自己负责的项目的issue
4. 将filter保存下来
