# threejs

参考[Three.js基础入门（一）](https://juejin.cn/post/7020396322062598181)

### ThreeJS三个重要概念
#### Camera
镜头,就是我们的视角

#### Scene
场景,场景里可以放物体

#### Renderer
渲染器,将镜头和场景进行渲染


### 官网例子
```js
import * as THREE from 'three'

let camera, scene, renderer;
let geometry, material, mesh;

init();

function init() {
    //1.创建镜头,就是我们的视角
    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
    camera.position.z = 1;
    //2.创建场景
    scene = new THREE.Scene();
    geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );//创建一个几何结构,只是一个框架
    material = new THREE.MeshNormalMaterial();//创建材料
    mesh = new THREE.Mesh( geometry, material );//将材料和几何结构融合
    scene.add( mesh );//加入场景中
    //3.创建渲染器
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );//设置渲染器的大小
    // renderer.render( scene, camera )
    renderer.setAnimationLoop( animation ); //设置动画
    document.body.appendChild( renderer.domElement ); //添加到前端页面
}

function animation( time ) {//随着时间渲染的每一帧
    mesh.rotation.x = time / 2000;
    mesh.rotation.y = time / 1000;
    renderer.render( scene, camera );
}

```