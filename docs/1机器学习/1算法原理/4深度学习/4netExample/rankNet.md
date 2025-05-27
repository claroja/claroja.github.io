<!-- # RankNet

## RankNet

For a given query, each pair of urls $U_i$ and $U_j$ is chosen, and each such pair (with feature vectors $x_i$ and $x_j$) is presented to the model, which computes the scores $s_i = f(x_i)$ and $s_j = f(x_j)$.

Let $U_i \rhd U_j$ denote the event that $U_i$ should be ranked higher than $U_j$ (note that the labels for the same urls may be different for different queries).

The two outputs of the model are mapped to a learned probability that $U_i$ should be ranked higher than $U_j$ via a sigmoid function, thus:

$$P_{ij} \equiv P(U_i \rhd U_j) \equiv \frac{1}{1+e^{\sigma\cdot(s_i-s_j)}}$$

where the choice of the parameter $\sigma$ determines the shape of the sigmoid, eg:0.2.

We then apply the cross entropy cost function, which penalizes the deviation of the model output probabilities from the desired probabilities: let $\overline{P}_{ij}$ be the known probability that training url $U_i$ should be ranked higher than training url $U_j$.

$$ C = - \overline{P}_{ij} log P_{ij} - (1- \overline{P}_{ij}) log (1-P_{ij})$$

For a given query, let $S_{ij} \in {0,±1}$ be defined to be 1 if document $i$ has been labeled to be more relevant than document $j$, −1 if document $i$ has been labeled to be less relevant than document $j$, and 0 if they have the same label.

$$ \overline{P}_{ij} = \frac{1}{2}(1+S_{ij}) $$

Combining the above two equations gives:

$$ C = \frac{1}{2}(1-S_{ij} \sigma\cdot(s_i-s_j) + log(1+e^{-\sigma\cdot(s_i-s_j)}))$$

The cost is comfortingly symmetric (swapping $i$ and $j$ and changing the sign of $S_{ij}$ should leave the cost invariant):

- for $S_{ij} = 1$, $C = log(1+e^{-\sigma\cdot(s_i-s_j)})$
- for $S_{ij} = -1$, $C = log(1+e^{-\sigma\cdot(s_j-s_i)})$

why this cost function works? for $S_{ij}=1$ ($U_i$ ranks higher than $U_j$):

- if $s_i > s_j$, means it's the right rank, the $cost = 0$:
$$ \lim_{s_i-s_j \rightarrow \infty} C = \lim_{s_i-s_j \rightarrow \infty} log(1+e^{-\sigma\cdot(s_i-s_j)}) = log1 = 0 $$
- if $s_i < s_j$, means it's the wrong rank, the cost function is linear:
$$ \lim_{s_i-s_j \rightarrow \infty} C = \lim_{s_i-s_j \rightarrow \infty} log(1+e^{-\sigma\cdot(s_i-s_j)}) = log(e^{-\sigma\cdot(s_i-s_j)}) = -\sigma\cdot(s_i-s_j) $$
- if $s_i = s_j$, the cost is `log2`(that is, documents with different labels, but to which the model assigns the same scores, are still pushed away from each other in the ranking).
$$ \frac{\partial C}{\partial s_i} = \sigma\cdot(\frac{1}{2}(1-s_{ij}-\frac{1}{1+e^{\sigma\cdot(s_i-s_j)}})) = - \frac{\partial C}{\partial s_j} $$

This gradient is used to update the weights $w_k \in R$ so as to reduce the cost via stochastic gradient descent:
$$ w_k \rightarrow w_k - \eta\frac{\partial C}{\partial w_k} = w_k - \eta(\frac{\partial C}{\partial s_i}\frac{\partial s_i}{\partial w_k}+\frac{\partial C}{\partial s_j}\frac{\partial s_j}{\partial w_k}) $$

where $\eta$ is a positive learning rate.

## Factoring RankNet: Speeding Up Ranknet Training

in chapter 2, we will compute the $w_k$ partial derivative of the cost of every pair documents $(U_i,U_j)$. it's complex. in this chapter, we will introduce a method to simply it.

