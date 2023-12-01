import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o,c as i,e as t}from"./app-qxiCM96p.js";const c="/assets/1-ANDy9r38.png",a="/assets/2-bPAe68xy.png",s="/assets/3-F1k76IHb.png",d="/assets/4-TisS2Tfb.png",l="/assets/5-K56Bzz37.png",r="/assets/6-8RyJPPEQ.png",n="/assets/7-7O_5DMx7.png",g="/assets/8-jCxsrGyv.png",m="/assets/9-iex5aRnT.png",_="/assets/10-xGt-YLh6.png",p="/assets/11-8CkXEiwN.png",u="/assets/12-nf336gUc.png",h="/assets/13--jj9tW36.png",f={},y=t('<h1 id="maximumlikelihood" tabindex="-1"><a class="header-anchor" href="#maximumlikelihood" aria-hidden="true">#</a> maximumLikelihood</h1><p>Git 多人协作案例</p><h2 id="远程分支可以推送" tabindex="-1"><a class="header-anchor" href="#远程分支可以推送" aria-hidden="true">#</a> 远程分支可以推送</h2><p>小黄和小蓝在都要在远程master分支下写作</p><ol><li>两人通过<code>git clone</code>拷贝远程仓库. 这时本地会有两个分支<code>origin/master</code>和<code>master</code><img src="'+c+'" alt="" loading="lazy"></li><li>小黄在<code>master</code>他的本地分支上提交了修改<code>commit2</code>, 同时小蓝也在<code>master</code>他的本地分支上提交了修改<code>commit3</code><img src="'+a+'" alt="" loading="lazy"></li><li>小黄执行<code>git push</code>更新了远程仓库 <img src="'+s+'" alt="" loading="lazy"></li><li><ul><li>小蓝执行<code>git push</code>报错, 所以使用<code>git fetch</code>拉取远程仓库 <img src="'+d+'" alt="" loading="lazy"></li><li>小蓝执行<code>git merge origin/master</code>合并远程最新的更新 <img src="'+l+'" alt="" loading="lazy"></li><li>小蓝执行<code>git push</code>更新远程仓库 <img src="'+r+'" alt="" loading="lazy"></li></ul></li></ol><h2 id="远程分支受保护-不可以推送" tabindex="-1"><a class="header-anchor" href="#远程分支受保护-不可以推送" aria-hidden="true">#</a> 远程分支受保护,不可以推送</h2><p>master分支受保护, 不允许开发人员直接push, 而是由管理人员在远程仓库操作. 所以小红和小蓝要新建分支进行写作.</p><ol><li>两人<code>git clone</code>复制远程仓库 <img src="'+n+'" alt="" loading="lazy"></li><li>小黄在本地创建新的分支<code>featureA</code>(origin/master副本)<code>git checkout -b featureA origin/master</code>, 小蓝在本地创建新的分支<code>feature1</code> <code>git checkout -b feature1 origin/master</code><img src="'+g+'" alt="" loading="lazy"></li><li>小黄在本地<code>featureA</code>分支提交<code>commit2</code>, 小蓝在本地<code>featureB</code>分支提交<code>commit3</code><img src="'+m+'" alt="" loading="lazy"></li><li>小黄将本地修改<code>git push</code>到远程, 注意远程没有<code>featureA</code>分支, 所以会自动创建 <img src="'+_+'" alt="" loading="lazy"></li><li><ul><li>小黄告诉小蓝, 已经<code>featureA</code>已经开发完成, 需要小蓝这边也集成到<code>featureA</code>. 小蓝执行<code>git fetch</code>(如果执行git push 则远程会多一个feature1的分支) <img src="'+p+'" alt="" loading="lazy"></li><li><code>git merge origin/featureA</code> 小蓝合并小黄更新的分支 <img src="'+u+'" alt="" loading="lazy"></li><li><code>git push origin feature1:featureA</code> 将<code>feature1</code>推动到<code>origin/featureA</code> 更新本地origin/featureA分支, 并同步到远程仓库 <img src="'+h+'" alt="" loading="lazy"></li></ul></li></ol>',8),z=[y];function x(A,k){return o(),i("div",null,z)}const j=e(f,[["render",x],["__file","git多人协作.html.vue"]]);export{j as default};
