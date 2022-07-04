---
title: Reflection
toc: true
date: 2021-06-28 21:03:33
tags:
categories:
---
Java Reflection 可以在runtime使用classes, interfaces, fields, methods, 而且是在不知道class, method名称的情况下.

```java
package com;
import java.lang.reflect.Method;
public class Demo {
    public static void main(String[] args) {
        Method[] methods = Demo.class.getMethods();
        for(Method method : methods){
            System.out.println("method = " + method.getName());
        }
    }
}
```

# java class object
[官方文档](https://docs.oracle.com/javase/8/docs/api/java/lang/Class.html)


通过`.class`获得`java.lang.Class` object.所有的types包含primitive types (int, long, float etc.)都有class object.只要知道compile time的class的名称, 就能获得该class的object.
```java
Class myClass = Demo.class;
```

如果在compile time不知道class的名称, 但是在runtime 获得了class name的字符串, 也可以获得该class的object:
```java
Class class = Class.forName(className);
```
参数`className`必须包含package的全路径
如果通过类名找不到类, 则会抛出`ClassNotFoundException`.


- 获得class的名称
    - `String className = Class.getName()` 返回包含package全路径的class名称
    - `String className = Class.getSimpleName()` 仅返回class名称

- 获得class的Modifiers

```java
int modifiers = myClass.getModifiers();
```
`modifiers`使用`int`来代指, 通过`java.lang.reflect.Modifier`来获得具体的信息:
```java
Modifier.isAbstract(int modifiers)
Modifier.isFinal(int modifiers)
Modifier.isInterface(int modifiers)
Modifier.isNative(int modifiers)
Modifier.isPrivate(int modifiers)
Modifier.isProtected(int modifiers)
Modifier.isPublic(int modifiers)
Modifier.isStatic(int modifiers)
Modifier.isStrict(int modifiers)
Modifier.isSynchronized(int modifiers)
Modifier.isTransient(int modifiers)
Modifier.isVolatile(int modifiers)
```

- 获得Package信息

```java
Package package = myClass.getPackage();
```


- 获得Superclass
```java
Class superclass = myClass.getSuperclass();
```

- 获得实现的Interfaces
```java
Class[] interfaces = myClass.getInterfaces();
```
返回的类型是`Class[]`, 既Interfaces也是Class object.

- 获得Constructors



- Fields
`getFields()`方法来获得class的fields
```java
Class myClass = Demo.class;
Field[] fields   = myClass.getFields();
```

- Constructors
```java
Constructor[] constructors = myClass.getConstructors();
```


- Methods
```java
Class myClass = Demo.class;
Method[] methods = myClass.getMethods();
```

- Fields
```java
Field[] method = myClass.getFields();
```
- Annotations
```java
Annotation[] annotations = myClass.getAnnotations();
```


# Constructors
通过reflection, 查看class的constructor和实例化 objects.
```java
Constructor[] constructors = myClass.getConstructors();
```
如果知道准确的constructor的parameter types, 则可获得指定的constructor
```java
Constructor constructor =myClass.getConstructor(new Class[]{String.class});
```
如果找不到, 则会抛出`NoSuchMethodException`异常

- 获得Constructor的Parameters
```java
Class[] parameterTypes = constructor.getParameterTypes();
```
- 实例化Objects
```java
Constructor constructor = MyObject.class.getConstructor(String.class);
MyObject myObject = (MyObject)constructor.newInstance("constructor-arg1");
```
`Constructor.newInstance()`的参数既是constructor function的参数.


# Field
通过reflection, 可以获得fields(member variables), 并且在runtime来`get/set`他们.

## 获得Field object
获得`Field[]`
```java
Field[] fields = myClass.getFields();
```
如果知道Field的名称, 则可获得指定的Field
```java
Field field = myClass.getField("someField");
```
如果找不到, 则会抛出`NoSuchFieldException`

## 获得Field 的名称和类型
- `String fieldName = field.getName()` 获得名称
- `Object fieldType = field.getType()` 获得类型

## get/set Field
```java
Field field = myClass.getField("someField");
MyObject objectInstance = new MyObject();
Object value = field.get(objectInstance);
field.set(objetInstance, value);
```
`get()`方法, 传入指定的`instance`
`set()`方法, 则要传入`instance`和`value`
注意, Field是属于class的, 所以在设置值时, 要指定instance.


# Methods
## 获得`Method[]`
```java
Method[] methods = myClass.getMethods();
```
如果知道method的parameter types, 则可获得指定的method:
```java
Method method =myClass.getMethod("doSomething", new Class[]{String.class});
Method method =myClass.getMethod("doSomething", null);
```
如果匹配不上则会抛出`NoSuchMethodException`

## 获得Method Parameters和Return Types
```java
Class[] parameterTypes = method.getParameterTypes();
Class returnType = method.getReturnType();

```

## 调用Methods
```java
Method method = MyObject.class.getMethod("doSomething", String.class);
Object returnValue = method.invoke(null, "parameter-value1");
```
`invode()`第一个参数是对象, `null`表示没有instance, 既这是一个static method
`


# Getters and Setters
通过扫描所有method, 来获得getter和setter
- getter
以`get`开头, 没有parameters, 并且返回一个值
- setter
以`set`开头, 有一个parameter.

```java
public static void printGettersSetters(Class myClass){
  Method[] methods = myClass.getMethods();

  for(Method method : methods){
    if(isGetter(method)) System.out.println("getter: " + method);
    if(isSetter(method)) System.out.println("setter: " + method);
  }
}

public static boolean isGetter(Method method){
  if(!method.getName().startsWith("get"))      return false;
  if(method.getParameterTypes().length != 0)   return false;  
  if(void.class.equals(method.getReturnType()) return false;
  return true;
}

public static boolean isSetter(Method method){
  if(!method.getName().startsWith("set")) return false;
  if(method.getParameterTypes().length != 1) return false;
  return true;
}
```

# Private Fields and Methods

## Private Fields
`Class.getField(String name)`和`Class.getFields()`是获得public field, private field要通过`Class.getDeclaredField(String name)`和`Class.getDeclaredFields()`来获得.
```java
package com;
import java.lang.reflect.Field;
public class Foo {
    private String name = null;
    public Foo(String name) {
        this.name = name;
    }

    public static void main(String[] args) throws NoSuchFieldException, IllegalAccessException {
        Foo foo = new Foo("Private Value");
        Field privateStringField = Foo.class.getDeclaredField("name");
        privateStringField.setAccessible(true);
        String fieldValue = (String) privateStringField.get(foo);
        System.out.println("fieldValue = " + fieldValue);
    }
}
```

`Foo.class.getDeclaredField("name")`返回 private field, 仅返回该class的fields, 不会返回任何superclasses的field
`privateStringField.setAccessible(true)`关闭了`access checks`(仅在reflection生效), 所以可以更改private field.


## Private Methods
通过`Class.getDeclaredMethod(String name, Class[] parameterTypes)`或`Class.getDeclaredMethods()`获得private method.
` Class.getMethod(String name, Class[] parameterTypes)`或`Class.getMethods()`只会返回public methods.

```java
package com;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

public class bar {
    private String name = null;
    public bar(String name) {
        this.name = name;
    }
    private String getName(){
        return this.name;
    }

    public static void main(String[] args) throws NoSuchMethodException, InvocationTargetException, IllegalAccessException {
        bar privateObject = new bar("Private Value");
        Method privateStringMethod = bar.class.getDeclaredMethod("getName", null);
        privateStringMethod.setAccessible(true);
        String returnValue = (String) privateStringMethod.invoke(privateObject, null);
        System.out.println(returnValue);
    }
}
```
`bar.class.getDeclaredMethod("getName", null)`返回 private method, 仅返回该class的methods, 不会返回任何superclasses的method
`privateStringMethod.setAccessible(true)`关闭了`access checks`(仅在reflection生效), 所以可以更改private method.

#  Annotations
定义一个Annotations
```java
package com;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.TYPE)
public @interface MyAnnotation {
    public String name();
    public String value();
}

```
## 获得Class Annotations
1. 获得所有annotation
```java
package com;
import java.lang.annotation.Annotation;
@MyAnnotation(name="name",  value = "value")
public class Demo1 {
    public static void main(String[] args) {
        Class myClass = Demo1.class;
        Annotation[] annotations = myClass.getAnnotations();
        for(Annotation annotation : annotations){
            if(annotation instanceof MyAnnotation){
                MyAnnotation myAnnotation = (MyAnnotation) annotation;
                System.out.println("name: " + myAnnotation.name());
                System.out.println("value: " + myAnnotation.value());
            }
        }
    }
}

```
2. 获得指定的annotation

```java
Class myClass = TheClass.class;
Annotation annotation = myClass.getAnnotation(MyAnnotation.class);

if(annotation instanceof MyAnnotation){
    MyAnnotation myAnnotation = (MyAnnotation) annotation;
    System.out.println("name: " + myAnnotation.name());
    System.out.println("value: " + myAnnotation.value());
}
```

## 获得 Method Annotations

```java
public class TheClass {
  @MyAnnotation(name="name",  value = "value")
  public void test(){}
}
```
1. 获得所有
```java
Method method = ...
Annotation[] annotations = method.getDeclaredAnnotations();
```
2. 获得指定annotation
```java
Method method = ...
Annotation annotation = method.getAnnotation(MyAnnotation.class);
```


## 获得 Parameter Annotations
```java
public class TheClass {
  public static void test(
        @MyAnnotation(name="Name", value="Value") String parameter){
  }
}
```
获得注解
```java
Method method = ... 
Annotation[][] parameterAnnotations = method.getParameterAnnotations();
Class[] parameterTypes = method.getParameterTypes();
```

## 获得 Field Annotations

```java
public class TheClass {
  @MyAnnotation(name="name",  value = "value")
  public String myField = null;
}
```

1. 获得所有annotation
```java
Field field = ... 
Annotation[] annotations = field.getDeclaredAnnotations();
```

2. 获得指定annotation
```java
Field field = ... 
Annotation annotation = field.getAnnotation(MyAnnotation.class);
```

# Generics
`Java Generics 在compile time被擦除, 所以在runtime不能获得其信息`这句话并不准确.

```java
List<String> myList = new ArrayList<String>();
```
当通过reflection在runtime查看`java.util.List`, 我们无法确定其Generic type. 但是
可以通过相关联的(fields, parameters, return types)声明, 来确定Generic type.

## Generic Method Return Types

```java
package com;

import java.lang.reflect.Method;
import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
import java.util.Arrays;
import java.util.List;

public class Demo2 {
    protected List<String> stringList = Arrays.asList("1","2","3");
    public List<String> getStringList(){
        return this.stringList;
    }
    public static void main(String[] args) throws NoSuchMethodException {
        Method method = Demo2.class.getMethod("getStringList", null);
        Type returnType = method.getGenericReturnType();
        if(returnType instanceof ParameterizedType){
            ParameterizedType type = (ParameterizedType) returnType;
            Type[] typeArguments = type.getActualTypeArguments();
            for(Type typeArgument : typeArguments){
                Class typeArgClass = (Class) typeArgument;
                System.out.println(typeArgClass);
            }
        }
    }
}
```
`getStringList()` 返回 `List<String>`而不仅仅是`List`.


## Generic Method Parameter Types

```java
package com;

import java.lang.reflect.Method;
import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
import java.util.Arrays;
import java.util.List;

public class Demo3 {
    protected List<String> stringList = Arrays.asList("1","2","3");
    public void setStringList(List<String> list){
        this.stringList = list;
    }
    public static void main(String[] args) throws NoSuchMethodException {
        Method method = Demo3.class.getMethod("setStringList", List.class);
        Type[] genericParameterTypes = method.getGenericParameterTypes();
        for(Type genericParameterType : genericParameterTypes){
            if(genericParameterType instanceof ParameterizedType){
                ParameterizedType aType = (ParameterizedType) genericParameterType;
                Type[] parameterArgTypes = aType.getActualTypeArguments();
                for(Type parameterArgType : parameterArgTypes){
                    Class parameterArgClass = (Class) parameterArgType;
                    System.out.println(parameterArgClass);
                }
            }
        }
    }
}

```

## Generic Field Types

```java
package com;

import java.lang.reflect.Field;
import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
import java.util.Arrays;
import java.util.List;

public class Demo4 {
    protected List<String> stringList = Arrays.asList("1","2","3");
    public static void main(String[] args) throws NoSuchMethodException, NoSuchFieldException {
        Field field = Demo4.class.getField("stringList");

        Type genericFieldType = field.getGenericType();
        if(genericFieldType instanceof ParameterizedType){
            ParameterizedType aType = (ParameterizedType) genericFieldType;
            Type[] fieldArgTypes = aType.getActualTypeArguments();
            for(Type fieldArgType : fieldArgTypes){
                Class fieldArgClass = (Class) fieldArgType;
                System.out.println(fieldArgClass);
            }
        }
    }
}
```

# Arrays

## 创建Arrays

```java
int[] intArray = (int[]) Array.newInstance(int.class, 3);
```
第一个参数`int.class`指明array中element的type
第二个参数`3`指明array的size

## 操作Arrays
```java
int[] intArray = (int[]) Array.newInstance(int.class, 3);

Array.set(intArray, 0, 000);
Array.set(intArray, 1, 111);
Array.set(intArray, 2, 222);
```

## 获得Array Class
- 通过类名引用直接获得
```java
Class intArray = Class.forName("[I");
```

- 通过`forName`获得
    - 获得基本类型Array
```java
Class intArray = Class.forName("[I");
```
获得int类型Array, `[`表示数组 `I`表示`Int`, 其他基本类型也是如此
    - 获得任意类型Array
```java
Class stringArrayClass = Class.forName("[Ljava.lang.String;");
```
注意`[L`在最左侧,`;`在最右侧.

## 获得Array Element Class
```java
String[] strings = new String[3];
Class stringArrayClass = strings.getClass();
Class stringArrayComponentType = stringArrayClass.getComponentType();
System.out.println(stringArrayComponentType);
```

# Dynamic Proxies


# Dynamic Class Loading and Reloading



参考:
http://tutorials.jenkov.com/java-reflection/index.html
