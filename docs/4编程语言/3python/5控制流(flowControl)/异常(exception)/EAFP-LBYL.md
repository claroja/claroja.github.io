# EAFP-LBYL


为了增强程序的健壮性，通常会增加一些检查数据项的代码，用术语来说就是防御性编程，在检查的时候通常有一下两种风格:
1. “Easier to Ask for Forgiveness than Permission.”（请求宽恕比许可更容易）— EAFP
    ```python
    try:
        x = test_dict["key"]
    except KeyError:
        # key 不存在
    ```

2. “Look Before You Leap”（三思而后行 ）— LBYL

    ```python
    if "key" in test_dict:
        x = test_dict["key"]
    else:
        # key 不存在
    ```

二者比较:
1. 性能比较
    EAFP 的异常处理往往也会影响一点性能，因为在发生异常的时候，程序会进行保留现场、回溯traceback等操作，但在异常发生频率比较低的情况下，性能相差的并不是很大。
    而 LBYL 则会消耗更高的固定成本，因为无论成败与否，总是执行额外的检查。

2. 代码易读性
    EAFP将业务逻辑代码，跟防御性代码隔离开，让开发者可以更专注于开发业务逻辑，不管数据变量是否合理，按照正常的逻辑思维执行下去
    LBYL则容易打乱开发者的思维，在做一件事之前，总是要先要判断能不能这样做, 需要增加很多判断内容，代码连贯性差.










