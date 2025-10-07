# 多行

## 分类表达式

$$
f(n)
\begin{cases}
n, & if\ n\ is\ even\\
3n + 1, & if\  n\ is\ odd
\end{cases}
$$

- 使用`\begin{cases}…\end{cases}`定义
- 使用`\\` 来分类(不同的行)
- 使用`&` 指示需要对齐的位置，
- 使用`\空格`表示空格。


## 多行表达式
$$
\begin{split} 
a&=b+c-d \\ 
&\quad +e-f\\ 
&=g+h\\ 
& =i 
\end{split}
$$

- 使用`\begin{split}...\end{split}`表示多行表达式的开始和结束
- `\\`表示换行
- `&`表示对其位置


## 方程组
$$
\left \{ 
\begin{array}{c}
a_1x+b_1y+c_1z=d_1 \\ 
a_2x+b_2y+c_2z=d_2 \\ 
a_3x+b_3y+c_3z=d_3
\end{array}
\right.
$$

- 使用`\begin{array}{c}...\end{array}`表示多行表达式的开始和结束
- 使用`\left \{ ... \right.`来添加括号
- 使用`\\`表示换行



## 多行对齐
`&`表示`对齐的位置`, `&`左侧文字左对齐, 当`&`在最左侧时表示所有文字左对齐
`\\` 表示换行
`align` 默认每一行会带编号, `*`星号表示不显示编号
$$
\begin{align*}
& y=3x  \\
& y=3x+2  \\
& y=3x^2+2x+1
\end{align*}
$$

参考:
https://www.cnblogs.com/jingwhale/p/4250296.html