# stdio

## stdin
```python
import sys
a=sys.stdin.readline() # 包含了换行符,一般都要使用strip
b=input() # 不包含换行符`\n`
print(len(a),len(b)) # 5 4
```


## stdout
```python
print(*objects, sep=' ', end='\n', file=sys.stdout, flush=False)
```
`print`默认写入的是标准输出,既控制台



```python
sys.stdout.write('hello' + '\n')
print('hello')
```