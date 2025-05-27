# statistics




## 排序统计
|	方法	|	描述	|
|	--	|	--	|
|	amin(a[, axis, out, keepdims])	|返回最小值|
|	amax(a[, axis, out, keepdims])	|	返回最大值	|
|	nanmin(a[, axis, out, keepdims])	|	返回最小值，忽略空值	|
|	nanmax(a[, axis, out, keepdims])	|	返回最大值忽略空值	|
|	ptp(a[, axis, out])	|	max-min 数组的范围	|
|	percentile(a, q[, axis, out, ...])	|	百分比计算	|
|	nanpercentile(a, q[, axis, out, ...])	|	百分比计算，并忽略空值	|
## 平均值和方差
|	方法	|	描述	|
|	--	|	--	|
|	median(a[, axis, out, overwrite_input, keepdims])	|	中位数	|
|	average(a[, axis, weights, returned])	|	权重平均数	|
|	mean(a[, axis, dtype, out, keepdims])	|	算数平均数	|
|	std(a[, axis, dtype, out, ddof, keepdims])	|标准差|
|	var(a[, axis, dtype, out, ddof, keepdims])	|方差|
|	nanmedian(a[, axis, out, overwrite_input, ...])	|	中位数，并忽略空值	|
|	nanmean(a[, axis, dtype, out, keepdims])	|	算数平均数，忽略空值|
|	nanstd(a[, axis, dtype, out, ddof, keepdims])	|	标准差，忽略空值	|
|	nanvar(a[, axis, dtype, out, ddof, keepdims])	|	方差，忽略空值	|
#相关性
|	方法	|	描述	|
|	--	|	--	|
|	corrcoef(x[, y, rowvar, bias, ddof])	|	返回Pearson product-moment correlation 系数	|
|	correlate(a, v[, mode])	|	Cross-correlation of two 1-dimensional sequences.	|
|	[cov(m\[, y, rowvar, bias, ddof, fweights, ...\])](https://blog.csdn.net/claroja/article/details/80169946)	|	Estimate a covariance matrix, given data and weights.	|
## 直方图
|	方法	|	描述	|
|	--	|	--	|
|	histogram(a[, bins, range, normed, weights, ...])	|	Compute the histogram of a set of data.	|
|	histogram2d(x, y[, bins, range, normed, weights])	|	Compute the bi-dimensional histogram of two data samples.	|
|	histogramdd(sample[, bins, range, normed, ...])	|	Compute the multidimensional histogram of some data.	|
|	bincount(x[, weights, minlength])	|	Count number of occurrences of each value in array of non-negative ints.	|
|	digitize(x, bins[, right])	|	Return the indices of the bins to which each value in input array belongs.	|


参考:
https://numpy.org/doc/stable/reference/routines.statistics.html