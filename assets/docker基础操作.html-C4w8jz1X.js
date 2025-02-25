import{_ as c}from"./plugin-vue_export-helper-x3n3nnut.js";import{o,c as a,f as d,b as e,d as i,a as n}from"./app-nD1Z-e8V.js";const s={},r=e("h1",{id:"智能补全",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#智能补全","aria-hidden":"true"},"#"),i(" 智能补全")],-1),t=e("p",null,"docker 基础命令行工具",-1),l=n(`<h3 id="开启服务" tabindex="-1"><a class="header-anchor" href="#开启服务" aria-hidden="true">#</a> 开启服务</h3><p>docker是CS架构, 要开启服务才能使用 <code>systemctl enable docker.service</code><code>systemctl start docker.service</code></p><p>相关命令</p><ul><li>enable 开机启动服务</li><li>start 开启服务</li><li>stop 关闭</li><li>restart 重启</li><li>status 状态</li></ul><h3 id="镜像操作" tabindex="-1"><a class="header-anchor" href="#镜像操作" aria-hidden="true">#</a> 镜像操作</h3><ul><li>docker search [image_name]</li><li>docker image pull [image_name]</li><li>docker image push [image_name] 镜像默认保存在 /var/lib/docker 目录下 配置国内镜像:<code>/etc/docker/daemon.json</code></li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token punctuation">{</span>
  <span class="token string">&quot;registry-mirrors&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;https://registry.docker-cn.com&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;http://hub-mirror.c.163.com&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;https://docker.mirrors.ustc.edu.cn&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>查看镜像 <code>docker image ls</code></li><li>删除镜像<code>docker image rm [name]</code></li><li>查看详细信息<code>docker image inspect [name]</code></li><li>重命名<code>docker image tag [old_image]:[old_version] [new_image]:[new_version]</code></li></ul><h3 id="container操作" tabindex="-1"><a class="header-anchor" href="#container操作" aria-hidden="true">#</a> container操作</h3><ul><li>创建容器: <code>docker run -dit --name=CONTAINER_NAME IMAGE_NAME</code><code>-dit</code> 是后台运行的意思, 为什么要加上<code>it</code>? https://codingdict.com/questions/54333</li><li>列出所有镜像: <code>docker container ls</code>,简写形式:<code>docker ps</code> , 默认只列出运行的. <code>-a</code>是包含未运行的, <code>-q</code>只输出ID, 批量操作,比如删除时常用.</li><li>删除容器: <code>docker container rm [ID]</code>, 简写形式:<code>docker rm [ID]</code> 删除所有镜像: <code>docker rm $(docker ps -aq)</code></li><li>启动容器: <code>docker container start [ID]</code> 简写<code>docker start [ID]</code></li><li>停止容器: <code>docker container stop [ID]</code> 简写<code>docker stop [ID]</code></li><li>重启容器: <code>docker container restart [ID]</code> 简写<code>docker restart [ID]</code></li><li>进入容器: <code>docker container exec -it 容器id /bin/bash</code></li><li>退出容器: <code>exit</code> 使用<code>docker run image -it</code>时退出<code>exit</code>会停止容器运行.再次通过<code>exec</code>进入则不会退出既停止</li></ul><h3 id="疑难杂症" tabindex="-1"><a class="header-anchor" href="#疑难杂症" aria-hidden="true">#</a> 疑难杂症</h3><p>域名解析问题: https://blog.csdn.net/qq_43743460/article/details/105648139</p>`,12);function u(p,m){return o(),a("div",null,[r,t,d("more"),l])}const _=c(s,[["render",u],["__file","docker基础操作.html.vue"]]);export{_ as default};
