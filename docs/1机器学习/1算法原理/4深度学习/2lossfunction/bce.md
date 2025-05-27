# bce


## code implement
```python
import torch
input = torch.tensor([[-0.4089,-1.2471,0.5907]]) # the logits of the net of one sample
target= torch.FloatTensor([[0,1,1]])  # target includes multilabels
loss = torch.nn.BCELoss()(torch.nn.Sigmoid()(input),target)
tensor(0.8166)
```


## Formula Derivation
$$BCELoss = \frac{1}{n}\sum(y_n\times lnx_n + (1-y_n) \times ln(1-x_n))$$

first label:
$$
0 × ln ⁡ 0.3992 + ( 1 − 0 ) × ln ⁡ ( 1 − 0.3992 ) = − 0.5095 0 \times \ln 0.3992+ (1-0) \times \ln (1-0.3992)=-0.50950×ln0.3992+(1−0)×ln(1−0.3992)=−0.5095
$$
second label:
$$
1 × ln ⁡ 0.2232 + ( 1 − 1 ) × ln ⁡ ( 1 − 0.2232 ) = − 1.4997 1 \times \ln 0.2232+ (1-1) \times \ln (1-0.2232)=-1.49971×ln0.2232+(1−1)×ln(1−0.2232)=−1.4997
$$
third label:
$$
1 × ln ⁡ 0.6435 + ( 1 − 1 ) × ln ⁡ ( 1 − 0.6435 ) = − 0.4408 1 \times \ln 0.6435+ (1-1) \times \ln (1-0.6435)=-0.44081×ln0.6435+(1−1)×ln(1−0.6435)=−0.4408
$$

calculate the mean of one sample:
$$
mean_sample = \frac{0.5095+1.4997+0.4408}{3}=0.8167
$$
calculate the mean of all sample(this case is 1) of one batch:
$$
mean_batch = \frac{0.8167}{1}=0.8167
$$


## BCEWithLogitsLoss
BCEWithLogitsLoss includes Sigmoid and BCELoss.In other words, if we use BCEWithLogistsLoss, the net do not need output sigmoid. 

```python
import torch
input = torch.tensor([[-0.4089,-1.2471,0.5907]]) # the logits of the net of one sample
target= torch.FloatTensor([[0,1,1]])  # target includes multilabels
loss = torch.nn.BCEWithLogitsLoss()(input,target)
tensor(0.8166)
```

refs:
https://blog.csdn.net/qq_22210253/article/details/85222093