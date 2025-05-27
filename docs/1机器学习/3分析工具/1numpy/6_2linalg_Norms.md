# linalg



```python
linalg.norm(
    x,                  # 表示矩阵（也可以是一维）
    ord=None,           # 范数类型
    axis=None,          # 计算轴, 1表示行向量, 0表示列向量, None表示矩阵范数
    keepdims=False      # 是否保持矩阵的二维特性
)
```


## 范数(ord)


### 向量的范数

1. ord=1: 一范数, $l_1=|x_1| + |x_2| + ... + |x_n|$
2. ord=2(默认): 二范数, $l_2=\sqrt{x_1^2 + x_2^2 + ... + x_n^2}$
3. ord=np.inf: 无穷范数, $l_\infty = max(|x_i|)$

### 矩阵的范数

1. ord=1：列和的最大值
2. ord=2：|λE-ATA|=0，求特征值，然后求最大特征值得算术平方根
3. ord=∞：行和的最大值






## Norms and other numbers
|方法|描述|
|	--	|	--	|
|	linalg.norm(x[, ord, axis, keepdims])	|	求范数， 默认是二范数	|
|	linalg.cond(x[, p])	|	Compute the condition number of a matrix.	|
|	linalg.det(a)	|	Compute the determinant of an array.	|
|	linalg.matrix_rank(M[, tol, hermitian])	|	Return matrix rank of array using SVD method	|
|	linalg.slogdet(a)	|	Compute the sign and (natural) logarithm of the determinant of an array.	|
|	trace(a[, offset, axis1, axis2, dtype, out])	|	Return the sum along diagonals of the array.	|



## 参考:
1. https://docs.scipy.org/doc/numpy/reference/routines.linalg.html