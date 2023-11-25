const e=JSON.parse(`{"key":"v-2f30fb80","path":"/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0/netExample/deeplearn_cnn.html","title":"cnn","lang":"zh-CN","frontmatter":{"description":"cnn 卷积神经网络(（Convolutional Neural Network, CNN)相比神经网络出现了卷积层(Convolution层)和池化层(pooling层). 之前介绍的神经网络中, Affine相邻层的所有神经元之间都有连接, 这称为全连接(fully-connected). 全连接的神经网络中, Affine层后面跟着激活函数ReLU层(或sigmoid层). 这里堆叠了4层\\"Affine-ReLU'组合, 然后第5层是Affine层, 最后由Softmax层输出最后最终结果. CNN中新增了Convolution层和Pooling层.CNN的层的连接顺序是\\"Convolution-ReLU-(Pooling)\\"(Pooling层有时会被省略). 这里可以理解为之前的\\"Affine-ReLU\\"连接被替换成了\\"Convolution-ReLU-(Pooling)\\"连接.","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0/netExample/deeplearn_cnn.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"cnn"}],["meta",{"property":"og:description","content":"cnn 卷积神经网络(（Convolutional Neural Network, CNN)相比神经网络出现了卷积层(Convolution层)和池化层(pooling层). 之前介绍的神经网络中, Affine相邻层的所有神经元之间都有连接, 这称为全连接(fully-connected). 全连接的神经网络中, Affine层后面跟着激活函数ReLU层(或sigmoid层). 这里堆叠了4层\\"Affine-ReLU'组合, 然后第5层是Affine层, 最后由Softmax层输出最后最终结果. CNN中新增了Convolution层和Pooling层.CNN的层的连接顺序是\\"Convolution-ReLU-(Pooling)\\"(Pooling层有时会被省略). 这里可以理解为之前的\\"Affine-ReLU\\"连接被替换成了\\"Convolution-ReLU-(Pooling)\\"连接."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://claroja.github.io/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-25T13:46:58.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"cnn"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2023-11-25T13:46:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"cnn\\",\\"image\\":[\\"https://claroja.github.io/\\"],\\"dateModified\\":\\"2023-11-25T13:46:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"卷积层","slug":"卷积层","link":"#卷积层","children":[]},{"level":2,"title":"卷积运算","slug":"卷积运算","link":"#卷积运算","children":[]},{"level":2,"title":"填充","slug":"填充","link":"#填充","children":[]},{"level":2,"title":"步幅","slug":"步幅","link":"#步幅","children":[]},{"level":2,"title":"三维卷积运算","slug":"三维卷积运算","link":"#三维卷积运算","children":[]},{"level":2,"title":"多个滤波器","slug":"多个滤波器","link":"#多个滤波器","children":[]},{"level":2,"title":"批处理","slug":"批处理","link":"#批处理","children":[]},{"level":2,"title":"池化层","slug":"池化层","link":"#池化层","children":[]}],"git":{"createdTime":1700920018000,"updatedTime":1700920018000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":4.72,"words":1417},"filePathRelative":"机器学习/深度学习/netExample/deeplearn_cnn.md","localizedDate":"2023年11月25日","excerpt":"<h1> cnn</h1>\\n<p>卷积神经网络(（Convolutional Neural Network, CNN)相比神经网络出现了卷积层(Convolution层)和池化层(pooling层).</p>\\n<p>之前介绍的神经网络中, Affine相邻层的所有神经元之间都有连接, 这称为全连接(fully-connected).</p>\\n<p>\\n全连接的神经网络中, Affine层后面跟着激活函数ReLU层(或sigmoid层). 这里堆叠了4层\\"Affine-ReLU'组合, 然后第5层是Affine层, 最后由Softmax层输出最后最终结果.</p>\\n<p>\\nCNN中新增了Convolution层和Pooling层.CNN的层的连接顺序是\\"Convolution-ReLU-(Pooling)\\"(Pooling层有时会被省略). 这里可以理解为之前的\\"Affine-ReLU\\"连接被替换成了\\"Convolution-ReLU-(Pooling)\\"连接.</p>","copyright":{"author":"王新宇"},"autoDesc":true}`);export{e as data};