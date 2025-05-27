# api



在方法注释的`---`作为swagger的开端
parameters(请求), 
responses(返回设置)
definitions

## parameters

1. name
请求的参数

2. in
请求参数放的位置:
- path: 放在url后面
- body: 放在请求体里

3. required
是否必须

4. type
类型分类:
string
number
array
object

  - String类型
  ```yml
  parameters:                      # 请求的参数
    - name: palette                # 请求参数的key
      in: path                     # 方式:path就是贴在url后面, 还可以填body,既写在请求体里
      type: string                 # 参数的类型
      enum: ['all', 'rgb', 'cmyk'] # 参数的可选值
      required: true               # 是否必须
      default: all                 # 默认值
  ```

  - array类型
  `items`和`array`对应出现

  ```yml
  parameters:
  - name: id
    in: path
    description: ID of pet to use
    required: true
    type: array
    items:
      type: string
    collectionFormat: csv
  ```

  - object(Json)类型
  `properties`与`object`对应出现
  schema定义的内容, 可以在网页的module中显示
    - id
    schema的唯一标识, 会在网页的module的显示
    - type
    类型
    - 和type相关的

  
  ```yml
  parameters:                      # 请求的参数
    - name: palette                # 请求参数的名称
      in: body                     # 参数放在请求体里
      schema:                      # 请求体的内容, 这里会在网页的module里显示的
          id: request              # 请求体id
          type: object             # 请求体类型
          properties:              # object的内容
              name:                # key值
                  description: des # 在module里显示
                  type: string
              size:                # key值
                  type: number
          required:
              - name
              - size
          example:
              name: wang
              size: 100
  ```








## 例子
一般的
```python
from flask import Flask, jsonify
from flasgger import Swagger
app = Flask(__name__)
swagger = Swagger(app)
@app.route('/colors/<palette>/')
def colors(palette):
    """Example endpoint returning a list of colors by palette
    This is using docstrings for specifications.
    ---                              # 这里开始是swagger的内容
    parameters:                      # 请求的参数
      - name: palette                # 请求参数的key
        in: body                     # 参数放在请求体里
        schema:                      # 请求体的内容, 这里会在网页的module里显示的
            id: request              # 请求体id
            type: object             # 请求体类型
            properties:              # object的内容
                name:                # key值
                    description: des # 在module里显示
                    type: string
                size:                # key值
                    type: number
    definitions:                     # 定义模板, 可以在其他地方引用
      Color:                         # 该模板的名称
        type: string                 # 模板的类型
      Palette:                       # 该模板的名称
        type: object                 # 模板的类型
        properties:                  # object类型的key:value
          palette_name:              # key值
            type: array              # value的类型,为array
            items:                   # value array的内容
              $ref: '#/definitions/Color' # arrays的内容, 引用Color模板
    responses:                       # 返回的结果
      200:                           # 200
        description: A list of colors (may be filtered by palette)
        schema:                      # response的格式
          $ref: '                    #/definitions/Palette'
    """
    all_colors = {
        'cmyk': ['cian', 'magenta', 'yellow', 'black'],
        'rgb': ['red', 'green', 'blue']
    }
    if palette == 'all':
        result = all_colors
    else:
        result = {palette: all_colors.get(palette)}
    return jsonify(result)
app.run(debug=True)
```

使用definitions

```python
from flask import Flask, jsonify
from flasgger import Swagger

app = Flask(__name__)
swagger = Swagger(app)

@app.route('/colors/<palette>/')
def colors(palette):
    """Example endpoint returning a list of colors by palette
    This is using docstrings for specifications.
    ---                              # 这里开始是swagger的内容
    definitions:                     # 定义模板, 可以在其他地方引用
      Color:                         # 该模板的名称
        type: string                 # 模板的类型
      Palette:                       # 该模板的名称
        type: object                 # 模板的类型
        properties:                  # object类型的key:value
          palette_name:              # key值
            type: array              # value的类型,为array
            items:                   # value array的内容
              $ref: '                #/definitions/Color' # arrays的内容, 引用Color模板
    parameters:                      # 请求的参数
      - name: palette                # 请求参数的key
        in: path                     # 方式:path就是贴在url后面, 还可以填body,既写在请求体里
        type: string                 # 参数的类型
        enum: ['all', 'rgb', 'cmyk'] # 参数的可选值
        required: true               # 是否必须
        default: all                 # 默认值

    responses:                       # 返回的结果
      200:                           # 200
        description: A list of colors (may be filtered by palette)
        schema:                      # response的格式, 这里会在网页的module里显示的
          $ref: '                    #/definitions/Palette'
    """
    all_colors = {
        'cmyk': ['cian', 'magenta', 'yellow', 'black'],
        'rgb': ['red', 'green', 'blue']
    }
    if palette == 'all':
        result = all_colors
    else:
        result = {palette: all_colors.get(palette)}

    return jsonify(result)

app.run(debug=True)

```


参考:
https://github.com/flasgger/flasgger