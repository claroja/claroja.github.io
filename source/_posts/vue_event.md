https://vuejs.org/guide/essentials/event-handling.html#accessing-event-argument-in-inline-handlers
https://stackoverflow.com/questions/59973296/vue-js-reference-error-event-target-not-defined

在vue中想要获取原生的event对象，需要使用`$event`, 官网只简单提了一句，坑。

Sometimes we also need to access the original DOM event in an inline handler. You can pass it into a method using the special $event variable, or use an inline arrow function:
