# class


## 定义类：
```typescript
class 类名 {
    属性名: 类型;
    constructor(参数: 类型){
        this.属性名 = 参数;
    }
    方法名(){
        ....
    }
}
```
例子:
```typescript
class Person{
    name: string;
    age: number;
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
    sayHello(){
        console.log(`大家好，我是${this.name}`);
    }
}
const p = new Person('孙悟空', 18);
p.sayHello();

```

## 封装
- public（默认值），可以在类、子类和对象中修改
- protected ，可以在类、子类中修改
- private ，可以在类中修改

### public
```typescript
class Person{
    public name: string; // 写或什么都不写都是public
    public age: number;
    constructor(name: string, age: number){
        this.name = name; // 可以在类中修改
        this.age = age;
    }
    sayHello(){
        console.log(`大家好，我是${this.name}`);
    }
}

class Employee extends Person{
    constructor(name: string, age: number){
        super(name, age);
        this.name = name; //子类中可以修改
    }
}

const p = new Person('孙悟空', 18);
p.name = '猪八戒';// 可以通过对象修改
```

### protected
```typescript
class Person{
    protected name: string;
    protected age: number;

    constructor(name: string, age: number){
        this.name = name; // 可以修改
        this.age = age;
    }

    sayHello(){
        console.log(`大家好，我是${this.name}`);
    }
}

class Employee extends Person{
    constructor(name: string, age: number){
        super(name, age);
        this.name = name; //子类中可以修改
    }
}

const p = new Person('孙悟空', 18);
p.name = '猪八戒';// 不能修改
```
### private

```typescript
class Person{
    private name: string;
    private age: number;

    constructor(name: string, age: number){
        this.name = name; // 可以修改
        this.age = age;
    }

    sayHello(){
        console.log(`大家好，我是${this.name}`);
    }
}

class Employee extends Person{
    constructor(name: string, age: number){
        super(name, age);
        this.name = name; //子类中不能修改
    }
}

const p = new Person('孙悟空', 18);
p.name = '猪八戒';// 不能修改
```

## setter&getter
通过方法来修改私有属性

```typescript
class Person{
    private _name: string;

    constructor(name: string){
        this._name = name;
    }

    get name(){
        return this._name;
    }

    set name(name: string){
        this._name = name;
    }

}

const p1 = new Person('孙悟空');
console.log(p1.name); // 通过getter读取name属性
p1.name = '猪八戒'; // 通过setter修改name属性
```


## static
静态属性（方法），也称为类属性。使用静态属性无需创建实例，通过类即可直接使用


```typescript
class Tools{
    static PI = 3.1415926;
    
    static sum(num1: number, num2: number){
        return num1 + num2
    }
}

console.log(Tools.PI);
console.log(Tools.sum(123, 456));
```

## this
在类中，使用this表示当前对象


### extend(继承)
通过继承可以将其他类中的属性和方法引入到当前类中

```typescript
class Animal{
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}

class Dog extends Animal{
    bark(){
        console.log(`${this.name}在汪汪叫！`);
    }
}

const dog = new Dog('旺财', 4);
dog.bark();
```


### 重写
发生继承时，如果子类中的方法会替换掉父类中的同名方法，这就称为方法的重写

```typescript
class Animal{
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    run(){
        console.log(`父类中的run方法！`);
    }
}

class Dog extends Animal{
    bark(){
        console.log(`${this.name}在汪汪叫！`);
    }

    run(){
        console.log(`子类中的run方法，会重写父类中的run方法！`);
    }
}
const dog = new Dog('旺财', 4);
dog.bark();
```

### super
在子类中可以使用super来完成对父类的引用

## abstract class(抽象类)
抽象类是专门用来被其他类所继承的类，它只能被其他类所继承不能用来创建实例
使用abstract开头的方法叫做抽象方法，抽象方法没有方法体只能定义在抽象类中，继承抽象类时抽象方法必须要实现
```typescript
abstract class Animal{
    abstract run(): void;
    bark(){
        console.log('动物在叫~');
    }
}

class Dog extends Animals{
    run(){
        console.log('狗在跑~');
    }
}
```

### 3、接口（Interface）
接口的作用类似于抽象类，不同点在于接口中的所有方法和属性都是没有实值的，换句话说接口中的所有方法都是抽象方法。
接口主要负责定义一个类的结构，接口可以去限制一个对象的接口，对象只有包含接口中定义的所有属性和方法时才能匹配接口。
同时，可以让一个类去实现接口，实现接口时类中要保护接口中的所有属性。

```typescript
interface Person{
    name: string;
    sayHello():void;
}

class Student implements Person{
    constructor(public name: string) {
    }

    sayHello() {
        console.log('大家好，我是'+this.name);
    }
}
```

### 4、泛型（Generic）
定义一个函数或类时，有些情况下无法确定其中要使用的具体类型（返回值、参数、属性的类型不能确定），此时泛型便能够发挥作用。

```typescript
function test(arg: any): any{
    return arg;
}
```
上例中，test函数有一个参数类型不确定，但是能确定的时其返回值的类型和参数的类型是相同的，由于类型不确定所以参数和返回值均使用了any，但是很明显这样做是不合适的，首先使用any会关闭TS的类型检查，其次这样设置也不能体现出参数和返回值是相同的类型
```typescript
function test<T>(arg: T): T{
    return arg;
}
```
这里的```<T>```就是泛型，T是我们给这个类型起的名字（不一定非叫T），设置泛型后即可在函数中使用T来表示该类型。所以泛型其实很好理解，就表示某个类型。

那么如何使用上边的函数呢？
方式一（直接使用）：
```typescript
test(10)
```
使用时可以直接传递参数使用，类型会由TS自动推断出来，但有时编译器无法自动推断时还需要使用下面的方式
-方式二（指定类型）：

 ```typescript
test<number>(10)
```

### 多个泛型 
```typescript
function test<T, K>(a: T, b: K): K{
    return b;
}

test<number, string>(10, "hello");
```

### 泛型的范围进行约束
使用T extends MyInter表示泛型T必须是MyInter的子类，不一定非要使用接口类和抽象类同样适用。
```typescript
interface MyInter{
    length: number;
}

function test<T extends MyInter>(arg: T): number{
    return arg.length;
}
```


### 泛型类

 ```typescript
class MyClass<T>{
    prop: T;

    constructor(prop: T){
        this.prop = prop;
    }
}
```


