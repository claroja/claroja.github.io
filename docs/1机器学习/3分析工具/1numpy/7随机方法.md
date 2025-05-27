# random


以下方法都要加np.random.前缀
**注意生成的对象没有维度.既.shape属性,第二个数字是空.要用reshape来将它转换为多维度,这样才能像矩阵那样操作.**

1.简单随机数据
|	name	|	describe	|
|	--	|	--	|
|	rand(d0, d1, ..., dn)	|	 返回随机分布,d是维度的意思，既设置0维度数量，1维度数量	|
|	randn(d0, d1, ..., dn)	|	 返回正态分布	|
|	randint(low[, high, size, dtype])	|	 返回一个范围在 low (包含) 到 high (不包含)的整数.	|
|	random_integers(low[, high, size])	|	 Random integers of type np.int between low and high, inclusive.	|
|	random_sample([size])	|	 Return random floats in the half-open interval [0.0, 1.0).	|
|	random([size])	|	 Return random floats in the half-open interval [0.0, 1.0).	|
|	ranf([size])	|	 Return random floats in the half-open interval [0.0, 1.0).	|
|	sample([size])	|	 Return random floats in the half-open interval [0.0, 1.0).	|
|	choice(a[, size, replace, p])	|	 Generates a random sample from a given 1-D array	|
|	bytes(length)	|	 Return random bytes.	|
2.生成随机分布
|	name	|	describe	|
|	--	|	--	|
|	beta(a, b[, size])	|	 Draw samples from a Beta distribution.	|
|	binomial(n, p[, size])	|	 Draw samples from a binomial distribution.	|
|	chisquare(df[, size])	|	 Draw samples from a chi-square distribution.	|
|	dirichlet(alpha[, size])	|	 Draw samples from the Dirichlet distribution.	|
|	exponential([scale, size])	|	 Draw samples from an exponential distribution.	|
|	f(dfnum, dfden[, size])	|	 Draw samples from an F distribution.	|
|	gamma(shape[, scale, size])	|	 Draw samples from a Gamma distribution.	|
|	geometric(p[, size])	|	 Draw samples from the geometric distribution.	|
|	gumbel([loc, scale, size])	|	 Draw samples from a Gumbel distribution.	|
|	hypergeometric(ngood, nbad, nsample[, size])	|	 Draw samples from a Hypergeometric distribution.	|
|	laplace([loc, scale, size])	|	 Draw samples from the Laplace or double exponential distribution with specified logistic([loc, scale, size]) Draw samples from a logistic distribution.	|
|	lognormal([mean, sigma, size])	|	 Draw samples from a log-normal distribution.	|
|	logseries(p[, size])	|	 Draw samples from a logarithmic series distribution.	|
|	multinomial(n, pvals[, size])	|	 Draw samples from a multinomial distribution.	|
|	multivariate_normal(mean, cov[, size])	|	 Draw random samples from a multivariate normal distribution.	|
|	negative_binomial(n, p[, size])	|	 Draw samples from a negative binomial distribution.	|
|	noncentral_chisquare(df, nonc[, size])	|	 Draw samples from a noncentral chi-square distribution.	|
|	noncentral_f(dfnum, dfden, nonc[, size])	|	 Draw samples from the noncentral F distribution.	|
|	normal([loc, scale, size])	|	 Draw random samples from a normal (Gaussian) distribution.	|
|	pareto(a[, size])	|	 Draw samples from a Pareto II or Lomax distribution with specified shape.	|
|	poisson([lam, size])	|	 Draw samples from a Poisson distribution.	|
|	power(a[, size])	|	 Draws samples in [0, 1] from a power distribution with positive exponent a - 1.	|
|	rayleigh([scale, size])	|	 Draw samples from a Rayleigh distribution.	|
|	standard_cauchy([size])	|	 Draw samples from a standard Cauchy distribution with mode = 0.	|
|	standard_exponential([size])	|	 Draw samples from the standard exponential distribution.	|
|	standard_gamma(shape[, size])	|	 Draw samples from a standard Gamma distribution.	|
|	standard_normal([size])	|	 Draw samples from a standard Normal distribution (mean=0, stdev=1).	|
|	standard_t(df[, size])	|	 Draw samples from a standard Student’s t distribution with df degrees of freedom.	|
|	triangular(left, mode, right[, size])	|	 Draw samples from the triangular distribution over the interval [left, right].	|
|	uniform([low, high, size])	|	 Draw samples from a uniform distribution.	|
|	vonmises(mu, kappa[, size])	|	 Draw samples from a von Mises distribution.	|
|	wald(mean, scale[, size])	|	 Draw samples from a Wald, or inverse Gaussian, distribution.	|
|	weibull(a[, size])	|	 Draw samples from a Weibull distribution.	|
|	zipf(a[, size])	|	 Draw samples from a Zipf distribution.	|
3.重排
|	name	|	describe	|
|	--	|	--	|
|	shuffle(x)	|	 Modify a sequence in-place by shuffling its contents.	|
|	permutation(x)	|	 Randomly permute a sequence, or return a permuted range.	|
参考:
https://docs.scipy.org/doc/numpy/reference/routines.random.html