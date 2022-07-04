---
title: lstm_regression
toc: true
date: 2021-11-30 21:01:11
---







1. 导入相关模块, 日志, 设备配置
```python
import pandas as pd
import numpy as np
from sklearn import preprocessing
import torch
from torch.utils.data import TensorDataset, DataLoader
import time
from torch import nn, optim
import math
import logging.config
import yaml

logging.config.dictConfig(yaml.safe_load(open('logging.yml', 'r')))
logger = logging.getLogger('mylog')
device = torch.device("cuda:0" if torch.cuda.is_available() else "cpu")

```




2. 定义网络

```python
class FlightLSTM(nn.Module):
    def __init__(self, input_size, hidden_size, num_layers, output_size, batch_size):
        super().__init__()
        self.batch_size = batch_size
        self.hidden_size = hidden_size
        self.lstm = nn.LSTM(input_size, hidden_size, num_layers, batch_first=True)
        self.fc = nn.Linear(hidden_size, output_size)

    def forward(self, x):
        # output: [BATCH_SIZE, time_step, hidden_size] 最上层的layer的每个时刻的输出特征
        # h_n: [num_layers,BATCH_SIZE, hidden_size] batch中, 每条序列, 所有layer的最后时刻的hidden_state
        output, (h_n,c_n) = self.lstm(x)
        output = output[:, -1, :] # 取最后一个时刻的输出, (BATCH_SIZE , hidden_size). 另外一个写法是 output = h_n[-1,:,:], 通过hidden_state来取
        output = self.fc(output)  # output.shape = (BATCH_SIZE , output_size)
        return output
```





3. 数据预处理

```python
# 1.获得数据
data_df = pd.DataFrame({
    "gentle":["boy","girl","boy","girl","boy","boy","girl","boy","girl","girl","girl"],
    "series":[1,2,3,4,5,6,7,8,9,10,None]
})  # type: pd.DataFrame

# 2. 缺失值处理
data_df = data_df.dropna()

# 3. 特征处理
data_np = data_df.to_numpy()
data_np_months = preprocessing.OneHotEncoder().fit_transform(data_np[:,0:1]).toarray()
result = np.hstack((data_np_months,data_np[:,1:2]))

# 4. 归一化处理


# 5. 切片处理
SEQ_LEN, FEATURE_SIZE = result.shape  # 序列的长度和特征数量
WIN_SIZE = 4  # 包含了3个features和1个label

li = []
for i in range(SEQ_LEN - WIN_SIZE + 1):
    li.append(result[i:i+WIN_SIZE])

res = np.array(li).astype("float32")
res = torch.tensor(res)

# 6. 拆分训练集和测试集
num_train = int(0.8 * SEQ_LEN)
num_valid = SEQ_LEN - num_train

x_train = res[:num_train,:-1,:]
y_train = res[:num_train,-1:,-1]
x_eval = res[num_train:, -1:, :]
y_eval = res[num_train:, -1:, -1]


train_dataset = TensorDataset(x_train, y_train)
DATA_LEN = train_dataset.__len__()
BATCH_SIZE = 2
BATCH_NUMS = math.ceil(DATA_LEN / BATCH_SIZE)

train_dataloader = DataLoader(
    dataset=train_dataset,
    batch_size=BATCH_SIZE,
    shuffle=False,
    num_workers=3,
)

eval_dataset = TensorDataset(x_eval, y_eval)
eval_dataloader = DataLoader(
    dataset=train_dataset,
    batch_size=BATCH_SIZE,
    shuffle=False,
    num_workers=3,
)
```


4. 训练模型
```python
model = FlightLSTM(input_size=FEATURE_SIZE, hidden_size=500, num_layers=1, output_size=1, batch_size=BATCH_SIZE).to(device)

LR=0.001
EPOCHS = 10
PRINT_FREQ = 2

criterion = nn.MSELoss()
optimizer = optim.Adam(model.parameters(), lr=LR)

eval_model = {}  # 用来存储
for epoch in range(EPOCHS):
    epoch_start = time.time()
    model.train()

    for batch_step, (batch_x, batch_y) in enumerate(train_dataloader):
        batch_x,batch_y = batch_x.to(device), batch_y.to(device)
        batch_y_hat = model(batch_x)
        loss = criterion(batch_y, batch_y_hat)
        loss.backward()
        optimizer.step()
        optimizer.zero_grad()

        model.eval()
        eval_batch_loss = 0
        with torch.no_grad():
            for batch_step_eval, (batch_x_eval, batch_y_eval) in enumerate(eval_dataloader):
                batch_x_eval, batch_y_eval = batch_x_eval.to(device), batch_y_eval.to(device)
                batch_y_eval_hat = model(batch_x_eval)
                eval_batch_loss_ = criterion(batch_y_eval, batch_y_eval_hat)  # type:torch.Tensor
                eval_batch_loss += eval_batch_loss_
        model.train()

        if batch_step % PRINT_FREQ == 0 and batch_step != 0:
            if len(eval_model) == 0 or eval_batch_loss < eval_model.get(min(eval_model, key=eval_model.get), 0.0):
                torch.save({'epoch': epoch,'model_state_dict': model.state_dict()}, f'./checkpoint/model_{epoch}_{batch_step}.pth')
            eval_model[f"{epoch}_{batch_step}"] = eval_batch_loss  # 将本次训练结果添加到记录中
            best_key = min(eval_model, key=eval_model.get)
            best_eval_loss = eval_model[best_key]

            logger.info(f'Epoch:{epoch}/{EPOCHS}, Batch:{batch_step}/{BATCH_NUMS}, TrainLoss:{loss:.4f}, '
                        f'EvalLoss:{eval_batch_loss:.4f}, Best_Index: model_{best_key}.pth, Best_Eval_Loss: {best_eval_loss}')

```







