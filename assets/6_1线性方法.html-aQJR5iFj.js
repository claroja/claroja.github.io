const t=JSON.parse('{"key":"v-f01811da","path":"/1%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/3%E5%88%86%E6%9E%90%E5%B7%A5%E5%85%B7/1numpy/6_1%E7%BA%BF%E6%80%A7%E6%96%B9%E6%B3%95.html","title":"linalg","lang":"zh-CN","frontmatter":{"description":"linalg linalg=linear（线性）+algebra（代数） API 矩阵与向量乘积 方法 描述 dot(a, b[, out]) Dot product of two arrays. linalg.multi_dot(arrays) Compute the dot product of two or more arrays in a single function call, while automatically selecting the fastest evaluation order. vdot(a, b) Return the dot product of two vectors. inner(a, b) Inner product of two arrays. outer(a, b[, out]) Compute the outer product of two vectors. matmul(a, b[, out]) Matrix product of two arrays. tensordot(a, b[, axes]) Compute tensor dot product along specified axes for arrays &gt;= 1-D. einsum(subscripts, *operands[, out, dtype, …]) Evaluates the Einstein summation convention on the operands. einsum_path(subscripts, *operands[, optimize]) Evaluates the lowest cost contraction order for an einsum expression by considering the creation of intermediate arrays. linalg.matrix_power(M, n) Raise a square matrix to the (integer) power n. kron(a, b) Kronecker product of two arrays.","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/1%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/3%E5%88%86%E6%9E%90%E5%B7%A5%E5%85%B7/1numpy/6_1%E7%BA%BF%E6%80%A7%E6%96%B9%E6%B3%95.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"linalg"}],["meta",{"property":"og:description","content":"linalg linalg=linear（线性）+algebra（代数） API 矩阵与向量乘积 方法 描述 dot(a, b[, out]) Dot product of two arrays. linalg.multi_dot(arrays) Compute the dot product of two or more arrays in a single function call, while automatically selecting the fastest evaluation order. vdot(a, b) Return the dot product of two vectors. inner(a, b) Inner product of two arrays. outer(a, b[, out]) Compute the outer product of two vectors. matmul(a, b[, out]) Matrix product of two arrays. tensordot(a, b[, axes]) Compute tensor dot product along specified axes for arrays &gt;= 1-D. einsum(subscripts, *operands[, out, dtype, …]) Evaluates the Einstein summation convention on the operands. einsum_path(subscripts, *operands[, optimize]) Evaluates the lowest cost contraction order for an einsum expression by considering the creation of intermediate arrays. linalg.matrix_power(M, n) Raise a square matrix to the (integer) power n. kron(a, b) Kronecker product of two arrays."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-25T10:13:52.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-25T10:13:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"linalg\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-25T10:13:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"API","slug":"api","link":"#api","children":[]},{"level":2,"title":"矩阵与向量乘积","slug":"矩阵与向量乘积","link":"#矩阵与向量乘积","children":[]},{"level":2,"title":"分解","slug":"分解","link":"#分解","children":[]},{"level":2,"title":"特征值特征向量","slug":"特征值特征向量","link":"#特征值特征向量","children":[]},{"level":2,"title":"Norms and other numbers","slug":"norms-and-other-numbers","link":"#norms-and-other-numbers","children":[]},{"level":2,"title":"Solving equations and inverting matrices","slug":"solving-equations-and-inverting-matrices","link":"#solving-equations-and-inverting-matrices","children":[]},{"level":2,"title":"Exceptions","slug":"exceptions","link":"#exceptions","children":[]},{"level":2,"title":"参考:","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1740478432000,"updatedTime":1740478432000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":1.43,"words":428},"filePathRelative":"1机器学习/3分析工具/1numpy/6_1线性方法.md","localizedDate":"2025年2月25日","excerpt":"<h1> linalg</h1>\\n<p>linalg=linear（线性）+algebra（代数）</p>\\n<h2> API</h2>\\n<h2> 矩阵与向量乘积</h2>\\n<table>\\n<thead>\\n<tr>\\n<th>方法</th>\\n<th>描述</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>dot(a, b[, out])</td>\\n<td>Dot product of two arrays.</td>\\n</tr>\\n<tr>\\n<td>linalg.multi_dot(arrays)</td>\\n<td>Compute the dot product of two or more arrays in a single function call, while automatically selecting the fastest evaluation order.</td>\\n</tr>\\n<tr>\\n<td>vdot(a, b)</td>\\n<td>Return the dot product of two vectors.</td>\\n</tr>\\n<tr>\\n<td>inner(a, b)</td>\\n<td>Inner product of two arrays.</td>\\n</tr>\\n<tr>\\n<td>outer(a, b[, out])</td>\\n<td>Compute the outer product of two vectors.</td>\\n</tr>\\n<tr>\\n<td>matmul(a, b[, out])</td>\\n<td>Matrix product of two arrays.</td>\\n</tr>\\n<tr>\\n<td>tensordot(a, b[, axes])</td>\\n<td>Compute tensor dot product along specified axes for arrays &gt;= 1-D.</td>\\n</tr>\\n<tr>\\n<td>einsum(subscripts, *operands[, out, dtype, …])</td>\\n<td>Evaluates the Einstein summation convention on the operands.</td>\\n</tr>\\n<tr>\\n<td>einsum_path(subscripts, *operands[, optimize])</td>\\n<td>Evaluates the lowest cost contraction order for an einsum expression by considering the creation of intermediate arrays.</td>\\n</tr>\\n<tr>\\n<td>linalg.matrix_power(M, n)</td>\\n<td>Raise a square matrix to the (integer) power n.</td>\\n</tr>\\n<tr>\\n<td>kron(a, b)</td>\\n<td>Kronecker product of two arrays.</td>\\n</tr>\\n</tbody>\\n</table>","copyright":{"author":"王新宇"},"autoDesc":true}');export{t as data};
