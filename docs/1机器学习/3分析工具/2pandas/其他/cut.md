

## 实战

主要用在观察连续变量的分布:
1. 连续变量必须密度图才能展示, 
2. 如果想要通过pandas直接观察, 则要先将连续变量进行分箱

默认等宽分箱的过程是$\frac{最大值-最小值}{bins}$, 然后将对应的值, 替换成箱子的名字, 箱子的名字默认是区间.



## API

### 方法
```python
pandas.cut(
    x,                      # array-like, 一维数据
    bins,                   # int, sequence of scalars, or IntervalIndex,   
    right=True,             # bool, 右闭区间
    labels=None,            # array or False, 箱的名字
    retbins=False,          # bool, 是否返回bin
    precision=3,            # int, 箱名字的精度
    include_lowest=False,   # bool,
    duplicates='raise',     # optional, {‘raise’, ‘drop’}
    ordered=True            # bool
)
```

1. x ： 一维数组（对应前边例子中提到的销售业绩）
2. bins ：整数，标量序列或者间隔索引，是进行分组的依据，

    1. 如果填入整数n，则表示将x中的数值分成等宽的n份（即每一组内的最大值与最小值之差约相等）；
    2. 如果是标量序列，序列中的数值表示用来分档的分界值
    3. 如果是间隔索引，'bins'的间隔索引必须不重叠

1. labels : 数组或布尔值，可选.指定分箱的标签

    1. 如果是数组，长度要与分箱个数一致，比如'bins=[1、2、3、4]'表示（1,2]，（2,3],（3,4]一共3个区间，则labels的长度也就是标签的个数也要是3
    2. 如果为False，则仅返回分箱的整数指示符，即x中的数据在第几个箱子里
    3. 当bins是间隔索引时，将忽略此参数



### 返回

1. out: Categorical, Series, or ndarray

    根据label有不同的返回
    
    1. label=None, 返回Series, 元素是间隔(interval)类型
    2. sequence of scalars, 
    3. label=False, 返回包含整型的数组ndarray

2. bins:



## 参考
1. https://pandas.pydata.org/pandas-docs/stable/user_guide/reshaping.html#reshaping-tile-cut
1. https://zhuanlan.zhihu.com/p/143589729