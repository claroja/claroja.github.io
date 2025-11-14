<script setup>

import { SVG } from '@svgdotjs/svg.js'


// 动画列表, 元素是动画逻辑的函数
const animationList = []

animationList[0] = function () {
  var draw = SVG('#drawing')
  var ellipse = SVG('#cell-wang g ellipse')
  ellipse.animate(1, 0, 'now').fill('#f06')
}

animationList[1] = function () {
  var draw = SVG('#drawing')
  var ellipse = SVG('#cell-wang g ellipse')

  ellipse.animate(1, 0, 'now').fill('#f0f')
}

animationList[2] = function () {
  var draw = SVG('#drawing')
  var ellipse = SVG('#cell-wang g ellipse')

  ellipse.animate(1, 0, 'now').fill('#fff')
}

// 顺序调用函数索引
let nextCurrentIndex = 0
// 逆序调用函数索引
let previousCurrentIndex = 0

// 顺序调用函数
function callNextFunction() {
  if (nextCurrentIndex < animationList.length) {
    const func = animationList[nextCurrentIndex]
    func() // 播放到当前动画
    nextCurrentIndex++  //索引到下一个动画
    previousCurrentIndex = nextCurrentIndex - 1 // 同步逆序索引, 逆序索引应该是下一个动画索引减2， 因为在逆序里会减1, 所以这里再减1即可
  } else { // 如果索引等于列表长度, 说明已经到最后了, 就让索引回到最初, 以便可以重新按顺序调用
    nextCurrentIndex = 0
    const func = animationList[nextCurrentIndex]
    func()
    nextCurrentIndex++
    previousCurrentIndex = nextCurrentIndex - 1 // 同步逆序索引
  }
}

// 回退调用函数
function callPreviousFunction() {
  if (previousCurrentIndex > 0) {
    previousCurrentIndex--
  } else {
    // 若索引为 0，移动到列表末尾
    previousCurrentIndex = animationList.length - 1
  }
  const func = animationList[previousCurrentIndex]
  func()
  nextCurrentIndex = previousCurrentIndex + 1   // 同步顺序索引
}


// 处理键盘事件
function handleKeyDown(event) {
  if (event.keyCode == 37 && event.ctrlKey) {// Ctrl + 左箭头，回退调用函数
    console.log('右 Ctrl + 左箭头，回退调用函数')
    callPreviousFunction()
  } else if (event.keyCode == 39 && event.ctrlKey) {// Ctrl + 右箭头，顺序调用函数
    callNextFunction()
  }
}
</script>

<template>
  <div @keydown="handleKeyDown" tabindex="0">
    <svg id="drawing" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"
      width="121px" height="81px" viewBox="-0.5 -0.5 121 81">
      <defs />
      <rect fill="#ffffff" width="100%" height="100%" x="0" y="0" />
      <g>
        <g data-cell-id="0">
          <g data-cell-id="1">
            <g data-cell-id="wang">
              <g id="cell-wang" content="&lt;object label=&quot;&quot;/&gt;" data-label="">
                <g>
                  <ellipse cx="60" cy="40" rx="60" ry="40" fill="#ffffff" stroke="#000000" pointer-events="all" />
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  </div>

</template>

<style lang="css"></style>