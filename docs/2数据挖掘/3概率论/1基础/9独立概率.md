# 独立概率

有一位美国数学家最怕坐飞机。他研究了近20年的统计数据，发现恐怖分子带炸弹上飞机的几率非常低。

但他还是不放心，又做了进一步的研究，发现两个人同时带炸弹上飞机的几率为零，于是他坐飞机都自己携带一枚炸弹。

这是个段子，很显然数学家带不带炸弹，和恐怖分子带不带炸弹完全没有关系。或者用数学的术语来说，这两者`独立`。

假设两个事件：
$$
A=恐怖分子携带炸弹,\quad B=数学家携带炸弹
$$
很显然，数学家携带炸弹的条件下，并不会影响恐怖分子携带炸弹的概率，也就是：
$$
P(A|B)=P(A)
$$
反过来，恐怖分子携带炸弹的条件下，也不会影响数学家携带炸弹的概率：
$$
P(B|A)=P(B)
$$
这两个式子可以总结为：
对于两个随机事件A、B，如果满足：
$$
P(AB)=P(A)P(B)
$$
则称A与B`相互独立`，或简称A与B`独立`，否则称A与B`不独立`或`相依`。

## 赌徒谬论
要是连续3次掷出正面，那下一次得到正面的概率有多高？
我们知道，连续出现4次正面的概率非常小：
$$
\frac{1}{2}\times\frac{1}{2}\times\frac{1}{2}\times\frac{1}{2}=\frac{1}{16}
$$
有些赌徒据此认为，已经出现3次正面了，那么下一次也得到正面的概率就非常小了。这被称为`赌徒谬误`。

## 样本空间
结合已经学习过的概率论知识，可以很好的反驳这个谬误。先画一下样本空间：
$$
\begin{array}{c|c}
    \hline
    \quad第一次\quad&\quad第二次\quad&\quad第三次\quad&\quad第四次\quad\\
    \hline 
    \\
    \quad \color{red}{\text{H}}\quad&\quad \color{red}{\text{H}} \quad&\quad \color{red}{\text{H}} \quad&\quad \color{red}{\text{H}} \quad\\ 
    \quad \text{H}\quad&\quad \text{H} \quad&\quad \text{H} \quad&\quad \text{T} \quad\\ 
    \quad \text{H}\quad&\quad \text{H} \quad&\quad \text{T} \quad&\quad \text{H} \quad\\ 
    \quad \text{H}\quad&\quad \text{H} \quad&\quad \text{T} \quad&\quad \text{T} \quad\\
    \quad \text{H}\quad&\quad \text{T} \quad&\quad \text{H} \quad&\quad \text{H} \quad\\ 
    \quad \text{H}\quad&\quad \text{T} \quad&\quad \text{H} \quad&\quad \text{T} \quad\\ 
    \quad \text{H}\quad&\quad \text{T} \quad&\quad \text{T} \quad&\quad \text{H} \quad\\ 
    \quad \text{H}\quad&\quad \text{T} \quad&\quad \text{T} \quad&\quad \text{T} \quad\\
    \quad \text{T}\quad&\quad \text{H} \quad&\quad \text{H} \quad&\quad \text{H} \quad\\ 
    \quad \text{T}\quad&\quad \text{H} \quad&\quad \text{H} \quad&\quad \text{T} \quad\\ 
    \quad \text{T}\quad&\quad \text{H} \quad&\quad \text{T} \quad&\quad \text{H} \quad\\ 
    \quad \text{T}\quad&\quad \text{H} \quad&\quad \text{T} \quad&\quad \text{T} \quad\\
    \quad \text{T}\quad&\quad \text{T} \quad&\quad \text{H} \quad&\quad \text{H} \quad\\ 
    \quad \text{T}\quad&\quad \text{T} \quad&\quad \text{H} \quad&\quad \text{T} \quad\\ 
    \quad \text{T}\quad&\quad \text{T} \quad&\quad \text{T} \quad&\quad \text{H} \quad\\ 
    \quad \text{T}\quad&\quad \text{T} \quad&\quad \text{T} \quad&\quad \text{T} \quad\\ 
     \\
    \hline
\end{array}
$$

可以看到，总共有16种可能性，只有第一种可能性是四次都是正面，所以投掷出四次都是正面的概率确实是$\frac{1}{16}$。
投掷三次正面后，样本空间缩小了，变得只有两种可能性了（这其实是一个条件概率）：
$$
\begin{array}{c|c}
    \hline
    \quad第一次\quad&\quad第二次\quad&\quad第三次\quad&\quad第四次\quad\\
    \hline 
    \\
    \quad \text{H}\quad&\quad \text{H} \quad&\quad \text{H} \quad&\quad \color{red}{\text{H}} \quad\\ 
    \quad \text{H}\quad&\quad \text{H} \quad&\quad \text{H} \quad&\quad \color{red}{\text{T}} \quad\\ 
     \\
    \hline
\end{array}
$$
所以第四次为正面的概率依然为$\frac{1}{2}$。


## 条件概率
假设4个事件为：
$$
A_1=“第1次抛出正面”,\quad A_2=“第2次抛出正面”
A_3=“第3次抛出正面”,\quad A_4=“第4次抛出正面”
$$
连续抛出4次正面的概率为：
$$
P(A_1A_2A_3A_4)=\frac{1}{16}
$$
而抛出3次硬币之后，再抛出正面的概率为：
$$
P(A_4|A_1A_2A_3)=\frac{1}{2}=P(A_4)
$$
从上面的分析可以看出：
赌徒谬误是混淆了`古典概率`与`条件概率`
第4次抛硬币和前3次抛硬币是`独立事件`
硬币是没有记忆的，它不会知道前面抛了多少次正面，它只知道下一次抛依然是$\frac{1}{2}$的概率得

### 三个事件的独立性
之前讨论的是两个事件的独立性，现在让我们推广到三个事件上去：
设A、B、C是三个事件，如果满足:
$$
\begin{cases}
P(AB)=P(A)P(B)\\
P(BC)=P(B)P(C)\\
P(AC)=P(A)P(C)
\end{cases}
\qquad\qquad\qquad(1)
$$
则称A、B、C是\color{Salmon}{两两独立}。若还有：
$$
P(ABC)=P(A)P(B)P(C)\qquad\qquad (2)
$$
则称A、B、C三者\color{Salmon}{相互独立}。

参考:
马同学
