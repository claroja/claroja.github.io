---
title: js_class
toc: true
date: 2021-01-20 22:03:54
---

ES6标准中 支持`class`语法创建对象

```js
class Polygon {
  constructor(height, width) {
    this.area = height * width;
  }
}
console.log(new Polygon(4,3).area);
```

# 继承

语法
```js
class name [extends] {
  // class body
}
```

```js
class Polygon {
  constructor(height, width) {
    this.name = 'Polygon';
    this.height = height;
    this.width = width;
  }
}

class Square extends Polygon {
  constructor(length) {
    super(length, length);
    this.name = 'Square';
  }
}
```

# constructor
创建和初始化实例

语法:
`constructor([arguments]) { ... }`
描述:
一个类只能有一个`constructor`方法
使用`super`关键字调用父类方法
如果没有显式指定构造方法,默认添加无参构造方法



```js
class Polygon {
  constructor() {
    this.name = "Polygon";
  }
}

const poly1 = new Polygon();

console.log(poly1.name);
// expected output: "Polygon"
```



# static

`static`定义静态方法,不能再类的实例中调用静态方法,在类中调用


```js
class ClassWithStaticMethod {
  static staticMethod() {
    return 'static method has been called.';
  }
}

console.log(ClassWithStaticMethod.staticMethod());
// expected output: "static method has been called."
```


语法
`static methodName() { ... }`

描述
不能再实例上调用


参考:
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/class
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes/constructor