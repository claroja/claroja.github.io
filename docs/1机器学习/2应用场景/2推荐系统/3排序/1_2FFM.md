# FFM

FFM（Field-aware Factorization Machine）是在在FM基础上发展出来的算法。FFM模型中引入了类别的概念，即field。先看下图：

clicked|country|day|ad_type
--|--|--|--
1|USA|26/11/15|Movie
0|China|1/7/14|Game
1|China|19/2/15|Game

在上面的广告点击案例中，“Day=26/11/15”、“Day=1/7/14”、“Day=19/2/15”这三个特征都是代表日期的，可以放到同一个field中。同理，Country也可以放到一个field中。简单来说，同一个categorical特征经过One-Hot编码生成的数值特征都可以放到同一个field，包括用户国籍，广告类型，日期等等。

在FFM中，每一维特征$x_i$，针对其它特征的每一种$field_{fj}$，都会学习一个隐向量$v_i,fj$。因此，隐向量不仅与特征相关，也与field相关。也就是说，“Day=26/11/15”这个特征与“Country”特征和“Ad_type"特征进行关联的时候使用不同的隐向量，这与“Country”和“Ad_type”的内在差异相符，也是FFM中“field-aware”的由来。

假设样本的n个特征属于f个field，那么FFM的二次项有nf个隐向量。而在FM模型中，每一维特征的隐向量只有一个。FM可以看作FFM的特例，是把所有特征都归属到一个field时的FFM模型。根据FFM的field敏感特性，可以导出其模型方程。

$$
y(x)=w_0+\sum_{i=1}^n w_ix_i + \sum_{i=1}^n\sum_{j=(i+1)}^n{v_(if_j),v_(j,f_i)x_ix_j}
$$
可以看到如果隐向量的长度是k，那么FFM的二次参数有 nfk 个，远多于FM模型的 nk个。此外，由于隐向量与field相关，FFM二次项并不能够化简，其预测复杂度是 O(kn^2)。

例子：
USER|Movie|Genre|Price
--|--|--|--
YuChin|3ldiots|Comedy,Drama|9.99

这条记录可以编码成5个特征，其中“Genre=Comedy”和“Genre=Drama”属于同一个field，“Price”是数值型，不用One-Hot编码转换。为了方便说明FFM的样本格式，我们将所有的特征和对应的field映射成整数编号。

Field name|Field index|Feature name| Feature index
--|--|--|--
User|1|User=YuChin|1
Movie|2|Movie=3ldiots|2
Genre|3|Genre=Comedy|3
Genre|3|Genre=Drama|4
price|4|Price|5

那么，FFM的组合特征有10项：





refs:
https://www.jianshu.com/p/781cde3d5f3d
https://blog.csdn.net/anshuai_aw1/article/details/105199606
https://www.csie.ntu.edu.tw/~cjlin/papers/ffm.pdf
https://www.csie.ntu.edu.tw/~r01922136/slides/ffm.pdf