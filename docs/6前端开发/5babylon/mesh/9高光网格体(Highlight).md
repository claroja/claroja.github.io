# [高光网格体(HighlightMeshes)](https://doc.babylonjs.com/features/featuresDeepDive/mesh/highlightLayer/)



高光网格需要引擎要开启`stencil`:

```js
const engine = new BABYLON.Engine(canvas, true, { stencil: true });
```
创建一个高光层, 然后将高光层添加给具体的网格体.

```js
// Add the highlight layer.
const hl = new BABYLON.HighlightLayer("hl1", scene);
hl.addMesh(sphere, BABYLON.Color3.Green());
```

<iframe src="https://playground.babylonjs.com/#1KUJ0A#305" width="100%" height="500"></iframe>




