# transforms_tutorial


## 安装

1. 添加基本依赖
`jackson-annotations`依赖于`jackson-core`,
`jackson-databind` 依赖于 `jackson-annotations`, 
所以如果引入`jackson-databind`则会自动导入`jackson-annotations`和`jackson-core`.
这里引入三个, 是为了明确的知道用了哪些包.
```xml
<dependency>
  <groupId>com.fasterxml.jackson.core</groupId>
  <artifactId>jackson-core</artifactId>
  <version>2.9.6</version>
</dependency>

<dependency>
  <groupId>com.fasterxml.jackson.core</groupId>
  <artifactId>jackson-annotations</artifactId>
  <version>2.9.6</version>
</dependency>

<dependency>
  <groupId>com.fasterxml.jackson.core</groupId>
  <artifactId>jackson-databind</artifactId>
  <version>2.9.6</version>
</dependency>
```
2. 特殊格式文件支持 `YAML`&`msgpack`&`CBOR`, 为了支持特殊的文件格式, 可以导入:
```xml
<dependency>
    <groupId>com.fasterxml.jackson.dataformat</groupId>
    <artifactId>jackson-dataformat-yaml</artifactId>
    <version>2.9.0</version>
</dependency>
<dependency>
    <groupId>org.msgpack</groupId>
    <artifactId>jackson-dataformat-msgpack</artifactId>
    <version>0.8.16</version>
</dependency>
<dependency>
    <groupId>com.fasterxml.jackson.dataformat</groupId>
    <artifactId>jackson-dataformat-cbor</artifactId>
    <version>2.9.6</version>
</dependency>    
```

## Jackson ObjectMapper
`ObjectMapper`可以
- 从string, stream, file中解析成java对象, 就是反序列化(deserialize).
- 也可以将java对象转换为string, stream, file, 就是序列化(serialize).
之所以叫`ObjectMapper`是因为 it maps JSON into Java Objects (deserialization), or Java Objects into JSON (serialization).

### 读取
#### String中读取
```java
package com;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.IOException;

class Person{
    private String name;
    private int age;

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public int getAge() {return age;}
    public void setAge(int age) {this.age = age;}
}

public class test2 {
    public static void main(String[] args) throws IOException {
        ObjectMapper objectMapper = new ObjectMapper();
        String personJson = "{ \"name\" : \"claroja\", \"age\" : 5 }";
        Person person = objectMapper.readValue(personJson, Person.class);
        System.out.println(person.getName());
        System.out.println(person.getAge());
    }
}
```

jackson默认从对象的`getter`和`setter`方法名中, 去掉`get`和`set`, 然后将剩余的单词首字母小写得出字段名.上面的例子中`personJson`的字段`name`, `age`与`Person.class`中的`get/setName`,`get/setAge`对应.
可以使用`Jackson Annotations`来自定义对应规则


#### 从byte中读取

```java
    ObjectMapper objectMapper = new ObjectMapper();
    String personJson = "{ \"name\" : \"claroja\", \"age\" : 5 }";
    byte[] bytes = carJson.getBytes("UTF-8");
    Person person = objectMapper.readValue(bytes, Person.class);
```

#### 从Reader中读取
```java
    ObjectMapper objectMapper = new ObjectMapper();
    String personJson = "{ \"name\" : \"claroja\", \"age\" : 5 }";
    Reader reader = new StringReader(personJson);
    Person person = objectMapper.readValue(reader, Person.class);
    System.out.println(person.getName());
    System.out.println(person.getAge());
```

#### 从File中读取
```java
    ObjectMapper objectMapper = new ObjectMapper();
    File file = new File("data/person.json");
    Person person = objectMapper.readValue(file, Person.class);
```

#### 从URL中读取
```java
    ObjectMapper objectMapper = new ObjectMapper();
    URL url = new URL("file:data/person.json");
    Person person = objectMapper.readValue(url, Person.class);
```

