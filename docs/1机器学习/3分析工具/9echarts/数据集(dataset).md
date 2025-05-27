# dataset



`source`不同数组的组织形式

1. 二维数组，其中第一行/列可以给出 维度名

    ```json
    [
        ['product', '2015', '2016', '2017'],
        ['Matcha Latte', 43.3, 85.8, 93.7],
        ['Milk Tea', 83.1, 73.4, 55.1],
        ['Cheese Cocoa', 86.4, 65.2, 82.5],
        ['Walnut Brownie', 72.4, 53.9, 39.1]
    ]
    ```


    注意: 该形式下
    1. 定义维度信息: `dimensions`, [参考官网](https://echarts.apache.org/zh/option.html#dataset.dimensions)
    2. 当为二维数组时, 第一行/列是否是 维度名 信息: `sourceHeader`



2. 行的key-value形式, 每一项是二维表的一行

    ```json
    [
        {product: 'Matcha Latte', count: 823, score: 95.8},
        {product: 'Milk Tea', count: 235, score: 81.4},
        {product: 'Cheese Cocoa', count: 1042, score: 91.2},
        {product: 'Walnut Brownie', count: 988, score: 76.9}
    ]
    ```

3. 列的 key-value 形式, 每一项是二维表的一列


    ```json
    {
        'product': ['Matcha Latte', 'Milk Tea', 'Cheese Cocoa', 'Walnut Brownie'],
        'count': [823, 235, 1042, 988],
        'score': [95.8, 81.4, 91.2, 76.9]
    }
    ```

## 参考
1. https://echarts.apache.org/zh/option.html#dataset







