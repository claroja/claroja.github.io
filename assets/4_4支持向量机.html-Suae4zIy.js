import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as l,a as t}from"./app-nD1Z-e8V.js";const e="/assets/线性可分与线性不可分-mRGKXuhG.png",n="/assets/线性可分与线性不可分2-ozzIqZ_I.png",r="/assets/支持向量与决策边界-h-tUY6TX.png",o="/assets/最佳决策分割线-KlLLVvxV.png",s="/assets/最大边界超平面-qzRMplIB.png",p="/assets/支持向量-_oDkUGyh.png",d="/assets/容许错误-iMmdpa40.png",_="/assets/非线性转换1-YvdvzFv9.png",c="/assets/非线性转换2-evR2TNl_.png",g="/assets/支持向量机与其他算法的关系-RYiBwKT9.png",h={},x=t('<ul><li>支持向量机概述</li><li>线性可分及不可分的问题</li><li>线性可分的支持向量机 <ul><li>支持向量</li><li>最佳的线性分割超平面及决策边界</li></ul></li><li>线性不可分的支持向量机 <ul><li>非线性转换</li><li>核函数（Polynomial Kernel、Gaussian Radial Basis Function、Sigmoid Kernel）</li></ul></li><li>支持向量机与神经网络间的关系</li><li>处理两类以上的分类问题</li></ul><h2 id="支持向量机概述" tabindex="-1"><a class="header-anchor" href="#支持向量机概述" aria-hidden="true">#</a> 支持向量机概述</h2><ul><li>支持向量机（Support Vector Machine, SVM）是一种知名的二元线性/非线性分类方法，由俄罗斯的统计学家 Vapnik 等人所提出。</li><li>它使用一个非线性转换（Nonlinear Transformation）将原始数据映射（Mapping）至较高维度的特征空间（Feature Space）中。</li><li>然后在高维度特征空间中，它找出一个最佳的线性分割超平面（Linear Optimal Separating Hyperplane）来将这两类的数据分割开来。</li></ul><h2 id="线性可分与线性不可分" tabindex="-1"><a class="header-anchor" href="#线性可分与线性不可分" aria-hidden="true">#</a> 线性可分与线性不可分</h2><figure><img src="'+e+'" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure><p>多项式坐标转换 <img src="'+n+'" alt="alt text" loading="lazy"></p><h2 id="决策边界与支持向量" tabindex="-1"><a class="header-anchor" href="#决策边界与支持向量" aria-hidden="true">#</a> 决策边界与支持向量</h2><ol><li>此分割超平面也可称为决策边界（Decision Boundary）。</li><li>通过适当的非线性转换，可以将数据映射至足够高维度的特征空间，这两个类别的数据在高维度特征空间中通常能被一个超平面分隔开来。</li><li>SVM 利用支持向量（Support Vector）作为建构分割超平面的重要数据；而最佳的超平面系指边界（Margin）最大化的超平面。</li></ol><figure><img src="'+r+'" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure><h2 id="线性支持向量机" tabindex="-1"><a class="header-anchor" href="#线性支持向量机" aria-hidden="true">#</a> 线性支持向量机</h2><p>由下图可以看出此数据集是线性可分的·我们可以划出一条直线来分开类别为+1与-1的数据</p><p>能够分割这两个类别的直线有无穷多条，我们希望找出其中最佳的一条分割直线·这条直线对于之前未见的数据，能够具有最小分类错误率的直线</p><figure><img src="'+o+'" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure><h2 id="最大边界超平面" tabindex="-1"><a class="header-anchor" href="#最大边界超平面" aria-hidden="true">#</a> 最大边界超平面</h2><ol><li>基本上，在训练阶段SVM将寻找具有最大边界的超平面(MaximumMarginal Hyper Plane)</li><li>下图中显示两个可能的分割超平面与其对应的边界(Margin)</li><li>图中的两个超平面都可以正确地分类所有给定数据，然而，我们预期有较大边界的超平面更能够正确地分类那些未知的数据</li><li>这是因为边界最大的超平面，其对应的边界，能对这两类提供最大的分割度</li></ol><figure><img src="'+s+'" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure><h2 id="支持向量" tabindex="-1"><a class="header-anchor" href="#支持向量" aria-hidden="true">#</a> 支持向量</h2><ol><li>支持向量(Support Vectors)落在边界的边缘上，它们是最难被分类的样本·把它分对就没有问题了</li><li>下图中的支持向量用粗边圆圈表示</li><li>一旦我们找到支持向量与最大边界超平面(MMH)，则此支持向量机就已经训练好了</li></ol><figure><img src="'+p+'" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure><p>支持向量是重要且关键的训练数据样本，因为它们最难被分类正确，如果能把它们分类正确，那么其余的训练值组也都可以被正确地分类. 换句话说, 如果我们移除支持向量以外的所有训练数据，并且再重新训练SVM，我们依然会得到相同的超平面</p><p>由于最大边界的超平面(MMH)是一个线性分界线，可用来分类线性可分割的数据，我们称此训练好的SVM分类器为线性SVM(Linear SVM)</p><p>SVM所学习得到的分类器，其复杂度取决于支持向量的数目，而不是数据的维度，因此SVM一般不会有过拟合的问题. 它能在建模之前先选择适当样本(支持向量)，然后再建立模型</p><p>一个支持向量数量稀少的SVM分类器，即使面对数据的维度十分高时，其泛化能力(Generalization)仍然会很好</p><h2 id="线性不可分的支持向量机" tabindex="-1"><a class="header-anchor" href="#线性不可分的支持向量机" aria-hidden="true">#</a> 线性不可分的支持向量机</h2><ol><li>SVM可同时应用于分类与数值预测的问题</li><li>数据为线性不可分，找不到一条直线能分开这两个类别，此时线性SVM在训练时找不到一个可行解，我们该怎么办呢？ <ol><li>容忍些许错误</li><li>将线性SVM延伸为非线性SVM</li></ol></li></ol><h3 id="容许错误" tabindex="-1"><a class="header-anchor" href="#容许错误" aria-hidden="true">#</a> 容许错误:</h3><figure><img src="'+d+'" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure><h3 id="将线性svm延伸为非线性svm" tabindex="-1"><a class="header-anchor" href="#将线性svm延伸为非线性svm" aria-hidden="true">#</a> 将线性SVM延伸为非线性SVM</h3><p>要将线性SVM延伸至非线性SVM，有两个主要步骤</p><ol><li>使用一个非线性转换将原始数据映射至较高维度的特征空间(FeatureSpace)，此步骤中，有许多种常见的非线性转换可供选用</li><li>在高维度特征空间中找出最佳的线性分割超平面。在此处我们同样使用线性SVM，而我们在高维度特征空间中找到的最大边界超平面(MMH)，对应至原来空间就是一个非线性分割超曲面(NonlinearSeparatingHypersurface)</li></ol><p>以下范例，使用一个非线性转换将 3D 输入向量(×=(x_1,x_2,x_3))映射至 6D 的特征空间 Z，映像方式为(z_1 = x_1,z_2 = x_2,z_3 = x_3,z_4=(x_1)^2,z_5 = x_1x_2,z_6 = x_1x_3)。</p><p>在特征空间的决策超平面为(d(Z)=WZ + b)，它在特征空间中为线性超平面，然而当它对应到原始 3D 空间时，它是一个非线性二次多项式决策函数。 (d(Z)=w_1z_1 + w_2z_2 + w_3z_3 + w_4z_4 + w_5z_5 + w_6z_6 + b)。 (d(Z)=w_1x_1 + w_2x_2 + w_3x_3 + w_4(x_1)^2 + w_5x_1x_2 + w_6x_1x_3 + b)。</p><figure><img src="'+_+'" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure><figure><img src="'+c+'" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure><p>SVM常用的核函数(KernelFunction)</p><ol><li>多项式转换(PolynomialKernel)</li><li>高斯RBF转换(Gaussian Radial BasisFunction)</li><li>Sigmoid转换(Sigmoid Kernel)</li></ol><h2 id="支持向量机与神经网络间的关系" tabindex="-1"><a class="header-anchor" href="#支持向量机与神经网络间的关系" aria-hidden="true">#</a> 支持向量机与神经网络间的关系</h2><p>不同的核心函数的训练结果，会对应到输入空间上不同类型的非线性分类器</p><p>神经网络的爱用者会注意到，非线性SVM所找到的分类模型，与某些著名的神经网络所用的分类模型是一模一样的</p><ol><li>SVM采用高斯RBF核函数(GaussianRadialBasisKernel)所找到的分类器与RBF神经网络相同</li><li>SVM采用s型核函数(SigmoidFunction)所找到的分类器等同于BP神经网络</li><li>不同于BP神经网络通常会收敛至区域最佳解，SVM会找到全局最佳解(Global Solution)</li></ol><figure><img src="'+g+'" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure><h2 id="处理两类以上的分类问题" tabindex="-1"><a class="header-anchor" href="#处理两类以上的分类问题" aria-hidden="true">#</a> 处理两类以上的分类问题</h2><ol><li>一个二元sVM分类模型，只能处理一个具有两种类别(2 Classes)的数据，怎么解决有六个类别的多元分类问题呢</li><li>两种解决方法 <ol><li>One-against-Rest:：一对多</li><li>One-against-One:：一对一</li></ol></li></ol><p>一对多:</p><ol><li><p>这个策略的想法就是针对每一个类别，分别建立一个SVM，属于此类别的样本视为(+1)，其他类别的样本视为(-1)，如此一来，就转换成一个二元分类的问题了！</p></li><li><p>以Glass的数据为例，数据中有六个类别，我们便会建立六个SVM</p><ol><li>第一个SVM：属于类别1的资料为(+1)，其他类别为(-1)，这个SVM用来区别这两者</li><li>第二个SVM：属于类别2的资料为(+1)，其他类别为(-1)，这个SVM用来区别这两者</li><li>第三个SVM：属于类别3的资料为(+1)，其他类别为(-1)，这个SVM用来区别这两者</li><li>以此类推.</li></ol></li><li><p>换句话说，针对有(t)个类别的数据，就会存在着(t)个 SVM。</p></li><li><p>当有一笔新资料要预测时，会分别丢进这(t)个 SVM，得到(t)组值((v_1,V_2,V_3...v_t))。再从中判别最大的值出现第几个位置，那这笔数据便是属于那一类。</p></li><li><p>这样的做法很直观，而且运行时间与内存并不会消耗太多。</p></li><li><p>但缺点是将“剩下类别”视为同一个类别(-1)的这种做法，很容易导致((+1,-1))之间的数据笔数差距很大，也就是类别不平衡的问题。</p></li></ol><p>一对一:</p><ol><li>这个策略的想法很像高中数学的排列组合：从 T 种类别中任取 2 种类别，共会有(C(T,2)=T(T - 1)/2)组合。</li><li>所以在这个策略底下，我们便会从多元类别的数据中，任选某两个类别（2 Classes）的数据，训练一个 SVM（只能区分这两个类别），并重复这样的动作，直到所有的类别组合都训练完成为止。</li><li>因此，最后会有(T(T - 1)/2)个 SVM 模型。</li><li>当有一笔新数据要预测时，会分别丢进这(T(T - 1)/2)个 SVM，每一个 SVM 都会将这笔数据分到某一类，就像是投票一样：该类别会记录 +1，最后判断哪一个类别获得最多票数，即可预测这笔数据属于哪一个类别。</li></ol>',47),u=[x];function f(M,S){return a(),l("div",null,u)}const z=i(h,[["render",f],["__file","4_4支持向量机.html.vue"]]);export{z as default};