#### 从InputStream中读取
```java
    ObjectMapper objectMapper = new ObjectMapper();
    InputStream input = new FileInputStream("data/person.json");
    Person person = objectMapper.readValue(input, Person.class);
```

### 读取形式
#### 读取为Array

```java
    ObjectMapper objectMapper = new ObjectMapper();
    String personJsonArray = "[{ \"name\" : \"claroja\", \"age\" : 5 }]";
    Person person = objectMapper.readValue(personJsonArray, Person[].class);
```
#### 读取为List

```java 
    ObjectMapper objectMapper = new ObjectMapper();
    String personJsonArray = "[{ \"name\" : \"claroja\", \"age\" : 5 }]";
    List<Person> personList = objectMapper.readValue(jsonArray, new TypeReference<List<Car>>(){});
```

#### 读取为Map
```java 
    ObjectMapper objectMapper = new ObjectMapper();
    String personJson = "{ \"name\" : \"claroja\", \"age\" : 5 }";
    Map<String, Object> jsonMap = objectMapper.readValue(personJson,new TypeReference<Map<String,Object>>(){});
```


### 写入Json
三个方法:
- writeValue() 写入`FileOutputStream`
- writeValueAsString() 写入为字符串
- writeValueAsBytes() 写入为字节


## Tree Model
### String <=> JsonNode
如果不想将Json反序列化为Java对象,比如有些时候不知道Json的结构, 则可使用jackson的Tree Model.或者说是反序列化为`JsonNode.class`
```java
package com;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.IOException;
public class test4 {
    public static void main(String[] args) throws IOException {
        String PersonJson =
                "{ \"name\" : \"claroja\"," +
                        "  \"item\" : [\"phone\", \"clock\"]," +
                        "  \"other\" : { \"brother\" : \"lei\" } }";
        ObjectMapper objectMapper = new ObjectMapper();
        JsonNode jsonNode = objectMapper.readTree(PersonJson);
        JsonNode name = jsonNode.get("name");
        System.out.println(name.asText());

        JsonNode item = jsonNode.get("item");
        JsonNode it = item.get(0);
        System.out.println(it.asText());

        JsonNode other = jsonNode.get("other");
        JsonNode brother = other.get("brother");
        System.out.println(brother.asText());
    }
}
```

### Java对象<=>JsonNode
```java
JsonNode personJsonNode = objectMapper.valueToTree(person);
Person person = objectMapper.treeToValue(personJsonNode);
```

## 转换yml文件

```java
ObjectMapper objectMapper = new ObjectMapper(new YAMLFactory())
yamlString = objectMapper.writeValueAsString(person);

```

## 时间格式处理
默认Jackson会将`java.util.Date`对象和`Long`类型对应. 
jackson也支持自定义格式.
```java
package com;

import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

class Son{
    private Date Birth;
    public Date getBirth() {
        return Birth;
    }
    public void setBirth(Date birth) {
        Birth = birth;
    }
}

public class test3 {
    public static void main(String[] args) throws IOException {
        Son son = new Son();
        son.setBirth(new Date());
        ObjectMapper objectMapper = new ObjectMapper();
        String output = objectMapper.writeValueAsString(son);
        System.out.println(output);
        
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        objectMapper.setDateFormat(dateFormat);
        String output2 = objectMapper.writeValueAsString(son);
        System.out.println(output2);
    }
}
```

## 异常配置
1. 忽略多余字段
默认情况下Json中可能含有多个字段, 而java对象中没有, 这时就会抛出异常.
但是有些情况, 比如我们从REST服务中解析时, 就会有很多我们用不到的字段, 这时可以通过配置, 来忽略这个异常:
```java
objectMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
```
2. Json字段中为null, 而对应的是Java中的基本类型(primitive), 默认情况下会被忽略(既不赋值), 可以通过配置, 来抛出异常:
```java
objectMapper.configure(DeserializationFeature.FAIL_ON_NULL_FOR_PRIMITIVES, true);
```


参考:
http://tutorials.jenkov.com/java-json/jackson-installation.html
