# table

## 最佳实践

1. table包含三个部分thead, tbody, tfoot. 一般可以省略不写.
2. tr表示行, th表示第一行. 一个table可以有多行.
3. td表示单元隔. 一行可以有多个单元格.



## 定义行和单元格

- 行(table row, tr)
- 单元格(table data, td)


```html
<table>
    <tr>
      <td>行1，列1</td>
      <td>行1，列2</td>
    </tr>
    <tr>
      <td>行2，列1</td>
      <td>行2，列2</td>
    </tr>
</table>
```

<table>
    <tr>
      <td>行1，列1</td>
      <td>行1，列2</td>
    </tr>
    <tr>
      <td>行2，列1</td>
      <td>行2，列2</td>
    </tr>
</table>

## 定义表头区和数据区

1. 表头区域(table head, thead): 定义表头区域
    1. 列头(table head, th): 定义列头
2. 表数据区(table body, tbody): 定义数据区
    1. 行(table row, tr): 表示行
    2. 单元格(table data, td): 表示单元格
3. 表脚区域(table foot, tfoot): 表格脚

```htm
<table>
  <thead>
    <tr>
      <th>列标题1</th>
      <th>列标题2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>行1，列1</td>
      <td>行1，列2</td>
    </tr>
    <tr>
      <td>行2，列1</td>
      <td>行2，列2</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>表格最后一行</td>
      <td>表格最后一行</td>
    </tr>
  </tfoot>
</table>

```

<table>
  <thead>
    <tr>
      <th>列标题1</th>
      <th>列标题2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>行1，列1</td>
      <td>行1，列2</td>
    </tr>
    <tr>
      <td>行2，列1</td>
      <td>行2，列2</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>表格最后一行</td>
      <td>表格最后一行</td>
    </tr>
  </tfoot>


</table>



## 标题和页脚




```html
<table>
    <caption>表格</caption>
    <tr>
      <td>行1，列1</td>
      <td>行1，列2</td>
    </tr>
    <tr>
      <td>行2，列1</td>
      <td>行2，列2</td>
    </tr>
</table>
```


<table>
    <caption>表格</caption>
    <tr>
      <td>行1，列1</td>
      <td>行1，列2</td>
    </tr>
    <tr>
      <td>行2，列1</td>
      <td>行2，列2</td>
    </tr>
    <tfoot>表格页脚</tfoot> 
</table>



## 参考
1. https://www.w3schools.com/html/html_tables.asp
2. https://www.runoob.com/html/html-tables.html