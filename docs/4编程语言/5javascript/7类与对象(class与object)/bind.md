# bind

## 绑定对象, this就指向了绑定的新对象

```js
const person = {
  firstName:"John",
  lastName: "Doe",
  fullName: function() {
    console.log(this.firstName + " " + this.lastName)
  }
}

const member = {
  firstName:"Hege",
  lastName: "Nilsen",
}

let fullName = person.fullName.bind(member) // 绑定member，这时方法内部的this指向了member，而不是person

fullName()  //调用方法，结果是Hege Nilsen
```

## 绑定原函数参数, 在bind过程中就指定好参数

```js
let value = 'param'
const person = {
  firstName:"John",
  lastName: "Doe",
  fullName: function(value) {
    console.log(this.firstName + " " + this.lastName + " " + value)
  }
}

const member = {
  firstName:"Hege",
  lastName: "Nilsen",
}

let fullName = person.fullName.bind(member,value) // 绑定member，这时方法内部的this指向了member，而不是person

fullName()  //调用方法，结果是Hege Nilsen param
```


## 参考
[参考官网](https://www.w3schools.com/js/js_function_bind.asp)