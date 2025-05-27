Click Through Rate(CTR), 计算公式为：

CTR = 点击广告的次数 / 广告展示的次数


是一个分类问题, 预测用户会不会点击具体的广告.



1. [ctr_xgb](3_1xgb.md): 一般的二分类问题
2. [ctr_lgb-lr](3_1lgb-lr.md): 先用lgb进行特征提取, 再用lr进行二分类
3. [ctr_FM](1_1FM.md): 在特征稀疏的情况下, 用因子分解机（Factorization Machine）进行特征学习