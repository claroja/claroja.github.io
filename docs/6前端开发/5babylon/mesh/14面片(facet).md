# [面片(facet)](https://doc.babylonjs.com/features/featuresDeepDive/mesh/facetData/)


我们在此使用 “面片（facet）” 一词，以免与 “面（face）” 一词混淆。一个网格可以有一些平面面（face）。例如，一个立方体有 6 个面，即 6 个平面正方形面。在 WebGL 层面，它的每个面由 2 个三角形绘制而成。我们将这些基本三角形称为 “面片（facets）” 。

由于它需要额外的内存，因此默认未启用。此功能用于访问网格的每个面片，比如面片的位置、法线，或者能够检索世界空间中给定区域内网格的所有面片。

面片数据功能适用于任何网格，无论该网格是由 Babylon.js（BJS）提供的形状（立方体、球体、圆柱体、管道、参数化形状等）创建的，还是克隆的、实例化的、合并的，或是从外部来源（如 Blender 等）导入的。
要启用此功能，只需调用一次 updateFacetData () 方法。

```js
const mesh = BABYLON.MeshBuilder.CreateTorusKnot("t", { radius: 2.0 }, scene);
mesh.updateFacetData();
console.log(mesh.facetNb);

```

<iframe src="https://playground.babylonjs.com/#1YTZAC" width="100%" height="500"></iframe>

