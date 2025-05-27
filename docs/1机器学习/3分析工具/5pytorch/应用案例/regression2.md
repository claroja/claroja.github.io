# regression2



LSTM 是一个 Gated Recurrent Neural Network, 相比RNN, 它有两个特点:
- Short-term state: 输出当前时间的隐状态
- Long-term state: 存储, 拒绝信息


LSTM回归问题是一个时间序列问题. 一个具体例子, 我们将预测纽约市乘坐出租车的旅客数量, 数据来源于[kaggle](https://www.kaggle.com/gauravduttakiit/new-york-taxi)


## 观察数据
有10320条记录, 时间是从2014年7月到2015年1月, 观察2014年后六个月的数据.


观察数据, 我们很容易得到一些模式
- daily patterns (weekdays vs. weekends), 工作日和星期天
- weekly patterns (beginning vs. end of the week), 每周的开始和结束
- (public holidays vs. working days), 休息日和工作日







参考:
https://towardsdatascience.com/lstm-and-bidirectional-lstm-for-regression-4fddf910c655

https://blog.paperspace.com/time-series-forecasting-regression-and-lstm/
https://colab.research.google.com/github/dlmacedo/starter-academic/blob/master/content/courses/deeplearning/notebooks/pytorch/Time_Series_Prediction_with_LSTM_Using_PyTorch.ipynb
https://www.py4u.net/discuss/223107
https://romanorac.github.io/machine/learning/2019/09/27/time-series-prediction-with-lstm.html
https://curiousily.com/posts/time-series-forecasting-with-lstm-for-daily-coronavirus-cases/
https://machinelearningmastery.com/time-series-forecasting-long-short-term-memory-network-python/