$$
\frac{\partial C}{\partial w_k} = \frac{\partial C}{\partial s_i}\frac{\partial s_i}{\partial w_k}+\frac{\partial C}{\partial s_j}\frac{\partial s_j}{\partial w_k}
= \sigma\cdot(\frac{1}{2}(1-S_{ij})-\frac{1}{1+e^{\sigma\cdot(s_i-s_j)}})(\frac{\partial s_i}{\partial w_k}-\frac{\partial s_j}{\partial w_k})
= \lambda_{ij}(\frac{\partial s_i}{\partial w_k}-\frac{\partial s_j}{\partial w_k})
$$

where we have defined:
$$ \lambda_{ij} \equiv \frac{\partial C(s_i - s_j)}{\partial s_i} = \sigma\cdot(\frac{1}{2}(1-S_{ij})-\frac{1}{1+e^{\sigma\cdot(s_i-s_j)}}) $$

Let $I$ denote the set of pairs of indices $\{i,j\}$. $I$ must include each pair just once, so it's convenient to adopt the convention that $I$ contains pairs of indices $\{i,j\}$ for which $U_i \rhd U_j$, so that $S_{ij}=1$.
Note that since RankNet learns from probabilities and outputs probabilities, it does not require that the urls be labeled; it just needs the set $I$, which could also be determined by gathering pairwise preferences.
Now summing all the contributions to the update of weight $w_k$ gives:
$$ \delta w_k = - \eta \sum_{\{i,j\} \in I}(\lambda_{ij}\frac{\partial s_i}{\partial w_k}-\lambda_{ij}\frac{\partial s_j}{\partial w_k}) \equiv -\eta \sum_i\lambda_i \frac{\partial s_i}{\partial w_k}  $$

where:
$$ \lambda_i = \sum_{j:\{i,j\}\in I} \lambda_{ij}-\sum_{j:\{j,i\}\in I} \lambda_{ij}  $$

where we have introduced the $\lambda_i$(one $\lambda_i$ for each url: note that the $\lambda$'s with one subscript are sums of the $\lambda$'s with two).
To compute $\lambda_i$(for url $U_i$), we find all $j$ for which $\{i,j\} \in I$ and all $k$ for which $\{k,i\} \in I$. For the former, we increment $\lambda_i$ by $\lambda_{ij}$, and for the latter, we decrement $\lambda_i$ by $\lambda_{ki}$.
eg:
we have set $I={\{1,2\},\{2,3\},\{1,3\}}$, then:
$$ \delta w_k = -\eta \sum_{\{i,j\} \in I}(\lambda_{ij}\frac{\partial s_i}{\partial w_k}-\lambda_{ij}\frac{\partial s_j}{\partial w_k})
= -\eta (\lambda_{12}\frac{\partial s_1}{\partial w_k}-\lambda_{12}\frac{\partial s_2}{\partial w_k}+\lambda_{13}\frac{\partial s_1}{\partial w_k})
-\lambda_{13}\frac{\partial s_3}{\partial w_k}+\lambda_{23}\frac{\partial s_2}{\partial w_k}-\lambda_{23}\frac{\partial s_3}{\partial w_k}
= -\eta((\lambda_{12}+\lambda_{13})\frac{\partial s_1}{\partial w_k}+(\lambda_{23}-\lambda_{12})\frac{\partial s_2}{\partial w_k})+(-\lambda_{23}-\lambda_{13})\frac{\partial s_3}{\partial w_k})
$$
so we can get:
$\lambda_{1} = \lambda_{12}+\lambda_{13},\lambda_{2} = \lambda_{23}+\lambda_{12},\lambda_{1} = -\lambda_{23}-\lambda_{13}$

you can think of the $\lambda$ as little arrows, one attached to each url in the sorted list:

- the direction(positive or negative) of which indicates the direction we'd like the url to move
- the length(quantity) of which indicates by how much

and where the $\lambda$ for a given is computed from all the pairs in which that url is a member.
When we first implemented RankNet, we used true stochastic gradient descent: the weights were updated after each pair of urls were examined. The above shows that instead, we can accumulate the $\lambda$'s for each url summing its contributions from all pairs of urls, and then do the update. This is mini-batch learning.
This led to a very significant speedup in RankNet training since a weight update is expensive.

## real example

in a search engin, we use two dimension to represent a document. assume a query returns three documents:

