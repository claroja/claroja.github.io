const n=JSON.parse(`{"key":"v-0fc9c6aa","path":"/%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/nodejs/%E9%83%A8%E7%BD%B2%E4%BE%9D%E8%B5%96%E6%A8%A1%E5%9D%97/threejs.html","title":"threejs","lang":"zh-CN","frontmatter":{"description":"threejs 参考Three.js基础入门（一） ThreeJS三个重要概念 Camera 镜头,就是我们的视角 Scene 场景,场景里可以放物体 Renderer 渲染器,将镜头和场景进行渲染 官网例子 import * as THREE from 'three' let camera, scene, renderer; let geometry, material, mesh; init(); function init() { //1.创建镜头,就是我们的视角 camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 ); camera.position.z = 1; //2.创建场景 scene = new THREE.Scene(); geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );//创建一个几何结构,只是一个框架 material = new THREE.MeshNormalMaterial();//创建材料 mesh = new THREE.Mesh( geometry, material );//将材料和几何结构融合 scene.add( mesh );//加入场景中 //3.创建渲染器 renderer = new THREE.WebGLRenderer(); renderer.setSize( window.innerWidth, window.innerHeight );//设置渲染器的大小 // renderer.render( scene, camera ) renderer.setAnimationLoop( animation ); //设置动画 document.body.appendChild( renderer.domElement ); //添加到前端页面 } function animation( time ) {//随着时间渲染的每一帧 mesh.rotation.x = time / 2000; mesh.rotation.y = time / 1000; renderer.render( scene, camera ); }","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/nodejs/%E9%83%A8%E7%BD%B2%E4%BE%9D%E8%B5%96%E6%A8%A1%E5%9D%97/threejs.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"threejs"}],["meta",{"property":"og:description","content":"threejs 参考Three.js基础入门（一） ThreeJS三个重要概念 Camera 镜头,就是我们的视角 Scene 场景,场景里可以放物体 Renderer 渲染器,将镜头和场景进行渲染 官网例子 import * as THREE from 'three' let camera, scene, renderer; let geometry, material, mesh; init(); function init() { //1.创建镜头,就是我们的视角 camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 ); camera.position.z = 1; //2.创建场景 scene = new THREE.Scene(); geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );//创建一个几何结构,只是一个框架 material = new THREE.MeshNormalMaterial();//创建材料 mesh = new THREE.Mesh( geometry, material );//将材料和几何结构融合 scene.add( mesh );//加入场景中 //3.创建渲染器 renderer = new THREE.WebGLRenderer(); renderer.setSize( window.innerWidth, window.innerHeight );//设置渲染器的大小 // renderer.render( scene, camera ) renderer.setAnimationLoop( animation ); //设置动画 document.body.appendChild( renderer.domElement ); //添加到前端页面 } function animation( time ) {//随着时间渲染的每一帧 mesh.rotation.x = time / 2000; mesh.rotation.y = time / 1000; renderer.render( scene, camera ); }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-01T12:59:38.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2023-12-01T12:59:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"threejs\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-01T12:59:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":3,"title":"ThreeJS三个重要概念","slug":"threejs三个重要概念","link":"#threejs三个重要概念","children":[]},{"level":3,"title":"官网例子","slug":"官网例子","link":"#官网例子","children":[]}],"git":{"createdTime":1701435578000,"updatedTime":1701435578000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":0.75,"words":225},"filePathRelative":"编程语言/nodejs/部署依赖模块/threejs.md","localizedDate":"2023年12月1日","excerpt":"<h1> threejs</h1>\\n<p>参考<a href=\\"https://juejin.cn/post/7020396322062598181\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Three.js基础入门（一）</a></p>\\n<h3> ThreeJS三个重要概念</h3>\\n<h4> Camera</h4>\\n<p>镜头,就是我们的视角</p>\\n<h4> Scene</h4>\\n<p>场景,场景里可以放物体</p>\\n<h4> Renderer</h4>\\n<p>渲染器,将镜头和场景进行渲染</p>\\n<h3> 官网例子</h3>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">import</span> <span class=\\"token operator\\">*</span> <span class=\\"token keyword\\">as</span> <span class=\\"token constant\\">THREE</span> <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">'three'</span>\\n\\n<span class=\\"token keyword\\">let</span> camera<span class=\\"token punctuation\\">,</span> scene<span class=\\"token punctuation\\">,</span> renderer<span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">let</span> geometry<span class=\\"token punctuation\\">,</span> material<span class=\\"token punctuation\\">,</span> mesh<span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token function\\">init</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">function</span> <span class=\\"token function\\">init</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token comment\\">//1.创建镜头,就是我们的视角</span>\\n    camera <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">THREE<span class=\\"token punctuation\\">.</span>PerspectiveCamera</span><span class=\\"token punctuation\\">(</span> <span class=\\"token number\\">70</span><span class=\\"token punctuation\\">,</span> window<span class=\\"token punctuation\\">.</span>innerWidth <span class=\\"token operator\\">/</span> window<span class=\\"token punctuation\\">.</span>innerHeight<span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">0.01</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">10</span> <span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    camera<span class=\\"token punctuation\\">.</span>position<span class=\\"token punctuation\\">.</span>z <span class=\\"token operator\\">=</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token comment\\">//2.创建场景</span>\\n    scene <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">THREE<span class=\\"token punctuation\\">.</span>Scene</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    geometry <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">THREE<span class=\\"token punctuation\\">.</span>BoxGeometry</span><span class=\\"token punctuation\\">(</span> <span class=\\"token number\\">0.2</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">0.2</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">0.2</span> <span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span><span class=\\"token comment\\">//创建一个几何结构,只是一个框架</span>\\n    material <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">THREE<span class=\\"token punctuation\\">.</span>MeshNormalMaterial</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span><span class=\\"token comment\\">//创建材料</span>\\n    mesh <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">THREE<span class=\\"token punctuation\\">.</span>Mesh</span><span class=\\"token punctuation\\">(</span> geometry<span class=\\"token punctuation\\">,</span> material <span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span><span class=\\"token comment\\">//将材料和几何结构融合</span>\\n    scene<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">add</span><span class=\\"token punctuation\\">(</span> mesh <span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span><span class=\\"token comment\\">//加入场景中</span>\\n    <span class=\\"token comment\\">//3.创建渲染器</span>\\n    renderer <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">THREE<span class=\\"token punctuation\\">.</span>WebGLRenderer</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    renderer<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">setSize</span><span class=\\"token punctuation\\">(</span> window<span class=\\"token punctuation\\">.</span>innerWidth<span class=\\"token punctuation\\">,</span> window<span class=\\"token punctuation\\">.</span>innerHeight <span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span><span class=\\"token comment\\">//设置渲染器的大小</span>\\n    <span class=\\"token comment\\">// renderer.render( scene, camera )</span>\\n    renderer<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">setAnimationLoop</span><span class=\\"token punctuation\\">(</span> animation <span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">//设置动画</span>\\n    document<span class=\\"token punctuation\\">.</span>body<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">appendChild</span><span class=\\"token punctuation\\">(</span> renderer<span class=\\"token punctuation\\">.</span>domElement <span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">//添加到前端页面</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">function</span> <span class=\\"token function\\">animation</span><span class=\\"token punctuation\\">(</span> <span class=\\"token parameter\\">time</span> <span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span><span class=\\"token comment\\">//随着时间渲染的每一帧</span>\\n    mesh<span class=\\"token punctuation\\">.</span>rotation<span class=\\"token punctuation\\">.</span>x <span class=\\"token operator\\">=</span> time <span class=\\"token operator\\">/</span> <span class=\\"token number\\">2000</span><span class=\\"token punctuation\\">;</span>\\n    mesh<span class=\\"token punctuation\\">.</span>rotation<span class=\\"token punctuation\\">.</span>y <span class=\\"token operator\\">=</span> time <span class=\\"token operator\\">/</span> <span class=\\"token number\\">1000</span><span class=\\"token punctuation\\">;</span>\\n    renderer<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">render</span><span class=\\"token punctuation\\">(</span> scene<span class=\\"token punctuation\\">,</span> camera <span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}`);export{n as data};
