const e=JSON.parse('{"key":"v-6b04e119","path":"/%E7%BC%96%E7%A8%8B%E5%9F%BA%E7%A1%80/Docker/kebernetes/k8sService.html","title":"索引","lang":"zh-CN","frontmatter":{"description":"索引 service 问题: pod 重启后其IP会更改 pod IP仅可在集群内部访问 解决: service可以为一组pod提供统一的入口地址，并且将请求负载分发到后端的各个pod上。 服务发现, 当pod重启后, 会自动注册 本质: kube-proxy服务, 运行在每个Node节点上.当创建Service时, 向etcd写入信息, 由kube-proxy来解析 命令控制 创建service kubectl expose deployment [NAME] --name=[NAME] --type=[ClusterIP] --port=[NUM] --target-port=[NUM] type: ClusterIP在集群内访问, NodePort在集群外访问, 会先创建ClusterIP, 并设置target-port=port port:每个pod暴露的端口 target-port: pod组对应service暴露的端口 获得service kubectl get/describe svc 删除service kubectl delte svc","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E7%BC%96%E7%A8%8B%E5%9F%BA%E7%A1%80/Docker/kebernetes/k8sService.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"索引"}],["meta",{"property":"og:description","content":"索引 service 问题: pod 重启后其IP会更改 pod IP仅可在集群内部访问 解决: service可以为一组pod提供统一的入口地址，并且将请求负载分发到后端的各个pod上。 服务发现, 当pod重启后, 会自动注册 本质: kube-proxy服务, 运行在每个Node节点上.当创建Service时, 向etcd写入信息, 由kube-proxy来解析 命令控制 创建service kubectl expose deployment [NAME] --name=[NAME] --type=[ClusterIP] --port=[NUM] --target-port=[NUM] type: ClusterIP在集群内访问, NodePort在集群外访问, 会先创建ClusterIP, 并设置target-port=port port:每个pod暴露的端口 target-port: pod组对应service暴露的端口 获得service kubectl get/describe svc 删除service kubectl delte svc"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-25T13:46:58.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2023-11-25T13:46:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"索引\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-25T13:46:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"service","slug":"service","link":"#service","children":[{"level":3,"title":"命令控制","slug":"命令控制","link":"#命令控制","children":[]},{"level":3,"title":"配置文件控制","slug":"配置文件控制","link":"#配置文件控制","children":[]}]}],"git":{"createdTime":1700920018000,"updatedTime":1700920018000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":1.9,"words":571},"filePathRelative":"编程基础/Docker/kebernetes/k8sService.md","localizedDate":"2023年11月25日","excerpt":"<h1> 索引</h1>\\n<h2> service</h2>\\n<p>问题:</p>\\n<ul>\\n<li>pod 重启后其IP会更改</li>\\n<li>pod IP仅可在集群内部访问\\n解决:</li>\\n<li>service可以为一组pod提供统一的入口地址，并且将请求负载分发到后端的各个pod上。</li>\\n<li>服务发现, 当pod重启后, 会自动注册\\n本质:\\nkube-proxy服务, 运行在每个Node节点上.当创建Service时, 向etcd写入信息, 由kube-proxy来解析</li>\\n</ul>\\n<h3> 命令控制</h3>\\n<ul>\\n<li>创建service <code>kubectl expose deployment [NAME] --name=[NAME] --type=[ClusterIP] --port=[NUM] --target-port=[NUM]</code>\\n<ul>\\n<li>type:\\nClusterIP在集群内访问,\\nNodePort在集群外访问, 会先创建ClusterIP, 并设置<code>target-port=port</code></li>\\n<li>port:每个pod暴露的端口</li>\\n<li>target-port: pod组对应service暴露的端口</li>\\n</ul>\\n</li>\\n<li>获得service <code>kubectl get/describe svc</code></li>\\n<li>删除service <code>kubectl delte svc</code></li>\\n</ul>","copyright":{"author":"王新宇"},"autoDesc":true}');export{e as data};