import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as r,e as t}from"./app-XqA98pG8.js";const i={},o=t('<h1 id="同步异步" tabindex="-1"><a class="header-anchor" href="#同步异步" aria-hidden="true">#</a> 同步异步</h1><h3 id="同步异步-1" tabindex="-1"><a class="header-anchor" href="#同步异步-1" aria-hidden="true">#</a> 同步异步</h3><p>JavaScript 语言的一大特点就是单线程，也就是说，同一个时间只能做一件事。单线程就意味着，所有任务需要排队，前一个任务结束，才会执行后一个任务。</p><p>为了解决这个问题，利用多核 CPU 的计算能力，HTML5 提出 Web Worker 标准，允许 JavaScript 脚本创建多个线程。于是，JS 中出现了同步和异步。</p><p>同步任务: 在主线程上执行, 形成一个任务队列 异步任务: 通过回调函数实现, 形成一个任务队列 - 普通事件, 如: click, resize - 资源加载, 如: load, error - 定时器, 如: setInterval, setTimeout</p><p>js的执行机制:</p><ol><li>先执行同步任务队列中的任务</li><li>将异步任务(回调函数)放入任务队列中</li><li>所有的同步任务执行结束后, 执行异步任务队列中的任务</li></ol>',7),c=[o];function s(l,_){return a(),r("div",null,c)}const h=e(i,[["render",s],["__file","js_同步异步.html.vue"]]);export{h as default};
