# nn_loss


## Iterable

```java
public interface Iterable<T> {
  Iterator<T>    iterator();
  Spliterator<T> spliterator();
  void           forEach(Consumer<? super T> action);
}
```

`collection` implement `Iterable interface`意味着该`collection`可以进行iterated.
可通过
- for-each Loop
- Iterator
- forEach() Method
三种方法来遍历.

### for-each Loop
```java
List<String> list = new ArrayList<>();
list.add("one");
list.add("two");
list.add("three");
for( String element : list ){
    System.out.println( element );
}
```

### Iterator
```java
Iterator iterator = list.iterator();
while(iterator.hasNext()) {
    Object nextObject = iterator.next();
}
```

### forEach() Method
```java
List<String> list = new ArrayList><();

list.add("one");
list.add("two");
list.add("three");

list.forEach( (element) -> {
    System.out.println( element );
});
```
## Iterable Performance
`for-each loop`要比`standard for-loop`慢, 因为每一次`iteration`都会call`List iterator()`.


## Iterator
Method|Description
hasNext()|如果还有值, 返回true
next()|返回下一个element
remove()|
forEachRemaining()|


### 获得Iterator
`interface Collection`有`iterator()`方法, 可以获得Iterator. 所以实现了`interface Collection`的`List`, `Set`, `Map`, `Queue`, `Deque`也可以通过该方法获得.

```java
List<String> list = new ArrayList<>();
list.add("one");
Iterator<String> iterator = list.iterator();
```

### 遍历Iterator
```java
Iterator iterator = list.iterator();
while(iterator.hasNext()) {
    Object nextObject = iterator.next();
}
```
使用`while`来循环, `hasNext()`判断是否还有值, `next()`输出值.

### 删除元素

```java
List<String> list = new ArrayList<>();
list.add("one");
list.add("two");
list.add("three");
Iterator<String> iterator = list.iterator();
while(iterator.hasNext()) {
    String value = iterator.next();
    if(value.equals("two")){
        iterator.remove();
    }
}
System.out.println(list); //[one, three]
```

### forEachRemaining
```java
List<String> list = new ArrayList<>();
list.add("one");
list.add("two");
list.add("three");
Iterator<String> iterator = list.iterator();
iterator.forEachRemaining(x->x.toUpperCase());
System.out.println(list);
```
注意, 并没有改变`list`

### ListIterator
`ListIterator` extends `Iterator`, 可以进行双向的iterate
```java
List<String> list = new ArrayList<>();
list.add("one");
list.add("two");
list.add("three");
ListIterator<String> listIterator = list.listIterator();
while(listIterator.hasNext()) {
    System.out.println(listIterator.next());
}
while(listIterator.hasPrevious()) {
    System.out.println(listIterator.previous());
}
```

## collection
java没有对`Collection interface`的`implementation`, 所以要使用`subtypes`(List, Set, SortedSet, NavigableSet, Queue, Deque).
```java
Collection collection = new ArrayList();
```
`Collection`定义了一些公有的方法
- add()
```java
String anElement  = "an element";
Collection collectionSet = new HashSet();
collectionSet.add(anElement);
System.out.println(collectionSet.add(anElement));
Collection collectionList = new ArrayList();
collectionList.add(anElement);
System.out.println(collectionList.add(anElement));
```
这里`add()`由于多态, 其实调用的是`subtype`的`add()`.
如果添加成功, 则返回True, 失败返回False
`HashSet`重复元素不能添加, 所以返回False
`ArrayList`可以添加重复元素, 所以返回True

- addAll()
```java
Set  aSet  = ... 
Collection collection = new HashSet();
collection.addAll(aSet);    //returns boolean too, but ignored here
```
`addAll()`添加collection参数的所有elements

- removeAll()
`addAll()`的反向操作, 如果没有找到对应的element, 则会ignore
```java
Collection aCollection = 
collection.removeAll(aCollection);
```

- retainAll()
保留parameter collection的elements, 删除没有匹配的element.
```java
Collection A = new ArrayList();
Collection B = new ArrayList();
A.add("A");
B.add("1");
Collection target = new HashSet();
target.addAll(A);     //target contains [A,]
target.addAll(B);     //target contains [A,1]
target.retainAll(B);  //target contains [1]
```

- contains() & containsAll()

```java
Collection collection  = new HashSet();
boolean containsOne = collection.contains("element");//如果包含, 返回true
boolean containsAll = collection.containsAll(elements);//如果全包含, 返回true
```

