---
title: Generics
toc: true
date: 2021-06-29 22:43:56
tags:
categories:
---
# 概述
Generics自Java5才添加
之前向list添加元素, list都是以object来保存 ,所以可以添加任意类型. 因此在取回数据时, 也需要强转.
```java
List list = new ArrayList();
list.add(new Integer(1));
list.add("String");
Integer integer = (Integer) list.get(0);
String string   = (String) list.get(1);
```
但是, 大部分时间, 使用list都是存储同一种元素, 所以Generic可以帮我们:
- 保持list中的元素类型一致
- 在取元素时不需要强转
```java
List<String> strings = new ArrayList<String>();//java7后可以简写为new ArrayList<>()
strings.add("String");
String aString = strings.get(0);
```


# 可以使用Generic的object

- List
`List<String> strings = new ArrayList<String>()`
- Set
`Set<String> set = new HashSet<>()`
- Map
`Map<Integer, String> set = new HashMap<>`
- Class & Method
```java
public class A<T> {
    private T a;
    public T getA() {
        return a;
    }
    public void setA(T a) {
        this.a = a;
    }
    public static void main(String[] args) {
        A<String> a = new A<>();
        a.setA("test");
        System.out.println(a.getA());
    }
}
```
- Method
第一个`<T>` 是给method添加generit
第二个`T` 是返回值类型
```java
public static <T> T addAndReturn(T element, Collection<T> collection){
    collection.add(element);
    return element;
}
public static void main(String[] args) {
    String stringElement = "stringElement";
    List<String> stringList = new ArrayList<String>();
    String theElement1 = addAndReturn(stringElement, stringList);

    Integer integerElement = new Integer(123);
    List<Integer> integerList = new ArrayList<Integer>();
    Integer theElement2 = addAndReturn(integerElement, integerList);
}
```

Class objects也可以作为Generic parameter传递

```java
public static <T> T getInstance(Class<T> theClass)
    throws IllegalAccessException, InstantiationException {
    return theClass.newInstance();
}

String string   = getInstance(String.class);
MyClass myClass = getInstance(MyClass.class);
```

# bound
声明类型形参`<T>`后,这时编译器并不知道`T`是什么类型,假设我们需要调用某些类的方法时,编译器会报错.
```java
class Test<T>{
    void fn(T t){
        System.out.println(t.charAt(0 )); //假设我们指定T是String或String的子类,我们想调用其charAt方法,这时编译器会报错
    }
}
````
这时我们就需要给`T`一个上届`<T extends String>`,表示`T`是`String`或`String`的子类,这时编译就可以通过了

```java
package com;

class Test<T extends String>{
    void fn(T t){
        System.out.println(t.charAt(0 ));
    }
}

public class App2 {
    public static void main(String[] args) {
        Test<String> test = new Test();
        test.fn("123");

    }
}
```

边界声明有两个用途
1.获得边界类型的方法
2.只有该边界类型或其子类才能被实例化,相当于做了限制
```java
 Test<Integer> test = new Test(); //error
```

注意:

- 没有下界,`<T super String>`
- 可以使用类型形参作为边界
```java
class Line <T> {
    private T fst, snd;
    public < X extends T , Y extends T> Line(X arg1, Y arg2) {
        fst = arg1;
        snd = arg2;
    }
}
```



# Wildcard
```java
public class A { }
public class B extends A { }
```

```java
List<?>           listUknown = new ArrayList<A>();
List<? extends A> listUknown = new ArrayList<A>();
List<? super   A> listUknown = new ArrayList<A>();
```

## List<?>
`List<?>` 意思是element类型不确定, 可以是`List<A>`, `List<B>`, `List<String>`. 由于不确定element的类型, 所以不能执行insert, 只能进行read.而且在read时, element都是当成object来处理.


```java
public void processElements(List<?> elements){
   for(Object o : elements){
      System.out.println(o);
   }
}
List<A> listA = new ArrayList<A>();
processElements(listA);
List<B> listB = new ArrayList<B>();
processElements(listB);
```
`processElements`方法可以处理`listA`和`listB`

## List<? extends A>
`<? extend Fruit>`, 表示所有extend A的subclass，但是具体是哪个subclass，无法确定，所以调用add的时候，要add什么类型，谁也不知道。但是get的时候，不管是什么subclass，不管追溯多少辈，肯定有个superClass是Class A，所以，我都可以用最大的superClass Class A接着，也就是把所有的子类向上转型为Class A。




```java
public void processElements(List<? extends A> elements){
   for(A a : elements){
      System.out.println(a.getValue());
   }
}
List<A> listA = new ArrayList<A>();
processElements(listA);
List<B> listB = new ArrayList<B>();
processElements(listB);
```
但是`processElements`还是不能insert元素, 因为你不知道具体是class B, 还是其他的subClass.

## List<? super A>
`<? super A>`, 表示A的所有superClass，包括A，一直可以追溯到老祖宗Object 。那么当我add的时候，我不能add A的superClass，因为不能确定List里面存放的到底是哪个superClass。但是我可以add A及其子类。因为不管我的子类是什么类型，它都可以向上转型为A及其所有的superClass甚至转型为Object 。但是当我get的时候，A的superClass这么多，我用什么接着呢，除了Object，其他的都接不住。

`List<? super A>`, 意思是元素时Class A, 或者superClass A.当知道了List中的元素是Class A或者superClass A, 所以在插入的Class A或者subClass B时时安全的.
```java
public static void insertElements(List<? super A> list){
    list.add(new A());
    list.add(new B());
}
```

参考:
https://blog.csdn.net/yangguanghaozi/article/details/54632477
http://tutorials.jenkov.com/java-generics/wildcards.html
http://www.angelikalanger.com/GenericsFAQ/FAQSections/TypeParameters.html#FAQ107