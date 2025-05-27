# 类型


## 类型声明

```ts
// 设置单个类型
let 变量: 类型;
let 变量: 类型 = 值;
function fn(参数: 类型, 参数: 类型): 类型{
}

// 也可以设置多个类型
let 变量: 类型1 | 类型2;
function fn(): string | number{
}


// &表示同时
let j: { name: string } & { age: number };

```

## 类型种类

|  类型   |       例子        |              描述              |
| :-----: | :---------------: | :----------------------------: |
| number  |    1, -33, 2.5    |            任意数字            |
| string  | 'hi', "hi", `hi`  |           任意字符串           |
| boolean |    true、false    |       布尔值true或false        |
| 字面量  |      其本身       |  限制变量的值就是该字面量的值  |
|   any   |         *         |            任意类型            |
| unknown |         *         |         类型安全的any          |
|  void   | 空值（undefined） |     没有值（或undefined）      |
|  never  |      没有值       |          不能是任何值          |
| object  |  {name:'孙悟空'}  |          任意的JS对象          |
|  array  |      [1,2,3]      |           任意JS数组           |
|  tuple  |       [4,5]       | 元素，TS新增类型，固定长度数组 |
|  enum   |    enum{A, B}     |       枚举，TS中新增类型       |


## number

```typescript
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let big: bigint = 100n;
```

## boolean

```typescript
let isDone: boolean = false;
```

## string

```typescript
let color: string = "blue";
color = 'red';

let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${fullName}.I'll be ${age + 1} years old next month.`;
```

## 字面量

通过字面量可以确定变量的取值范围, 和枚举类似

```typescript
let color: 'red' | 'blue' | 'black';
let num: 1 | 2 | 3 | 4 | 5;
```

## any

相当于回到了原生的js

```typescript
let d: any = 4;
d = 'hello';
d = true;
```

#### unknown

any类型可以赋值给别的类型变量unknown

```typescript
let e: unknown
let s: string
e="hello"
s = e //报错, 因为unknown的类型值不能赋值给其他类型, 但是any可以(所以unknown更加的严格, 建议使用unknown而不是any)

// 1. 第一种赋值的方法
if(typeof e === "string"){
    s = e //是可以的, 因为已经确认了e的类型
}
// 2. 第二种赋值的方法
s = e as string
// 3. 第三种方法, 类似于java的泛型
s = <string> e
```

## void

表示没有返回值, 返回值可能为null

```typescript
function fn(): void{
}
```

## never

表示没有返回值, 函数没执行完
```typescript
function error(message: string): never {
  throw new Error(message);
}
```

## object（没啥用）
因为js任何东西都是对象
```typescript
//一般不这么使用
let obj: object = {};
// 正常的用法
let b: {name: stirng, age?:number};//规定了对象的结构(只有一个name), 以及name的类型是string, age后面问号表示,该字段可有可无, 可选属性
b = {name:'王'}

let c: {name: string,[prop: sting]: any} //要求有一个name属性是string类型, 其他属性不做限定


// 设置函数结构的类型声明：语法：(形参:类型, 形参:类型 ...) => 返回值
let d: (a: number ,b: number)=>number;
// d = function (n1: string, n2: string): number{
//     return 10;
// }
```

## array
数组的类型声明, 两种方式:
1. 类型[]
2. Array<类型>
```typescript
let list: number[] = [1, 2, 3];
let list: Array<number> = [1, 2, 3];
```

## tuple
元组就是固定长度的数组
语法：[类型, 类型, 类型]
```typescript
let x: [string, number];
x = ["hello", 10]; 
```

## enum
```typescript
enum Gender{
    Male,
    Female
}

let i: {name: string, gender: Gender};
i = {
    name: '孙悟空',
    gender: Gender.Male // 'male'
}
```

## 自定义类型名
```ts
type myType = 1 | 2 | 3 | 4 | 5;
let k: myType;
let l: myType;
let m: myType;
k = 2;
```