- size()
```java
int numberOfElements = collection.size();//返回元素的个数
```


## Generic
```java
Collection<String> stringCollection = new HashSet<String>();//element只能是String类型
```


```java
Iterator<String> iterator = stringCollection.iterator();
while(iterator.hasNext()) {
    String element = iterator.next(); // 不必强转, 因为compiler知道这是String
    //do something with element.
}
```
## Collections
`java.util.Collections`包含了实用的操作`collection`的方法

- addAll()
可以给`List`,`Set`添加元素
```java
Collections.addAll(list, "element1", "element2", "element3");
```


- binarySearch()
binary search algorithm(二分查找法), `List`必须先升序排序, 返回下标

```java
List<Integer> list = new ArrayList<>();
list.add(1);
list.add(3);
list.add(4);
Collections.sort(list);
System.out.println(Collections.binarySearch(list, 3));
```


- copy()
```java
List<String> source = new ArrayList<>();
Collections.addAll(source, "1", "2", "3");
List<String> destination = new ArrayList<>();
Collections.copy(destination, source);
````
- reverse()
反转
```java
List<String> list = new ArrayList<>();
list.add("one");
list.add("two");
list.add("three");
Collections.reverse(list);
```
- shuffle()
打散element原有的排序
```java
List<String> list = new ArrayList<>();
list.add("one");
list.add("two");
list.add("three");
Collections.shuffle(list);
```

- sort()
```java
List<Integer> list = new ArrayList<>();
list.add(3);
list.add(1);
list.add(2);
Collections.sort(list);
System.out.println(list);//[1, 2, 3]
```

- min() & max()

```java
List<Integer> list = new ArrayList<>();
list.add(3);
list.add(1);
list.add(2);
System.out.println(Collections.min(list));// 1
System.out.println(Collections.max(list));// 3
```

- replaceAll()
```java
List<String> list = new ArrayList();
list.add("A");
list.add("B");
list.add("A");
Collections.replaceAll(list, "A", "C");
System.out.println(list); // [C, B, C]
```



## List
如果List没有typed(Generic), 则可以混合放入任意的object, 但是实践中不常用.
List允许不同element, set不允许
List是有序的, set无序
List是interface, 所以我们需要他的concrete implementation
- java.util.ArrayList
- java.util.LinkedList
- java.util.Vector
- java.util.Stack
另外在并发场景下,`java.util.concurrent`也提供了针对并发场景的安全实现.

### 创建list
```java
List<Object> listA = new ArrayList<Object>();
List<Object> listB = new LinkedList<Object>();
List<Object> listC = new Vector<Object>();
List<Object> listD = new Stack<Object>();
```
建议使用Generic,两点好处:
- 避免插入错误的types, 如果想插如多种types, 可以使用Generic的通配符
- 不使用Generic, 在取出element时需要进行cast操作, 而有Generic则不需要

### list操作

- add() & addAll()
```java
listA.add("element");
list.add(0, "element");//指定index,插入
listDest.addAll(listSource);//插入另一个列表的所有elements
```
- get()
```java
listA.get(0);
```

- indexOf()&lastIndexOf()
```java
list.indexOf(element);
list.lastIndexOf(element)
```
- contains()
```java
list.contains("element");
```

- remove() & clear()
```java
list.remove(element)
list.remove(index)
list.clear() //删除所有
```

- retainAll()
保留otherList的element
```java
list.retainAll(otherList);
```

- size()
```java
list.size()
```

- subList()
```java
list.subList(startIndex, endIndex)
```

### List Set Array相互转换
- List <=> Set
```java
List<String> list = new ArrayList<>();
list.add("1");
list.add("2");
list.add("3");
list.add("3");
Set<String> set = new HashSet<>();
set.addAll(list);//3出现两次, 仅保留一个
```

- list <=> Array
```java
List<String> list = new ArrayList<>();
list.add("1");
list.add("2");
list.add("3");
list.add("3");
Object[] objects = list.toArray();
String[] objects1 = list.toArray(new String[0]);//虽然new String[0], 但bin不影响最后的长度.
```

```java
String[] values = new String[]{ "one", "two", "three" };
List<String> list = (List<String>) Arrays.asList(values);
```


### 排序
- 如果element implements Comparable
如果List的element implement java.lang.Comparable interface, 那么这些element可以互相比较, 这时:
```java
List<String> list = new ArrayList<>();
list.add("c");
list.add("b");
list.add("a");
Collections.sort(list);
```
String class implements  the Comparable interface, 所以可以使用Collections sort()

- 如果element 没有implements Comparable
则需要implements Comparator, 并传递给Collections.sort().
```java
public class Person {
    public int age;
    public Person(int age){
        this.age = age;
    }
    public static void main(String[] args) {
        List<Person> list = new ArrayList<>();
        list.add(new Person(13));
        list.add(new Person(11));
        Comparator<Person> PersonComparator = new Comparator<Person>() {
            @Override
            public int compare(Person Person1, Person Person2) {
                return Person1.age-Person2.age;
            }
        };
        Collections.sort(list, PersonComparator);
    }
}
```

### iterate List
- standard loop
- for-each loop
- Iterator
- Stream API



## set
如果set没有typed(Generic), 则可以混合放入任意的object, 但是实践中不常用.
- set不允许相同的element, List允许
- set无序, List是有序的

set接口的具体实现有:
- java.util.HashSet
当向HashSet结合中存入一个元素时，HashSet会调用该对象的hashCode()方法来得到该对象的hashCode值，然后根据 hashCode值来决定该对象在HashSet中存储位置。不能决定顺序.
HashSet集合判断两个元素相等的标准是两个对象通过equals方法比较相等，并且两个对象的hashCode()方法返回值相等
- java.util.LinkedHashSet
根据元素的hashCode值来决定元素的存储位置，但是它同时使用链表维护元素的次序,以插入顺序保存。
LinkedHashSet在迭代访问Set中的全部元素时，性能比HashSet好，但是插入时性能稍微逊色于HashSet。
- java.util.TreeSet
可以排序, 支持comparable和comparator两个接口
- java.util.EnumSet


### 创建set
```java
Set<Object> setA = new HashSet();
Set<Object> setB = new LinkedHashSet();
Set<Object> setC = new TreeSet();
```
建议使用Generic,两点好处:
- 避免插入错误的types, 如果想插如多种types, 可以使用Generic的通配符
- 不使用Generic, 在取出element时需要进行cast操作, 而有Generic则不需要

### set操作
- add() & addAll()
```java
set.add("element")
set2.addAll(set1) //添加另一个set的所有element
```

- remove() & clear()
```java
set.remove("element")
set.removeAll(set2) // 删除另一个set所有元素, 求差集
set.clear() // 删除所有
```

- retainAll()
```java
set.retainAll(set2) //保留另一个set的元素
```

- size()
```java
set.size()
```

- contains()
```java
set.contains("element")
```

### Set List转换

```java
Set<String> set = new HashSet<>();
set.add("e1");
List<String> list = new ArrayList<>();
list.addAll(set);
```


### Iterate Set
- Iterator

```java
Iterator<String> iterator = set.iterator();
while(iterator.hasNext(){
  String element = iterator.next();
}
```
- For-Each Loop
```java
for(Object object : set) {
    String element = (String) object;
}
```

- Stream API

```java
Stream<String> stream = set.stream()
stream.forEach((element) -> { System.out.println(element); });
```

### 子接口
#### SortedSet
concrete implement主要是tree set.


##### 创建SortedSet
自然排序, 根据element implement的Comparable interface进行排序
```java
SortedSet sortedSet = new TreeSet();
```
人工排序, 在element没有implement Comparable时, 通过传入`Comparator implement`进行排序
```java
Comparator comparator = new MyComparatorImpl();
SortedSet sortedSet = new TreeSet(comparator);
```

##### Ascending vs. Descending
默认的`iterator()`是Ascending遍历, 可以调用`descendingIterator()`来Descending遍历.
```java
Iterator iterator = treeSet.descendingIterator();
while(iterator.hasNext()) {
    String element = iterator.next();
    System.out.println(element);
}
```

##### 操作
- first() & last()
由于排序, 所以可以获得第一个和末尾element.
```java
sortedSet.first()
sortedSet.last()
```

- headSet() & tailSet() & subSet()
获得parameter element之前(headSet)或之后(tailSet)或中间(subSet)Set

```java
SortedSet sortedSet = new TreeSet();
sortedSet.add("a");
sortedSet.add("b");
sortedSet.add("c");
sortedSet.add("d")
SortedSet headSet = sortedSet.headSet("c");
SortedSet tailSet = sortedSet.tailSet("c");
SortedSet subSet = sortedSet.subSet("b","c");
```

#### NavigableSet
SortedSet的subType, concrete implement也是TreeSet.
- ceiling() 返回parameter element上取整的元素
- floor() 返回parameter element下取整的元素
- higher() 返回比parameter element大的最小的元素
- lower() 返回比parameter element小的最大的元素
- pollFirst() 返回并移除第一个元素
- pollLast() 返回并移除最后一个元素


## Map
interface Map的concrete implementation:
- java.util.HashMap 不保证顺序
- java.util.TreeMap 可以保证key或value的顺序

```java
Map<String, Object> mapA = new HashMap();
Map<String, Object> mapB = new TreeMap();
```

建议使用Generic,两点好处:
- 避免插入错误的types, 如果想插如多种types, 可以使用Generic的通配符
- 不使用Generic, 在取出element时需要进行cast操作, 而有Generic则不需要

### map操作
- put() & putAll()
仅Java objects可以作为keys和values, 当使用primitive values(int, long)时, 会auto-boxing.
```java
Map<String, String> map = new HashMap<>();
map.put("key1", "element1");
map.putAll(map2); //添加另一个map的所有key和value
```

- get() & getOrDefault
```java
map.get("key1")
getOrDefault("E", "default") // 如果找不到, 返回default
```

- containsKey() & containsValue
```java
 map.containsKey("key")
 containsValue("value")
```

- remove() & clear()
```java
map.remove("key1")
map.clear()
```

- replace()
如果有则替换, 如果没有则不做操作
```java
map.replace("key", "val2")
```

- size()
```java
map.size()
```

### Iterate Keys
- key Iterator
```java
Map<String, String> map = new HashMap<>();
Iterator<String> iterator = map.keySet().iterator();
while(iterator.hasNext(){
  String key   = iterator.next();
  String value = map.get(key);
}
```
- for-each loop
```java
Map<String, String> map = new HashMap<>();
for(String key : map.keySet()) {
    String value = map.get(key);
}
```
- java Stream
```java
Map<String, String> map = new HashMap<>();
Stream<String> stream = map.keySet().stream();
stream.forEach((value) -> {
    System.out.println(value);
});    
```


### Iterate the Values
- Value Iterator
```java
Map<String, String> map = new HashMap<>();
Iterator<String> iterator = map.values().iterator();
while(iterator.hasNext()) {
    String nextValue  iterator.next();
}
```

- For-Each Loop
```java
Map<String, String> map = new HashMap<>();

for(String value : map.values()){
    System.out.println(value);
}
```

- Java Stream
```java
Map<String, String> map = new HashMap<>();
Stream<String> stream = map.values().stream();
stream.forEach((value) -> {
    System.out.println(value);
});
```


### Iterate Entries
- Entry Iterator
```java
Set<Map.Entry<String, String>> entries = map.entrySet();
Iterator<Map.Entry<String, String>> iterator =
    entries.iterator();
while(iterator.hasNext()) {
    Map.Entry<String, String> entry = iterator.next();
    String key   = entry.getKey();
    String value = entry.getValue();
}
```
- For-Each Loop
```java
for(Map.Entry<String, String> entry : map.entrySet()){
    String key = entry.getKey();
    String value = entry.getValue();
}
```


### Functional Operations
- compute()
- computeIfAbsent()
- computeIfPresent()
- merge()


### subtype interface

#### SortedMap
concrete implement 是TreeMap

按key自然排序
```java
SortedMap sortedMap = new TreeMap();
```

按key手工排序
```java
Comparator comparator = new MyComparatorImpl();
SortedMap sortedMap = new TreeMap(comparator);
```

##### iterate
```java
sortedMap.keySet().iterator() // Ascending
sortedMap.descendingKeySet().iterator() //Descending
```

##### 操作

- sortedMap.firstKey()
- sortedMap.lastKey()
- sortedMap.headMap()
- sortedMap.tailMap()
- sortedMap.subMap()


#### NavigableMap

是SortedMap interface的sub-interface, concrete implement只有TreeMap.

- ceilingKey()
- floorKey()
- higherKey()
- lowerKey()
- ceilingEntry()
- floorEntry()
- higherEntry()
- lowerEntry()
- pollFirstEntry()
- pollLastEntry()


## Properties
`java.util.Properties`类似于Map, 不过key和value都是String.可以方便在disk上读写, 经常作为APP的configration.

### 基本操作
```java
Properties properties = new Properties();
properties.setProperty("key", "value");
String email = properties.getProperty("key");//第二个参数可以填写default value
properties.remove("key");

Iterator keyIterator = properties.keySet().iterator();
while(keyIterator.hasNext()){
    String key   = (String) keyIterator.next();
    String value = properties.getProperty(key);
    System.out.println(key + " = " + value );
}
```

### 文件读写
`store()`方法保存的是.properties格式, 对应`load()`方法
`storeToXML`方法保存的是.xml格式, 对应`loadFromXML()`方法
1. 保存到disk
在disk上文件格式是`key=value`
```java
try(FileWriter output = new FileWriter("data/props.properties", Charset.forName("UTF-8"))){
    properties.store(output);
} catch (IOException e) {
    e.printStackTrace();
}
```
2. 读取到mem
```java
try(FileReader fileReader = new FileReader("data/props.properties", Charset.forName("UTF-8"))){
    properties.load(fileReader);
} catch (IOException e) {
    e.printStackTrace();
}
```

### 从Classpath中加载
```java
InputStream inputStream =
     Example.class.getResourceAsStream("/myProperties.properties");
Properties fromClasspath = new Properties();
try {
    fromClasspath.load(inputStream);
} catch (IOException e) {
    e.printStackTrace();
}

```

### System Properties
JVM会维护一些系统的参数
```java
Properties systemProperties = System.getProperties();
```

## Queue
First In First Out (FIFO)

Queue的concrete implementation:
- java.util.LinkedList 
- java.util.PriorityQueue 可以进行排序

```java
Queue<MyObject> queue = new LinkedList<MyObject>();
```
建议使用Generic,两点好处:
- 避免插入错误的types, 如果想插如多种types, 可以使用Generic的通配符
- 不使用Generic, 在取出element时需要进行cast操作, 而有Generic则不需要

### 操作

-  offer() & add()
二者都会在Queue尾部添加元素,区别是当Queue满时:
offer()返回false
add()则会throws exception

- poll() & remove()
二者都会移除第一个元素, 区别是当Queue为空时:
poll()会返回null
remove()则会throws exception

- peek() & element()
二者都会返回(非移除)第一个元素, 区别是当Queue为空时:
peek()会返回null
element()会throws exception

- clear()
清空queue

- size()
返回元素的多少

- contains()
是否包含元素

### 遍历queue
- Iterator
```java
Iterator<String> iterator = queue.iterator();
while(iterator.hasNext(){
  String element = iterator.next();
}
```

- for-loop
```java
for(String element : queue) {
    //do something with each element
}
```

### 其他实现Deque
Double Ended Queue, 可以在queue的两端进行添加和删除元素.(The word Deque is pronounced "deck")
Deque的具体实现有concrete implementation:
- java.util.LinkedList
- java.util.ArrayDeque 当容量不够时, 底层会用新数组替代

```java
Deque<MyObject> deque = new LinkedList<MyObject>();
```
建议使用Generic,两点好处:
- 避免插入错误的types, 如果想插如多种types, 可以使用Generic的通配符
- 不使用Generic, 在取出element时需要进行cast操作, 而有Generic则不需要


### 操作
头部:
addFirst() offerFirst(e)
removeFirst() pollFirst()
getFirst() peekFirst()

尾部:
addLast(e)  offerLast(e)
removeLast()    pollLast()
getLast()   peekLast()


- contains()

- size()

### 遍历
- Iterator.
- for-each loop.


## stack
Last In First Out (LIFO)
```java
Stack<String> stack = new Stack<String>();
```

### 操作

- push() 压栈
```java
stack.push("1");
```

- pop() 弹栈
```java
String topElement = stack.pop()
```

- search() 查找
```java
int index = stack.search("3")
```

- size()
```java
int size = stack.size()
```

### 遍历
- Iterator
- Java Stream


### 应用
使用stack来reverse List
```java
List<String> list = new ArrayList<String>();
list.add("A");
list.add("B");
list.add("C");
System.out.println(list);
Stack<String> stack = new Stack<String>();
while(list.size() > 0) {
    stack.push(list.remove(0));
}
while(stack.size() > 0){
    list.add(stack.pop());
}
System.out.println(list);
```


参考:
https://blog.csdn.net/devnn/article/details/82716447
http://tutorials.jenkov.com/java-collections/iterator.html

