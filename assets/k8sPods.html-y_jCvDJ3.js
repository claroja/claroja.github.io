import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as s,e}from"./app-XqA98pG8.js";const t={},p=e(`<h1 id="boxmodel" tabindex="-1"><a class="header-anchor" href="#boxmodel" aria-hidden="true">#</a> boxModel</h1><h2 id="pods" tabindex="-1"><a class="header-anchor" href="#pods" aria-hidden="true">#</a> Pods</h2><ul><li>共享网络 一个 Pod 内的多个容器之间可以通过 localhost 来进行通信 不同的 Pod 有不同的 IP, 不同pod使用IP来通信</li><li>共享存储 一个 Pod 里的多个容器可以共享存储卷，这个存储卷会被定义为 Pod 的一部分，并且可 以挂载到该 Pod里的所有容器的文件系统上。</li></ul><p>实现共享的原理是:每个pod都是先初始化一个根容器, 然后将我们创建的容器加入到根容器.</p><h3 id="使用命令行控制" tabindex="-1"><a class="header-anchor" href="#使用命令行控制" aria-hidden="true">#</a> 使用命令行控制</h3><ul><li>增加 <code>kubectl run nginx --image=nginx:1.17.1 --port=80</code> 默认使用controller创建, 既<code>kind: Deployment</code></li><li>查看 <code>kubectl get pod</code><code>kubectl get pods -n kube-system</code> 查看某个namespce下的pods, 默认是default <code>kubectl get pod -o wide</code> 显示额外的信息</li><li>查看详细信息 <code>kubectl describe pod [NAME]</code></li><li>删除 <code>kubectl delete pod [NAME]</code> 使用controller创建的pod 删除pod会自动生成, 要直接删除controller<code>kubectl delete deployment [NAME]</code></li></ul><h3 id="使用配置文件控制" tabindex="-1"><a class="header-anchor" href="#使用配置文件控制" aria-hidden="true">#</a> 使用配置文件控制</h3><p><code>kubectl create/apply/delete -f YML_PATH</code></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> pod1
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> ngninx<span class="token punctuation">-</span>pod
    <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx<span class="token punctuation">:</span>latest
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> nginxport
      <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">80</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数详解" tabindex="-1"><a class="header-anchor" href="#参数详解" aria-hidden="true">#</a> 参数详解</h3><h4 id="一个pod多个container" tabindex="-1"><a class="header-anchor" href="#一个pod多个container" aria-hidden="true">#</a> 一个pod多个container</h4><p>运行多个协同工作的container的 Pod, 这些container共享存储和网络</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> myapp<span class="token punctuation">-</span>pod
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> myapp
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> myapp<span class="token punctuation">-</span>container1
    <span class="token key atrule">image</span><span class="token punctuation">:</span> busybox<span class="token punctuation">:</span><span class="token number">1.28</span>
    <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;sh&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;-c&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;echo The app1 is running! &amp;&amp; sleep 3600&#39;</span><span class="token punctuation">]</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> myapp<span class="token punctuation">-</span>container2
    <span class="token key atrule">image</span><span class="token punctuation">:</span> busybox<span class="token punctuation">:</span><span class="token number">1.28</span>
    <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;sh&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;-c&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;echo The app2 is running! &amp;&amp; sleep 3600&#39;</span><span class="token punctuation">]</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="command和args" tabindex="-1"><a class="header-anchor" href="#command和args" aria-hidden="true">#</a> command和args</h4><ul><li>如果无command无args, 使用Dockerfile的配置</li><li>如果有command无args, 使用command覆盖Dockerfile的配置</li><li>如果无command有args, Dockerfile的ENTRYPOINT被执行, 使用args参数</li><li>如果有command有args, 使用command+args覆盖Dockerfile的配置</li></ul><h4 id="环境变量" tabindex="-1"><a class="header-anchor" href="#环境变量" aria-hidden="true">#</a> 环境变量</h4><p>设置环境变量列表</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">env</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&#39;username&#39;</span>
  <span class="token key atrule">value</span><span class="token punctuation">:</span> <span class="token string">&#39;admin&#39;</span>
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&#39;password&#39;</span>
  <span class="token key atrule">value</span><span class="token punctuation">:</span> <span class="token string">&#39;123&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="端口" tabindex="-1"><a class="header-anchor" href="#端口" aria-hidden="true">#</a> 端口</h4><p>设置pod向外暴露的端口</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> test
    <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">80</span>
    <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="限制容器资源" tabindex="-1"><a class="header-anchor" href="#限制容器资源" aria-hidden="true">#</a> 限制容器资源</h4><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">resources</span><span class="token punctuation">:</span>
    <span class="token key atrule">limits</span><span class="token punctuation">:</span> <span class="token comment"># 最大显示</span>
      <span class="token key atrule">cpu</span><span class="token punctuation">:</span> <span class="token string">&quot;2&quot;</span>
      <span class="token key atrule">memory</span><span class="token punctuation">:</span> <span class="token string">&quot;10Gi&quot;</span>
    <span class="token key atrule">requests</span><span class="token punctuation">:</span> <span class="token comment"># 建议</span>
      <span class="token key atrule">cpu</span><span class="token punctuation">:</span> <span class="token string">&quot;1&quot;</span>
      <span class="token key atrule">memory</span><span class="token punctuation">:</span> <span class="token string">&quot;10Mi&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="pod-yml详解" tabindex="-1"><a class="header-anchor" href="#pod-yml详解" aria-hidden="true">#</a> pod YML详解</h3><p>查看字段信息<code>kubectl explain pod</code> <code>kubectl explain pod.metadata</code></p><table><thead><tr><th>参数名</th><th>字段类型</th><th>说明</th></tr></thead><tbody><tr><td>apiVersion</td><td>String</td><td>集群定义, <code>kubectl api-versions</code>查看</td></tr><tr><td>kind</td><td>string</td><td>集群定义, <code>kubectl api-resources</code>查看</td></tr><tr><td>metadata</td><td>object</td><td>源信息</td></tr><tr><td>spec</td><td>object</td><td>内容配置</td></tr><tr><td>metadata.name</td><td>string</td><td>资源的名称</td></tr><tr><td>metadata.namespace</td><td>string</td><td>资源的namespace</td></tr><tr><td>metadata.labels</td><td>object</td><td>资源的labels</td></tr><tr><td>spec.containers[]</td><td>object</td><td>定义容器的列表</td></tr><tr><td>spec.nodeName</td><td>string</td><td>根据nodeName将pod调度到指定Node上</td></tr><tr><td>spec.nodeSelector</td><td>map[]</td><td>根据标签将pod调度到指定Node上</td></tr><tr><td>spec.hostNetwork</td><td>boolean</td><td>默认false, 是否使用宿主机网络(容易冲突,还是使用集群分配的好)</td></tr><tr><td>spec.volumes</td><td>object[]</td><td>存储卷, 定义pod挂载点</td></tr><tr><td>spec.restartPolicy</td><td>string</td><td>重启策略</td></tr><tr><td>spec.containers[].name</td><td>String</td><td>容器的名字</td></tr><tr><td>spec.containers[].image</td><td>String</td><td>容器的镜像</td></tr><tr><td>spec.containers[].imagePullPolicy</td><td>String</td><td>默认<code>IfNotPresent</code>, 如何拉取镜像</td></tr><tr><td>spec.containers[].command[]</td><td>List</td><td>DockerFile的EntryPoint</td></tr><tr><td>spec.containers[].args[]</td><td>List</td><td>DockerFile的CMD</td></tr><tr><td>spec.containers[].env[]</td><td>List</td><td>DockerFile的ENV</td></tr><tr><td>spec.containers[].env[].name</td><td>String</td><td>环境变量名称</td></tr><tr><td>spec.containers[].env[].value</td><td>String</td><td>环境变量值</td></tr><tr><td>spec.containers[].ports[]</td><td>List</td><td>容器需要用到的端口列表</td></tr><tr><td>spec.containers[].ports[].name</td><td>String</td><td>端口名称</td></tr><tr><td>spec.containers[].ports[].containerPort</td><td>String</td><td>容器需要监听的端口号</td></tr><tr><td>spec.containers[].ports[].protocol</td><td>String</td><td>端口协议, 默认值为TCP</td></tr><tr><td>spec.containers[].ports[].hostPort</td><td>String</td><td>容器映射到主机的端口, 多个controller会出问题, 不设置</td></tr><tr><td>spec.containers[].ports[].hostIP</td><td>String</td><td>容器映射到主机的IP, 多个controller会出问题, 不设置</td></tr><tr><td>spec.containers[].resources</td><td>Object</td><td>资源限制和资源请求的值</td></tr><tr><td>spec.containers[].resources.limits</td><td>Object</td><td>设置容器运行时资源的运行上限</td></tr><tr><td>spec.containers[].resources.limits.cpu</td><td>String</td><td>CPU的限制, 单位为core数</td></tr><tr><td>spec.containers[].resources.limits.memory</td><td>String</td><td>MEM 内存的限制，单位为 MIB，GIB</td></tr><tr><td>spec.containers[].resources.requests</td><td>Object</td><td>容器启动和调度室的限制设置</td></tr><tr><td>spec.containers[].resources.requests.cpu</td><td>String</td><td>CPU请求，单位为 core 数</td></tr><tr><td>spec.containers[].resources.requests.memory</td><td>String</td><td>内存请求, 单位为 MIB, GIB</td></tr></tbody></table><h3 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h3><p>不要直接创建 Pod, 使用controller(Deployment/Job)来创建Pod. controller通过使用<code>PodTemplate</code>来生成实际的pod, 如下:</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> batch/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Job
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> hello
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">template</span><span class="token punctuation">:</span> <span class="token comment"># 这里是 Pod 模版</span>
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">containers</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> hello
        <span class="token key atrule">image</span><span class="token punctuation">:</span> busybox
        <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;sh&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;-c&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;echo &quot;Hello, Kubernetes!&quot; &amp;&amp; sleep 3600&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="pod生命周期" tabindex="-1"><a class="header-anchor" href="#pod生命周期" aria-hidden="true">#</a> pod生命周期</h2><ol><li>pod创建</li><li>创建初始化容器(init container)</li><li>运行用户容器(main container) 3.1. 容器启动后狗子(post start), 容器终止前钩子(pre stop) 3.2. 容器存活性探测(liveness probe), 就绪性探测(readiness probe)</li><li>pod终止</li></ol><h3 id="初始化容器" tabindex="-1"><a class="header-anchor" href="#初始化容器" aria-hidden="true">#</a> 初始化容器</h3><ul><li>初始化容器在用户容器之前创建,</li><li>初始化容器按顺序创建</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> myapp<span class="token punctuation">-</span>pod
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> myapp
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> myapp<span class="token punctuation">-</span>container
    <span class="token key atrule">image</span><span class="token punctuation">:</span> busybox
    <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;sh&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;-c&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;echo The app is running! &amp;&amp; sleep 3600&#39;</span><span class="token punctuation">]</span>
  <span class="token key atrule">initContainers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> init<span class="token punctuation">-</span>myservice
    <span class="token key atrule">image</span><span class="token punctuation">:</span> busybox
    <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;sh&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;-c&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;until nslookup myservice; do echo waiting for myservice; sleep 2; done;&#39;</span><span class="token punctuation">]</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> init<span class="token punctuation">-</span>mydb
    <span class="token key atrule">image</span><span class="token punctuation">:</span> busybox
    <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;sh&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;-c&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;until nslookup mydb; do echo waiting for mydb; sleep 2; done;&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="容器钩子" tabindex="-1"><a class="header-anchor" href="#容器钩子" aria-hidden="true">#</a> 容器钩子</h3><ul><li>在容器开始后和结束前执行</li><li>使用<code>spec.containers.lifecycle.postStart/preStop</code>来配置, 可选: <ul><li><code>exec</code>执行命令</li><li><code>HTTPGet</code> http请求</li><li><code>tcpSocket</code> socket请求</li></ul></li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
    <span class="token key atrule">lifecycle</span><span class="token punctuation">:</span>
      <span class="token key atrule">postStart</span><span class="token punctuation">:</span>
        <span class="token key atrule">exec</span><span class="token punctuation">:</span>
          <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;/bin/sh&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;-c&quot;</span><span class="token punctuation">,</span><span class="token punctuation">...</span><span class="token punctuation">]</span>
      <span class="token key atrule">preStop</span><span class="token punctuation">:</span>
        <span class="token key atrule">exec</span><span class="token punctuation">:</span>
          <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;/bin/sh&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;-c&quot;</span><span class="token punctuation">,</span><span class="token punctuation">...</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="容器探测" tabindex="-1"><a class="header-anchor" href="#容器探测" aria-hidden="true">#</a> 容器探测</h3><ul><li><p>探测方式</p><ul><li>liveness: pod是否正常运行, 决定是否重启pod</li><li>readless: pod是否可以接受请求, 决定是否请求转发给pod</li></ul></li><li><p>使用<code>spec.containers.livenessProbe</code>来配置, 可选:</p><ul><li><code>exec</code>执行命令</li><li><code>HTTPGet</code> http请求</li><li><code>tcpSocket</code> socket请求</li></ul></li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
    <span class="token key atrule">livenessProbe</span><span class="token punctuation">:</span>
        <span class="token key atrule">exec</span><span class="token punctuation">:</span>
          <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;/bin/sh&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;-c&quot;</span><span class="token punctuation">,</span><span class="token punctuation">...</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="重启策略" tabindex="-1"><a class="header-anchor" href="#重启策略" aria-hidden="true">#</a> 重启策略</h3><p><code>spec.restartPolicy</code>可取Always、OnFailure 和 Never。默认值是 Always。</p><ul><li>Always: 默认, 无论如何都重启</li><li>OnFailure: 异常终止重启</li><li>Never: 不重启</li></ul><table><thead><tr><th>取值</th><th>描述</th></tr></thead><tbody><tr><td>Pending</td><td>Pod被调度的时间和通过网络下载镜像的时间</td></tr><tr><td>Running</td><td>Pod 已经绑定到了某个节点，Pod 中所有的容器都已被创建, 并且至少一个在运行</td></tr><tr><td>Succeeded</td><td>Pod 中的所有容器都已成功终止</td></tr><tr><td>Failed</td><td>至少一个容器以非0状态退出或者被系统终止</td></tr><tr><td>Unknown</td><td>Pod 所在主机通信失败</td></tr></tbody></table><p>pod中container的状态 <code>kubectl describe pod &lt;pod 名称&gt;</code></p><table><thead><tr><th>取值</th><th>描述</th></tr></thead><tbody><tr><td>Waiting</td><td>初始化, 比如拉取容器镜像</td></tr><tr><td>Running</td><td>容器正在执行状态</td></tr><tr><td>Terminated</td><td>已经开始执行并且或者正常结束或者因为某些原因失败</td></tr></tbody></table><h2 id="pod调度策略" tabindex="-1"><a class="header-anchor" href="#pod调度策略" aria-hidden="true">#</a> pod调度策略</h2><ul><li>自由调度: 默认通过Scheduler来决定pod在哪个node上执行</li><li>定向调度: NodeName NodeSelector</li><li>亲和性调度: NodeAffinity(和哪个node关系近), PodAffinity, PodAntiAffinity</li><li>污点与容忍: Traints, Toleration</li></ul><h3 id="强制性" tabindex="-1"><a class="header-anchor" href="#强制性" aria-hidden="true">#</a> 强制性</h3><ol><li>NodeName 强制将Pod指向某个Node, 跳过Scheduler的调度逻辑</li></ol><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">nodeName</span><span class="token punctuation">:</span> node1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>NodeSelector 强制将pod指向具有某个标签的Node上, 跳过Scheduler的调度逻辑</li></ol><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">nodeSelector</span><span class="token punctuation">:</span>
    <span class="token key atrule">key</span><span class="token punctuation">:</span> vallue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="反-亲和性" tabindex="-1"><a class="header-anchor" href="#反-亲和性" aria-hidden="true">#</a> (反)亲和性</h3><p>亲和性: 当两个应用频繁交互时 反亲和性: 当多副本时, 打散到多个node, 实现高可用 <code>pod.spec.affinity.nodeAffinity/PodAffinity/PodAntiAffinity</code></p><h3 id="污点" tabindex="-1"><a class="header-anchor" href="#污点" aria-hidden="true">#</a> 污点</h3><p>node上设置污点, 则和pod排斥, 不让pod进来</p><ul><li>PreferNoSchedule: 尽量不要来, 除非没有其他节点</li><li>NoSchedule: 新的pod不要来, 已经来没关系</li><li>NoExecute: 新的pod不要来, 已经有的也要走</li></ul><p>添加污点: <code>kubectl taint nodes [NAME] [KEY=VALUE:effect]</code> 去除污点: <code>kubectl taint nodes [NAME] [KEY:effect-]</code> 去除所有: <code>kubectl taint nodes key-</code></p><h3 id="容忍-toleration" tabindex="-1"><a class="header-anchor" href="#容忍-toleration" aria-hidden="true">#</a> 容忍(Toleration)</h3><p>pod忽略node的污点, 强行进去</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">toleration</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">key</span><span class="token punctuation">:</span>
    <span class="token key atrule">operator</span><span class="token punctuation">:</span>
    <span class="token key atrule">value</span><span class="token punctuation">:</span>
    <span class="token key atrule">effect</span><span class="token punctuation">:</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="container-设置" tabindex="-1"><a class="header-anchor" href="#container-设置" aria-hidden="true">#</a> container 设置</h4><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> command<span class="token punctuation">-</span>demo
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> test <span class="token comment"># 容易的唯一名称</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> debian <span class="token comment">#容器的镜像</span>
    <span class="token key atrule">imagePullPolicy</span><span class="token punctuation">:</span> IfNotPresent <span class="token comment"># 默认值, 拉取镜像的策略</span>
    <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;printenv&quot;</span><span class="token punctuation">]</span> <span class="token comment"># Dockerfile中的 ENTRYPOINT</span>
    <span class="token key atrule">args</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;HOSTNAME&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;KUBERNETES_PORT&quot;</span><span class="token punctuation">]</span> <span class="token comment"># Dockerfile中的 CMD</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> http <span class="token comment"># 端口名称</span>
      <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">80</span> <span class="token comment"># container暴露的端口</span>
      <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP <span class="token comment"># 默认值</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> https <span class="token comment"># 端口名称</span>
      <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">443</span> <span class="token comment"># container暴露的端口</span>
      <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP <span class="token comment"># 默认值</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,64),l=[p];function c(o,i){return a(),s("div",null,l)}const r=n(t,[["render",c],["__file","k8sPods.html.vue"]]);export{r as default};
