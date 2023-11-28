import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as t,c as i,e as a}from"./app-yeyEmHfz.js";const s="/assets/1-ViSsEDgd.png",n="/assets/2-2Av7ko5e.png",l="/assets/3-pBFWnKHp.png",r="/assets/4-LgIFduk6.png",o="/assets/5-jzDmJk12.png",h="/assets/6-UiwKAkI3.gif",g="/assets/7-4S9Y_GvQ.png",c="/assets/8-yXfb5uvG.png",d="/assets/9-qkPQ6A7y.png",u="/assets/10-KO5jqT6p.png",m="/assets/11-ryHH-1Oe.png",p="/assets/12-UJMDah2_.png",w="/assets/13-JtON13ES.png",f={},y=a('<h1 id="bias-variance" tabindex="-1"><a class="header-anchor" href="#bias-variance" aria-hidden="true">#</a> bias-Variance</h1><p>Imagine we measured the weight and height of a bunch of mice and plotted the data on the graph. <img src="'+s+'" alt="" loading="lazy"></p><p>Given this data, we would like to predict mice height given its weight.</p><p>Ideally, we would know the exact mathematical formula that describes the relationship between weight and height. <img src="'+n+'" alt="" loading="lazy"></p><p>but, in this case, we don&#39;t know the formula, so we&#39;re going to use two machine learning method to approximate this relationship.</p><p>However, I&#39;ll leave the &quot;true&quot; relationship curve in the figure for reference. <img src="'+l+'" alt="" loading="lazy"></p><p>The first thing we do is split the data into two sets, one for training the machine learning algorithms and one for testing them. The blue dots are the training set and the green dots are the testing set. <img src="'+r+'" alt="" loading="lazy"></p><p>The first machine learning algorithm that we use is Linear Regression(aka &quot;Least Squares&quot;): <img src="'+o+'" alt="" loading="lazy"> Linear Regression fits a straight line to the training set. NOTE: The Straight line doesn&#39;t have the flexibility to accurately replicate the arc in the &quot;true&quot; relationship.Thus, the straight line will never capture the true relationship between weight and height, no matter how well we fit it to the training set. <img src="'+h+'" alt="" loading="lazy"> The inability for a machine learning method(like linear regression) to capture the true relationship is called <code>bias</code>. Because the straight line can&#39;t be curved like the &quot;true&quot; relationship, it has a relatively large amount of bias. Another machine learning method might fit a squiggly line to the training set. <img src="'+g+'" alt="" loading="lazy"> Because the squiggly line can handle the arc in the true relationship between weight and height, it has very little bias. We can compare how well the straight line and squiggly line fit the training set by calculating their sums of squares. In other words, we measure the distances from the fit lines to the data, square them and add them up. <img src="'+c+'" alt="" loading="lazy"> Notice how the squiggly line fits the data so well that the distances between the line and the data are all 0. so the squiggly line wins. But remember, so for we&#39;ve only calculate the sums of squares for the training set. We also have a testing set. <img src="'+d+'" alt="" loading="lazy"> Now let&#39;s calculate the sums of squares for the testing set. This time, the straight line wins. <img src="'+u+'" alt="" loading="lazy"> Even though squiggly line did a great job fitting the training set, it did a terrible job fitting the testing set. <img src="'+m+'" alt="" loading="lazy"> In machine learning lingo, the difference in fits between data sets is called variance. The squiggly line has low bias, since it is flexible and can adapt to the curve in the relationship between weight and height, but hte squiggly line has high variability, because it results in vastly different sums of squares for different datasets. In other words, it&#39;s hard to predict how well the squiggly line will perform with future datasets.It might do well sometimes, and other times it might do terribly.</p><p>In contrast, the straight line has relatively high bias, since it can&#39;t capture the curve in the relationship between weight and hight. But the straight line has relatively low variance, because the sums of squares are very similar for different datasets. In other words, the straight line might only give good predictions, and not great predictions. But they will be consistently good predictions. <img src="'+p+'" alt="" loading="lazy"></p><p>Because the Squiggly line fits the training set really well, but not the testing set, we say that the squiggly line is overfit. In machine learning, the ideal algorithm has low bias and can accurately model the true relationship and it has low variability, by producing consistent predictions across different datasets. <img src="'+w+'" alt="" loading="lazy"> This is done by finding the sweet spot between a simple model(straight line) and a complex model(squiggly line).Three commonly used methods for finding the sweet spot between simple and complicate models are:</p><ul><li>regularization</li><li>boosting</li><li>bagging</li></ul><p>refs: https://www.youtube.com/watch?v=EuBBz3bI-aA&amp;list=PLblh5JKOoLUIcdlgu78MnlATeyx4cEVeR&amp;index=9</p>',12),b=[y];function _(v,q){return t(),i("div",null,b)}const k=e(f,[["render",_],["__file","bias-Variance.html.vue"]]);export{k as default};
