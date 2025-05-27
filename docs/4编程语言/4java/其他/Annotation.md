# FileSystem


## java内置的annotations
java有三个内置的annotations, 用来给compiler传递指令:
- `@Deprecated`
用来声明class, method或field将要废弃, 如果继续使用compiler会给出warning
- @Override
用在subclass中的method上, 声明override superclass的method.如果不能匹配上, 则compiler会给出error
- @SuppressWarnings
告诉compiler 抑制warning.

## 自定义annotations

```java
package com;

import java.lang.annotation.*;
@Retention(RetentionPolicy.RUNTIME) //运行时可用
@Target(ElementType.TYPE)  //在类上使用
@Inherited  //如果一个类用上了@Inherited修饰的注解，那么其子类也会继承这个注解
@Documented //javadoc显示MyAnnotation
public @interface MyAnnotation {
    public String name();
    public int age() default 18;  //默认值
}
```

```java
package com;

import java.lang.annotation.Annotation;
@MyAnnotation(name="name")
public class demo1 {
    public static void main(String[] args) {
        Class aClass = demo1.class;
        Annotation[] annotations = aClass.getAnnotations();
        for(Annotation annotation : annotations){
            if(annotation instanceof MyAnnotation){
                MyAnnotation myAnnotation = (MyAnnotation) annotation;
                System.out.println("name: " + myAnnotation.name());
                System.out.println("age: " + myAnnotation.age());
            }
        }
    }
}
```

## Annotation Elements
- 可以使用`default`关键字, 添加默认值
- 如果只有element, 则可使用`value`方便替换自定的element名称, 或者直接省略
```java
@MyAnnotation(value="name")
@InsertNew("yes")
```

## Annotation Placement
Annotations可以用在classes, interfaces, methods, method parameters, fields and local variables.

## 自定义Annotation的Annotation
- `RetentionPolicy`
    - RetentionPolicy.SOURCE：注解只保留在源文件，当Java文件编译成class文件的时候，注解被遗弃
    - RetentionPolicy.CLASS：(compile time)注解被保留到class文件，但jvm加载class文件时候被遗弃，这是默认的生命周期
    - RetentionPolicy.RUNTIME：(run time)注解不仅被保存到class文件中，jvm加载class文件之后，仍然存在

- `ElementType`
    - ElementType.ANNOTATION_TYPE
    - ElementType.CONSTRUCTOR
    - ElementType.FIELD
    - ElementType.LOCAL_VARIABLE
    - ElementType.METHOD
    - ElementType.PACKAGE
    - ElementType.PARAMETER
    - ElementType.TYPE
    - ElementType.TYPE_PARAMETER
    - ElementType.TYPE_USE

- `@Inherited`
如果一个类用上了@Inherited修饰的注解，那么其子类也会继承这个注解

- `@Documented`
javadoc显示MyAnnotation



参考:
http://tutorials.jenkov.com/java/annotations.html
https://blog.csdn.net/qq_43390895/article/details/100175330
