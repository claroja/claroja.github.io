
# OrbitControls

OrbitControls 是 Three.js 提供的一种常用的相机控制器，允许用户通过鼠标或触摸屏操作来旋转、平移和缩放场景。


OrbitControls本质上就是改变相机的参数，比如相机的位置属性，改变相机位置也可以改变相机拍照场景中模型的角度，实现模型的360度旋转预览效果，改变透视投影相机距离模型的距离，就可以改变相机能看到的视野范围。


## 透视相机的控制

1. 鼠标左键以lookat确定的半径的圆面上运动
2. 鼠标中键控制摄像头的远近
3. 鼠标右键是控制平面的的上下左右移动

<iframe src="https://threejs.org/manual/examples/cameras-perspective-2-scenes.html" width="100%" height="500"></iframe>


## 正交相机的控制

1. 鼠标左键以lookat确定的半径的圆面上运动
2. 鼠标中键控制摄像范围的大小
3. 鼠标右键是控制平面的的上下左右移动

<iframe src="https://threejs.org/manual/examples/cameras-orthographic-2-scenes.html" width="100%" height="500"></iframe>


## 代码实现

```ts
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


  // 创建场景
  const scene = new THREE.Scene();

  // 创建相机
  const camera = new THREE.PerspectiveCamera(70, 500/500, 0.01, 10);
  camera.position.z = 1;

  // 创建几何体和材质
  const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
  const material = new THREE.MeshNormalMaterial();
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  // 创建渲染器
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(500, 500);
  document.body.appendChild(renderer.domElement);


  // 初始化 OrbitControls
  const controls = new OrbitControls(camera, renderer.domElement);

function animate() {

    requestAnimationFrame(animate);

    // 更新 OrbitControls
    controls.update();

    renderer.render(scene, camera);

}

animate();
```







## 参考
1. [OrbitControls 控件控制相机旋转、缩放和平移视图](https://www.cnblogs.com/jocongmin/p/18756595)