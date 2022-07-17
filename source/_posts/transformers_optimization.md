# optimizer
## AdamW (PyTorch)



# Schedules


## warmup
[神经网络中 warmup 策略为什么有效；有什么理论解释么？](https://www.zhihu.com/question/338066667)

## API


### get_scheduler

`transformers.get_scheduler` get `scheduler` by `name`

`get_scheduler("linear")` is equal to `get_linear_schedule_with_warmup()`
### get_linear_schedule_with_warmup
`transformers.get_linear_schedule_with_warmup`

Create a schedule with a learning rate that
decreases linearly from the initial lr set in the optimizer to 0,
after a warmup period during which it increases linearly from 0 to the initial lr set in the optimizer.




参考:
https://huggingface.co/docs/transformers/main_classes/optimizer_schedules