- $x_1=(5,4.5)^T$
- $x_2=(4,3.7)^T$
- $x_3=(2,1.8)^T$

the rank labels is $U_i \rhd U_2 \rhd U_3$, which indicates $S_{12}=S_{13}=S_{23}=1$
we use one layer net, input size is 2, the output size is 1. so $f(x)=w_0+w_1x^{(1)}+w_2x{(2)}$.
init parameters:

- $w=[0,-1,1]$,
- $\sigma=0.1$ which control the shape of sigmoid function
- $\eta=0.1$ the learning rate

using parameters above, we can computer:

- $s_1 = f(x_1) = - x^{(1)} + x^{(2)}=-1 * 5 + 1 * 4.5 = -0.5$
- $s_2 = f(x_2) = - x^{(1)} + x^{(2)}=-1 * 4 + 1 * 3.7 = -0.3$
- $s_2 = f(x_3) = - x^{(1)} + x^{(2)}=-1 * 2 + 1 * 1.8 = -0.2$

we get the current rank is $U_3 \rhd U_2 \rhd U_1$, 并不满足 $U_1 \rhd U_2 \rhd U_3$.

the we will compute $\lambda_{ij}$ by the formula:$\lambda_{ij} = \sigma(\frac{1}{2}(1-S_{ij})-\frac{1}{1+e^{\sigma(s_i-s_j)}})$

- $\lambda_{12} = \sigma\cdot(-\frac{1}{1+e^{\sigma\cdot(s_1-s_2)}}) = −0.050500$
- $\lambda_{13} = \sigma\cdot(-\frac{1}{1+e^{\sigma\cdot(s_1-s_3)}})=−0.050750$
- $\lambda_{23} = \sigma\cdot(-\frac{1}{1+e^{\sigma\cdot(s_2-s_3)}})=−0.050250$

then:

- $\lambda_{1} = \lambda_{12}+\lambda_{13} = −0.10125$
- $\lambda_{2} = \lambda_{23}-\lambda_{12} = 0.00025$
- $\lambda_{3} = -\lambda_{23}-\lambda_{13} = 0.101$

compute the partial derivative:

- $\frac{\partial s}{\partial w_0} =1$
- $\frac{\partial s}{\partial w_1} =x^{(1)}$
- $\frac{\partial s}{\partial w_2} =x^{(2)}$

compute the delta:

- $\delta w_0 = - \eta(\lambda_1 \frac{\partial s_1}{\partial w_0}+\lambda_2 \frac{\partial s_2}{\partial w_0}+\lambda_3 \frac{\partial s_3}{\partial w_0})=0$
- $\delta w_1 = - \eta(\lambda_1 \frac{\partial s_1}{\partial w_1}+\lambda_2 \frac{\partial s_2}{\partial w_1}+\lambda_3 \frac{\partial s_3}{\partial w_1})=0.030325$
- $\delta w_2 = - \eta(\lambda_1 \frac{\partial s_1}{\partial w_2}+\lambda_2 \frac{\partial s_2}{\partial w_2}+\lambda_3 \frac{\partial s_3}{\partial w_2})=0.02729$

update the net weights:

- $w_0 = w0 + \eta w_0 = 0 + 0 =0$
- $w_1 = w1 + \eta w_1 = −1+0.030325=−0.969675$
- $w_1 = w1 + \eta w_1 = 1+0.02729=1.02729$

computer score again:

- $s_1 = −0.225545$
- $s_2 = −0.077707$
- $s_3 = −0.090218$

so we get $U_2 \rhd U_3 \rhd U_1$, it works($U_2 \rhd U_3$)!

## 参考
<https://liam.page/2016/07/10/a-not-so-simple-introduction-to-lambdamart/>
<https://www.cnblogs.com/genyuan/p/9788294.html>
<https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/MSR-TR-2010-82.pdf>
<https://zhuanlan.zhihu.com/p/68682607>
<https://zhuanlan.zhihu.com/p/270608987>
<https://www.cnblogs.com/bentuwuying/p/6690836.html>
<https://blog.csdn.net/c9Yv2cf9I06K2A9E/article/details/123058894>
<https://zhuanlan.zhihu.com/p/138235048> -->
