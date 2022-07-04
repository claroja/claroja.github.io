---
title: LaTex
toc: true
date: 2021-10-25 22:03:54
tags:
---

# 标识符
- 行内(inline)使用`$...$`
- 块(block)使用`$$...$$`

# 特殊符号:分组
显示 | LaTeX语法
-- | --
$x^{10}$|`$x^{10}$`

所以想要显示`{}`本身, 需要加上`\`转义符号, 既`\{\}`

# 括号
显示 | LaTeX语法
-- | --
$()$                     |`$()$`
$[]$                     |`$[]$`
$\{\}$                   |`$\{\}$`
$\langle\rangle$         |`$\langle\rangle$`
$\left(\frac x y \right)$|`$\left(\frac x y \right)$`

`\left(`和`\right)`会和相邻的公式自适应

# 数学
显示 | LaTeX语法
-- | --
$X^2_1$                |`$X^2_1$`
$\frac x y$            |`$\frac x y$`
$\sqrt [x] y$          |`$\sqrt [x] y$`
$\sum_{i=1}^n{a_i}$    |`$\sum_{i=1}^n{a_i}$`
$\int$|`$\int$`
$\int_0^\infty{f(x)dx}$|`$\int_0^\infty{f(x)dx}$`
$\lim_{x\to 0}$        |`$\lim_{x\to 0}$`
$\sin(x)$              |`$\sin(x)$`
$\ln(x)$               |`$\ln(x)$`
$\max(a,b)$            |`$\max(a,b)$`
$\vec a$               | `$\vec a$`
$\ge$|`$\ge$`
$\gt$|`$\gt$`
$\le$|`$\le$`
$\lt$|`$\lt$`


# 逻辑符号
显示 | LaTeX语法
-- | --
$\infty$     |`$\infty$`
$\cup$       |`$\cup$`
$\cap$       |`$\cap$`
$\subset$    |`$\subset$`
$\subseteq$  |`$\subseteq$`
$\supset$    |`$\supset$`
$\supseteq$  |`$\supset$`
$\in$        |`$\in$`
$\notin$     |`$\notin$`
$\varnothing$|`$\varnothing$`
$\forall$    |`$\forall$`
$\exists$    |`$\exists$`
$\lnot$      |`$\lnot$`
$\nabla$     |`$\nabla$`
$\partial$   |`$\partial$`
$\bot$|`$\bot$`

# 希腊字
小写|大写|LaTeX语法|
--|--|--
$\alpha$  |$\Alpha$  |`$\alpha$  `
$\beta$   |$\Beta$   |`$\beta$   `
$\gamma$  |$\Gamma$  |`$\gamma$  `
$\delta$  |$\Delta$  |`$\delta$  `
$\epsilon$|$\Epsilon$|`$\epsilon$`
$\zeta$   |$\Zeta$   |`$\zeta$   `
$\eta$    |$\Eta$    |`$\eta$    `
$\theta$  |$\Theta$  |`$\theta$  `
$\iota$   |$\Iota$   |`$\iota$   `
$\kappa$  |$\Kappa$  |`$\kappa$  `
$\lambda$ |$\Lambda$ |`$\lambda$ `
$\mu$     |$\Mu$     |`$\mu$     `
$\nu$     |$\Nu$     |`$\nu$     `
$\xi$     |$\Xi$     |`$\xi$     `
$\omicron$|$\Omicron$|`$\omicron$`
$\pi$     |$\Pi$     |`$\pi$     `
$\rho$    |$\Rho$    |`$\rho$    `
$\sigma$  |$\Sigma$  |`$\sigma$  `
$\tau$    |$\Tau$    |`$\tau$    `
$\upsilon$|$\Upsilon$|`$\upsilon$`
$\phi$    |$\Phi$    |`$\phi$    `
$\chi$    |$\Chi$    |`$\chi$    `
$\psi$    |$\Psi$    |`$\psi$    `
$\omega$  |$\Omega$  |`$\omega$  `


# 矩阵
起始标记`\begin{matrix}`，结束标记`\end{matrix}`, 每行末尾标记`\\`，元素之间以`&`分隔

`\begin{matrix} 0 & 1 \\ 1 & 0 \end{matrix}`

加括号`\left(` `\right)`
`\left( \begin{matrix} 0 & 1 \\ 1 & 0 \end{matrix} \right)`



```
$$\begin{matrix}
1&0&0\\
0&1&0\\
0&0&1\\
\end{matrix}$$
```

$$\begin{matrix}
1&0&0\\
0&1&0\\
0&0&1\\
\end{matrix}$$


## 边框
- pmatrix ：小括号边框

```
$$\begin{pmatrix}
1&0&0\\
0&1&0\\
0&0&1\\
\end{pmatrix}$$
```
$$\begin{pmatrix}
1&0&0\\
0&1&0\\
0&0&1\\
\end{pmatrix}$$
- bmatrix ：中括号边框
```
$$\begin{bmatrix}
1&0&0\\
0&1&0\\
0&0&1\\
\end{bmatrix}$$
```
$$\begin{bmatrix}
1&0&0\\
0&1&0\\
0&0&1\\
\end{bmatrix}$$
- Bmatrix ：大括号边框
```
$$\begin{Bmatrix}
1&0&0\\
0&1&0\\
0&0&1\\
\end{Bmatrix}$$
```
$$\begin{Bmatrix}
1&0&0\\
0&1&0\\
0&0&1\\
\end{Bmatrix}$$
- vmatrix ：单竖线边框
```
$$\begin{vmatrix}
1&0&0\\
0&1&0\\
0&0&1\\
\end{vmatrix}$$
```
$$\begin{vmatrix}
1&0&0\\
0&1&0\\
0&0&1\\
\end{vmatrix}$$
- Vmatrix ：双竖线边框
```
$$\begin{Vmatrix}
1&0&0\\
0&1&0\\
0&0&1\\
\end{Vmatrix}$$
```
$$\begin{Vmatrix}
1&0&0\\
0&1&0\\
0&0&1\\
\end{Vmatrix}$$

## 字体
显示 | LaTeX语法
-- | -- 
$\mathtt A$ | `$\mathtt A$`





# 多行表达式

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

参考:
https://www.caam.rice.edu/~heinken/latex/symbols.pdf
https://www.jianshu.com/p/a0aa94ef8ab2