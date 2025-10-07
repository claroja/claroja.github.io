# [Gizmos](https://doc.babylonjs.com/features/featuresDeepDive/mesh/gizmo/)



Gizmo 是 Babylon.js 中的一种可视化工具，允许用户通过鼠标或触摸屏与 3D 对象进行交互。

Gizmo 的主要功能包括：
平移（PositionGizmo）：移动对象的位置。
旋转（RotationGizmo）：旋转对象。
缩放（ScaleGizmo）：缩放对象的大小。
边界框（BoundingBoxGizmo）：显示对象的边界框，并支持整体操作。



```js
const gizmoManager = new BABYLON.GizmoManager(scene);
// 启用平移 Gizmo
gizmoManager.positionGizmoEnabled = true;
 
// 启用旋转 Gizmo
gizmoManager.rotationGizmoEnabled = true;
 
// 启用缩放 Gizmo
gizmoManager.scaleGizmoEnabled = true;
 
// 启用边界框 Gizmo
gizmoManager.boundingBoxGizmoEnabled = true;

const box = BABYLON.MeshBuilder.CreateBox("box", { size: 2 }, scene);
gizmoManager.attachToMesh(box); // 将 Gizmo 附加到 box 上

```
