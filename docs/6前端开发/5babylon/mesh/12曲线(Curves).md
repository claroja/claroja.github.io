# [曲线(Curves)](https://doc.babylonjs.com/features/featuresDeepDive/mesh/drawCurves/)


## 3点曲线

根据3个点做出一个曲线


```js
const curve = BABYLON.Curve3.Create.CURVETYPE(parameters);
```


<iframe src="https://playground.babylonjs.com/#KENEJP#280" width="100%" height="500"></iframe>



## 贝塞尔曲线(Bezier Curve)


```js
const arc = BABYLON.Curve3.ArcThru3Points(first, second, third, steps, closed, fullCircle);
```


<iframe src="https://playground.babylonjs.com/#W0XSPA" width="100%" height="500"></iframe>













