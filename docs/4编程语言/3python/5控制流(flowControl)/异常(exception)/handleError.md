# handleError


## LBYL和EAFP

有两种应对`error`和`exception`的方法:
1. 在`error`和`exception`发生前阻止, 比如使用`if`语句, `C`和`GO`中, 简称为Look before you leap (LBYL)

    ```python
    if "possible_key" in data_dict:
        value = data_dict["possible_key"]
    else:
        # Handle missing keys here...
    ```


2. 在`error`和`exception`发生后处理, 比如使用`try...except`, `C++`,`Java`和`Python`, 简称为Easier to ask forgiveness than permission (EAFP)

    ```python
    try:
        value = data_dict["possible_key"]
    except KeyError:
        # Handle missing keys here...
    ```

## 如何选择
是使用`LBYL`还是`EAFP`, 要根据以下4中情况考虑:

- Number of checks
- Readability and clarity
- Race condition risk
- Code performance

### Avoiding Unnecessary Check Repetition

下面的代码, 我们首先使用`value.isdigit`来判断字符串中是否包含数字
```python
def to_integer(value):
    if value.isdigit():  # 先确认字符串中是否都是数字
        return int(value)
    return None

to_integer("42")  # 42
to_integer("one") # None
```

因为`int()`方法中已经做了`isdigit()`的检查, 如果不是`digit`则会抛出异常, 所以我们没必要再做`if`判断.
```python
def to_integer(value):
    try:
        return int(value)
    except ValueError:
        return None

to_integer("42")  # 42
to_integer("one") # True
```


### Improving Readability and Clarity


```python
def divide(a, b, default=None):
    if b == 0:  # Exceptional situation
        print("zero division detected")  # Error handling
        return default
    return a / b  # Most common situation

divide(8, 2) # 4.0
divide(8, 0) # zero division detected
divide(8, 0, default=0) # divide(8, 0, default=0) 0
```

上述代码的问题是将`exception`放在代码中间, 这样不利于对该方法的理解. 因为这个方法的主要目的是计算两个数的商, 而不是处理分母为0的情况, 所以`EAFP`风格更合适.
```python
def divide(a, b, default=None):
    try:
        return a / b  # Most common situation
    except ZeroDivisionError:  # Exceptional situation
        print("zero division detected")  # Error handling
        return default
```

### Avoiding Race Conditions
在不同的`program`,`processes`或者`threads`访问同一个资源的情况下, 会发生`race condition`.这种情况`if key in mapping: return mapping[key]`可能会失败, 因为另外的`thread`可能移除`key`在使用`if`语句判断前.

```python
connection = create_connection(db, host, user, password)
## Later in your code...
if connection.is_active():
    # Update your database here...
    connection.commit()
else:
    # Handle the connection error here...
```
如果`database`在执行`.is_active()`和`if`里面的代码时变成了`unavailable`时, 程序就会报错. 为了避免这种情况, 最好使用 EAFP.
```python
connection = create_connection(db, host, user, password)

## Later in your code...
try:
    # Update your database here...
    connection.commit()
except ConnectionError:
    # Handle the connection error here...
```


### Improving Your Code’s Performance
EAFP在大多数情况下都会比LBYL

```python
sample_text = """
Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
mollitia, molestiae quas vel sint commodi repudiandae consequuntur
voluptatum laborum numquam blanditiis harum quisquam eius sed odit
fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum
ut molestias architecto voluptate aliquam nihil, eveniet aliquid
culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error,
harum nesciunt ipsum debitis quas aliquid.
"""


def char_frequency_lbyl(text):
    counter = {}
    for char in text:
        if char in counter:
            counter[char] += 1
        else:
            counter[char] = 1
    return counter

def char_frequency_eafp(text):
    counter = {}
    for char in text:
        try:
            counter[char] += 1
        except KeyError:
            counter[char] = 1
    return counter

import timeit
sample_text *= 100

eafp_time = min(
    timeit.repeat(
        stmt="char_frequency_eafp(sample_text)",
        number=1000,
        repeat=5,
        globals=globals(),
    )
)

lbyl_time = min(
    timeit.repeat(
        stmt="char_frequency_lbyl(sample_text)",
        number=1000,
        repeat=5,
        globals=globals(),
    )
)

print(f"LBYL is {lbyl_time / eafp_time:.3f} times slower than EAFP") # LBYL is 1.211 times slower than EAFP
```



参考:
python_handleError