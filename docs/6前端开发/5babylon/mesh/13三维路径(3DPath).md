# [3D路径(Path3D)](https://doc.babylonjs.com/features/featuresDeepDive/mesh/path3D/)

路径 3D（Path3D）是一种数学对象，由曲线上点的位置向量序列创建而成。一旦生成路径 3D，就可用于确定曲线在这些点中每个点的切线(tangent)、法线(normal)和副法线(binormal)向量三元组。随后，每个三元组都能用作局部坐标系。例如，在相机沿曲线移动时，你可以将相机方向设置为法线方向 。


创建3D路径

```js
const points = [v1, v2, ..., vn];          // array of Vector3
const path3d = new BABYLON.Path3D(points);
```

获得所有点的切线, 法线, 副法线

```js
const tangents = path3D.getTangents();
const normals = path3D.getNormals();
const binormals = path3D.getBinormals();
```


<iframe src="https://playground.babylonjs.com/#2DLXYB#1" width="100%" height="500"></iframe>


