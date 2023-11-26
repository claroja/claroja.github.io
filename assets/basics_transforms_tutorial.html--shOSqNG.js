const t=JSON.parse('{"key":"v-98761562","path":"/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/pytorch/%E5%AE%98%E7%BD%91%E7%BF%BB%E8%AF%91/basics_transforms_tutorial.html","title":"transforms_tutorial","lang":"zh-CN","frontmatter":{"description":"transforms_tutorial TRANSFORMS 数据个格式一般不是最终的训练需要的, 所以需要使用torchvision.transforms提供的方法进行转换. TorchVision有两个参数: transform转换特征 target_transform转换标签 二者都接收一个可调用的对象. FashionMNIST中的特征是PIL Image格式, 标签是整型.为了训练, 我们需要将特征转换为normalized tensors, 将标签转换为one-hot encoded tensors.","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/pytorch/%E5%AE%98%E7%BD%91%E7%BF%BB%E8%AF%91/basics_transforms_tutorial.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"transforms_tutorial"}],["meta",{"property":"og:description","content":"transforms_tutorial TRANSFORMS 数据个格式一般不是最终的训练需要的, 所以需要使用torchvision.transforms提供的方法进行转换. TorchVision有两个参数: transform转换特征 target_transform转换标签 二者都接收一个可调用的对象. FashionMNIST中的特征是PIL Image格式, 标签是整型.为了训练, 我们需要将特征转换为normalized tensors, 将标签转换为one-hot encoded tensors."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-25T13:46:58.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2023-11-25T13:46:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"transforms_tutorial\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-25T13:46:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"TRANSFORMS","slug":"transforms","link":"#transforms","children":[]},{"level":2,"title":"ToTensor()","slug":"totensor","link":"#totensor","children":[]},{"level":2,"title":"Lambda()","slug":"lambda","link":"#lambda","children":[]}],"git":{"createdTime":1700920018000,"updatedTime":1700920018000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":0.88,"words":265},"filePathRelative":"机器学习/pytorch/官网翻译/basics_transforms_tutorial.md","localizedDate":"2023年11月25日","excerpt":"<h1> transforms_tutorial</h1>\\n<h2> TRANSFORMS</h2>\\n<p>数据个格式一般不是最终的训练需要的, 所以需要使用<code>torchvision.transforms</code>提供的方法进行转换.\\n<code>TorchVision</code>有两个参数:</p>\\n<ol>\\n<li><code>transform</code>转换特征</li>\\n<li><code>target_transform</code>转换标签\\n二者都接收一个可调用的对象.\\n<code>FashionMNIST</code>中的特征是PIL Image格式, 标签是整型.为了训练, 我们需要将特征转换为normalized tensors, 将标签转换为one-hot encoded tensors.</li>\\n</ol>","copyright":{"author":"王新宇"},"autoDesc":true}');export{t as data};