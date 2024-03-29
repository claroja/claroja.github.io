# level2





## 数据分析基本概念

### EDIT数字化模型
探索(Exploration): 指标计算，并绘制业务运行监控看板
诊断(Diagnosis)：分析定位问题
指导(Instruction)：根据知识库，策略库定制策略
工具(tool)


### 企业数据分析分层

层级|需求|数据产品类型|数据范围
--|--|--|--
战略层|做什么|行业指标|国家统计局，行业报告和市场调研
管理层|做的如何|智能报表|企业业务系统
执行层|如何做|智能分析决策型|企业业务系统，网络数据


GM(General Manager)总经理
VP(Vice President)副总裁
CEO(Chief Executive Officer)首席执行官，类似总经理、总裁，是企业的法人代表。
COO(Chief Operations Officer)首席运营官，类似常务总经理
CFO(Chief Financial Officer)首席财务官，类似财务总经理
CTO(Chief technology officer)首席技术官 类似总工程师
HRD(Human Resource Director)人力资源总监


[董事长 CEO COO SVP VP各自的称谓](https://zhidao.baidu.com/question/86738433.html)

### CRISP-DM
业务理解(business understanding)
数据理解(data understanding)
数据准备(data preparation)
建模(modeling)
模型评估(Evaluation)
模型发布(Deployment)













1. 数据采集与处理
    1. 数据采集方法
        【领会】
        一手数据与二手数据来源渠道
        优劣势分析
        使用注意事项
        【熟知】
        一手数据采集中的概率抽样与非概率抽样的区别与优缺点
        【运用】
        概率抽样方法，包括简单随机抽样、分层抽样、系统抽样、分段抽样 明确每种抽样的优缺点
        根据给定条件选择最可行的抽样方式
        计算简单随机抽样所需的样本量
    2. 市场调研和数据录入
        【熟知】
        市场调研的基本步骤（提出问题、理论推演、收集材料、构建模型、归因分析）
        样本选取方式的适应性及优缺点
        问卷设计原理，问卷题型设置以及每类题型的数据编码及录入
    3. 数据探索与可视化
        【领会】
        数据探索的目的与意义
        常用数据可视化工具软件（EXCEL BI、SPSS、PYTHON等）
        【熟知】
        数据探索与数据预处理之间的关系
        数据探索常用数据描述方法：集中趋势分析、离中趋势分析、数据分布关系、图分析
        数据探索常用数理统计方法：假设检验、方差检验、相关分析、回归分析、因子分析
        【应用】
        能够通过使用数据可视化工具（EXCEL BI、SPSS、PYTHON等）来完成相关数据分析项目的数据探索任务。（说明：考试中不会考核该部分工具和软件的使用方法）。
    4. 数据预处理方法
        【熟知】
        数据预处理的基本步骤，包括数据集成（不同数据源的整合）、数据探索、数据变换（标准化）、数据归约（维度归约技术、数值归约技术），这部分内容不涉及计算，只需要根据需求明确可选的处理技术即可。
        【应用】
        数据清洗，包括填补遗漏的数据值（根据业务场景使用常数、中位数、众数等方法，不涉及多重查补的方法）、平滑有噪声数据（移动平均）、识别或除去异常值（单变量根据中心标准化值，多变量使用快速聚类），以及解决不一致问题（熟知概念即可），查重（只考核SQL的语句，不涉及其它语言）。
2. 数据模型管理
    【领会】
    数据和信息的概念；数据分类中的主数据、交易数据和元数据概念
    数据库建模中概念、逻辑、物理模型之间的关系
    数据库范式的概念、数据仓库和数据集市、ETL过程
    【熟知】
    关系模型与维度模型的使用场景
3. 标签体系与用户画像
    1. 标签体系设计原理
        【领会】
        区分标签和指标的概念
        精准营销与量化风控的概念
        消费者决策进程
        客户、产品、渠道标签的核心内容
        【熟知】
        分层标签和分群标签
        马斯洛需求层次理论与精准营销的关系
    2. 标签的加工方式
        【领会】
        基础、统计、模型标签
        【熟知】
        RFM模型
    3. 用户画像
        【领会】
        用户旅程分析
        标准用户分析与偏离度分析
        【熟知】
        用户画像技术在营销获客、风险防控中的应用
4. 统计分析
    1. 抽样估计
        【领会】
        随机试验、随机事件、随机变量的概念
        总体与样本的概念
        抽样估计的理论基础
        正态分布及三大分布的函数形式和图像形式
        抽样的多种组织形式
        确定必要样本容量的原因
        大数定律与中心极限定理的意义与应用
        【熟知】
        随机事件的概率
        抽样平均误差的概念与数学性质
        点估计与区间估计方法的特点与优缺点
        全体总体与样本总体
        参数和统计量
        重复抽样与不重复抽样
        抽样误差的概念对总体平均数、总体成数和总体方差的区间估计方法
        必要样本容量的影响因素
        【应用】
        随机变量及其概率分布
        全部可能的样本单位数目的概念及其在不同抽样方法下的确定
        抽样平均误差在实际数据分析中的计算方法
    2. 假设检验
        【领会】
        假设检验的基本概念
        其基本思想在数据分析中的作用
        假设检验的基本步骤
        假设检验与区间估计的联系
        假设检验中的两类错误
        【熟知】
        检验统计量、显著性水平及对应临界值（Critical Value）的基本定义
        P值的含义及计算
        如何利用P值进行检验
        z检验统计量
        t检验统计量
        F检验统计量
        X2检验统计量的函数形式和检验步骤
        【应用】
        实现单样本t检验
        两独立样本t检验的步骤和检验中使用的统计量与原假设
        两种检验应用的数据分析场景
    3. 方差分析
        【领会】
        方差分析的相关概念
        单因素方差分析的原理
        统计量构造过程
        【熟知】
        单因素方差分析的基本步骤
        总离差平方和（SST）的含义及计算
        组间离差平方和（SSA）的含义及计算
        组内离差平方和（SSE）的含义及计算
        单因素方差分析的原假设
        【应用】
        实现单因素方差分析的步骤
        对方差分析表的分析以及多重比较表的分析
    4. 一元线性回归分析
        【领会】
        相关图的绘制与作用
        相关表的编制与作用
        相关系数定义公式的字母含义
        估计标准误差与相关系数的关系
        【熟知】
        相关关系的概念与特点
        相关关系与函数关系的区别与联系
        相关关系的种类
        相关系数的意义以及利用相关系数的具体数值对现象相关等级的划分
        回归分析的概念
        回归分析的主要内容和特点
        建立一元线性回归方程的条件
        一元线性回归系数的最小二乘估计
        应用回归分析应注意的问题
        估计标准误差的意义及计算
        【应用】
        运用简捷法公式计算相关系数与回归系数
        相关分析分析中应注意的问题
        回归分析与相关分析的区别与联系
5. 数据分析模型
    总体要求
    领会模型基本原理，数值模型操作流程，懂得模型应用场景，能够完成数据建模分析报告。
    1. 主成分分析
        【领会】
        主成分分析的计算步骤
        主成分分析中对变量自身分布和多变量之间关系的假设以及模型设置
        【熟知】
        适用于主成分分析的变量度量类型。通过分析结果，选取合适的保留主成分的个数，注意区分两种不同的分析目的（尽量压缩变量、避免共线性情况下保留更多信息）保留主成分个数的评判标准的差异。
        【应用】
        在深入理解主成分的意义的基础之上，在遇到业务问题时，有能力决定是否使用主成分分析方法；有能力决定何时采用相关系数计算方法和协方差矩阵计算方法；有能力解释主成分得分的结果；根据变量分布情况进行函数转换。
    2. 因子分析
        【领会】
        了解因子分析模型设置，只需要关注主成分法的计算步骤
        【熟知】
        适用于因子分析的变量度量类型，通过分析结果，选取合适的因子个数。
        常用因子旋转的方法
        【应用】
        在遇到业务问题时，有能力决定是否使用因子分析，还是使用主成分分析方法就可以了；有能力根据原始变量在各因子上的权重明确每个因子的意义；有能力对大量变量进行维度分析，分维度打分，并比较与专家打分（德尔菲法）的区别；在聚类前对数据进行描述，发现理想的聚类方式和数量。
    3. 回归分析
        【领会】
        线性回归的综合应用
        【熟知】
        明确线性回归的6个经典假设（线性模型、不存在共线性、残差期望为0（无内生性）、同方差、正态性、随机抽样）
        独立同分布的概念
        明确违反上述假设后出现的问题
        模型是否违反经典假设的检验方法与模型纠正的方法
        变量筛选方法
        离群值、指标计算方法
        明晰横截面和时间序列数据在回归建模上的差异
        【应用】
        结合业务构建回归模型并且解释回归系数
        根据业务场景与变量分布情况进行函数转换
        解释变量为分类变量时的处理方法
        区分预测性建模与解释性建模的关系
        使用结果进行新样本预测
        进行客户价值分析的基本步骤与注意事项
    4. 分类分析
        【领会】
        卡方检验计算公式
        二分类逻辑回归的计算公式
        【熟知】
        分类变量是否存在相关关系的描述方法和检验方法，涉及列联表分析、卡方检验
        似然比与Logit转换
        二分类逻辑回归模型构建与变量筛选
        模型评估的方法，涉及混淆矩阵、ROC曲线
        【应用】
        结合业务构建回归模型并且解释回归系数
        根据业务场景与变量分布情况进行函数转换
        使用结果进行新样本预测
        逻辑回归与多元线性回归模型的结合应用
        进行客户流失预测、信用评级、精准营销等模型的基本步骤与注意事项
    5. 聚类分析
        【领会】
        多种聚类算法的特点
        迭代的概念与实现
        【熟知】
        聚类方法的基本逻辑
        距离的计算
        系统聚类和K-Means聚类的基本算法和优缺点
        系统聚类的计算步骤，包括两点距离、两类合并的计算方法
        系统聚类法中选择最优聚类数量的方法
        K-Means聚类的基本算法
        聚类分析变量标准化的原因和计算方法
        变量需要进行主成分分析的原因
        变量进行函数转化的原因和计算方法
        【应用】
        结合客户画像、客户细分、商品聚类、离群值检验（欺诈、反洗钱）等业务运用场景，选取合适的聚类方法与步骤。
        聚类事后分析，根据聚类后变量分布情况获取每类的特征。
    6. 时间序列
        【领会】
        明确趋势分解法、ARIMA方法、时间序列回归方法的差异和适用场景
        明确ARIMA方法的计算方法
        【熟知】
        趋势分解法，涉及乘法模型、加法模型
        ARIMA方法的具体步骤；时间序列回归的方法
        【应用】
        结合业务（业绩预测、预警），选取合适的分析方法
        进行业务时间序列预测等模型的基本步骤与注意事项
6. 数字化工作方法(50-53)
    1. 业务探查与问题定位(51)
        【领会】
        异常事件严重度评估准则。
        业务流程等事件还原工具。
        【熟知】
        业务流程图的绘制。
    2. 问题诊断(52)
        【领会】
        近因分析的头脑风暴法与量化分析分析工具的选取。
        根本原因分析中的5WHY分析法，原因型和对策型因果图。
        【熟知】
        通过帕累托分析识别要点。
        通过散点图、关联图、亲和图进行关联分析。
        通过漏斗分析、用户画像、留存分析、跟踪数字足迹进行探查。
        绘制原因型因果图。
    3. 业务策略优化和指导(53)
        【领会】
        业务目标设定原则
        线性规划的组成部分、标准形式。
        整数规划与去尾法线性规划的差异性。
        二次规划的组成部分、标准形式。
        知识库的类型和组成部分。
        策略库的类型和组成部分。
        【熟知】
        线性规划的建模步骤。
        二次规划的建模步骤。
        流程优化的分析方法和工具。
        【应用】
        根据题目要求给出目标函数和约束条件。










## 个人标签

1. 身份属性: 性别, 电话, 籍贯, 民族, 证件
2. 教育属性: 院校, 学历, 毕业时间
3. 社交属性: 社交工具(微信, 微博, QQ)
4. 工作属性: 公司性质, 行业性质, 职位, 职务
5. 居住属性: 居住地址
6. 金融属性: 存款, 贷款, 投资
7. 个性属性: 兴趣爱好
8. 产品属性: 衣服, 电子设备
9. 关系属性: 父母, 子女, 配偶



## 抽样方法

1. 简单随机抽样(SPS): 完全随机抽取, 在类别间差异程度较少和树木较少时采用此方法
2. 分层抽样(STR): 将总体按类别分层, 然后在没层等比例抽取
3. 等距抽样: 将总体进行排序, 根据抽样比例确定抽样间距, 随机确定第一个样本, 按等距抽取. 适用于各类别间差异大, 类型多的情况.
4. 多段抽样: 将总体按类别进行多次细分, 比如市, 区, 街道

## 样本量的确认
$$
n = \frac{(Z_{\alpha/2})^2\sigma^2}{E^2}
$$
$n$: 样本量
$\sigma^2$: 方差,总体的方差越大, 需要采用的样本量越多
$E$: 抽样误差(根据均值的百分比设定), 如果需要抽样误差减小为1/2, 则抽样量需要增加4倍
$Z$: 为可靠性系数, 即置信度, 置信度为95%时, Z=1.96, 置信度为90%时, Z=1.645. 置信度越高需要的样本量越多, 95%置信度比90%置信度采样量多40%.


样本量确认公式:
$$
n = \frac{Z^2p(1-p)}{e^2} 
$$
$e$: 允许误差大小, 假设希望真实总体比例落在估计值的正负0.05之间, 即e=0.05
$Z$: 正态分布统计量, 对应调查结果在95%的置信范围内, Z=1.96
$p$: 研究对象变化程度(百分比), 一般情况下不知道p的取值, 通常可以取p(1-p)最大的情况,即p=0.5.
所以:
$$
n = \frac{1.96^2*0.}{}
$$



















## 53
### 线性规划
某工厂在计划期内要安排1,2两种产品的生产, 已知生产单位产品所需的设备台时及A,B两种原材料的消耗,资源的限制, 如下表:
*|1|2|资源限制
--|--|--|--
设备|1|1|300台时
原料A|2|1|400千克
原料B|0|1|250千克
单位产品获利|50元|100元|*

问题: 工厂应该分别生产多少单位1,2产品才能使工厂获利最多?

Maximize obj: 
$$z = 50x_1+100x_2$$
Subject to:
$$
\begin{align*} 
& x_1+x_2 < 300\\ 
& 2x_1+x_2 < 400 \\ 
& x_2 < 250 \\
$ x_1,x_2 > 0 
\end{align*}
$$



线性规划的组成要素:
目标函数 $Max F$ 或 $Min F$
约束条件 s.t. (subject to) 满足于
变量范围

LP文件格式:
Maximize obj: $c_1x_1+c_2x_2+...+c_nx_n$
Subject to: $a_{11}x_1+a_{12}x_2+...+a_{1n}x_n \leq b1$
Bounds: $0 \leq x_1 \leq C_1$


### 整数规划
某公司拟用集装箱托运甲乙两种货物, 这两种货物每件的体积, 重量, 可获利润以及托运所受限制如表所示:
货物|每件体积|每件重量|利润
--|--|--|--
甲|195|4|2
乙|273|40|3
托运限制|1365|140|
甲种货物至多托运4件, 问两种货物各托运多少件, 可以使利润最大化:
Maximize obj: $z = 2x_1+3x_2$
Subject to:
$$

\begin{align*} 
& 195x_1+273x_2 \leq 1365 \\
& 4x_1 + 40x_2 \leq 140 \\
& x_1 \leq 4 \\
& x_1,x_2 \geq 0, 且为整数
\end{align*}

$$ 
如果去掉最后一个约束, 就是线性规划问题. 
首先解得线性规划的最优解为$x_1=2.44, x_2=3.26$, 目标函数值为14.66.
然后解得整数规划的最优解为$x_1=4, x_2=2$, 目标函数值为14.
如果所有变量都为非负整数, 则称为纯整数规划问题.
如果有一部分变量为实数, 则称为混合整数规划问题.
如果变量的取值只限于0和1, 则称为0-1规划问题.


LP文件格式:
Maximize obj: $c_1x_1+c_2x_2+...+c_nx_n$
Subject to: $a_{11}x_1+a_{12}x_2+...+a_{1n}x_n \leq b1$
Bounds: $0 \leq x_1 \leq C_1$
Generals: $x_1...$

### 二次规划
Maximize obj: $z=c_1x_1+c_2x_2+c_3x_1^2+c_4x_1*x_2...$
Subject to:
$$
a_{11}x_1+a_{12}x_2+...+a_{1n}x_n = m_1  \\
b_{b1}x_1^2+b_{b2}x_2^2+...+b_{bn}x_n^2 = n_1 \\
x_1,x_2,...,x_n \geq 0,b_i =\geq 0
$$




### 知识库


### 策略库


### 业务流程优化


