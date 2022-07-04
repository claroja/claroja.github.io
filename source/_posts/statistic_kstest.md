---
title: statistic_kstest
toc: true
date: 2021-11-26 22:03:54
tags:
---


参数|描述
--|--
rvs|待检验的一组一维数据
cdf|检验方法，例如'norm'，'expon'，'rayleigh'，'gamma'，这里我们设置为'norm'，即正态性检验
alternative|默认为双尾检验，可以设置为'less'或'greater'作单尾检验
model|'approx'(默认)，使用检验统计量的精确分布的近视值
'asymp'|使用检验统计量的渐进分布

#其中rvs可以是数组、生成数组的函数或者scipy.stats里面理论分布的名字
#cdf可以与rvs一致。若rvs和cdf同是数组，则是比较两数组的分布是否一致；一个是数组，另一个是理论分布的名字，则是看样本是否否和理论分布
#args是一个元组，当rvs或者cds是理论分布时，这个参数用来存储理论分布的参数，如正态分布的mean和std。