---
title: python_operatorsOverload
toc: true
date: 2021-01-20 22:03:54
---
名词解释： rhs(right hand side)


# 1.算术运算符重载
左侧为自定义类型时,右侧为内建类型进行算术运算
方法名|表达式|描述
--|--|--
__add__(self,rhs)| self + rhs|加法
__sub__(self,rhs) | self - rhs| 减法
__mul__(self,rhs) | self * rhs|乘法
__truediv__(self,rhs)| self / rhs|除法
__floordiv__(self,rhs)|  self //rhs | 地板除
__mod__(self,rhs) |self % rhs | 取模(求余)
__pow__(self,rhs) | self **rhs |幂运算


# 2.反向运算符
左侧为内建类型时,右侧为自定义类型进行算术运算
方法名|表达式|描述
--|--|--
__radd__(self,lhs)|lhs + self|加法
__rsub__(self,lhs)|lhs - self|减法
__rmul__(self,lhs)|lhs * self |乘法
__rtruediv__(self,lhs)|lhs / self |除法
__rfloordiv__(self,lhs)| lhs // self| 地板除
__rmod__(self,lhs)| lhs % self |取模(求余)
__rpow__(self,lhs)|lhs ** self|幂运算

# 3.复合赋值运算符
以复合赋值算术运算符 x += y为例,此运算符会优先调用x.__iadd__(y)方法,如果没有__iadd__方法时,则会将复合赋值算术运          算拆解为:x = x + y
然后调用x = x.__add__(y)方法,如果再不存在__add__方法则会触发TypeError类型的错误异常

方法名|表达式|描述
--|--|--
__iadd__(self,rhs)       |self += rh|        加法
__isub__(self,rhs)       |self -= rh|         减法
__imul__(self,rhs)       |self *= rh|         乘法
__itruediv__(self,rhs)   |self /= rh|        除法
__ifloordiv__(self,rhs)  |self //=rh|        地板除
__imod__(self,rhs)       |self %= rh|     取模(求余)
__ipow__(self,rhs)       |self **=rh|       幂运算

# 4.比较运算符重载
方法名|表达式|描述
--|--|--
__lt__(self,rhs)|self < rhs |小于
__le__(self,rhs)|self <= rhs|小于等于
__gt__(self,rhs)|self > rhs |大于
__ge__(self,rhs)|self >= rhs|大于等于
__eq__(self,rhs)|self == rhs|等于
__ne__(self,rhs)|self != rhs|不等于

# 5.位运算符
方法名|表达式|描述
--|--|--
__and__(self,rhs)   |self & rhs|位与
__or__(self,rhs)    |self | rhs|位或
__xor__(self,rhs)   |self ^ rhs|位异或
__lshift__(self,rhs)|self <<rhs|左移
__rshift__(self,rhs)|self >>rhs|右移

# 6.反向位运算符
方法名|表达式|描述
--|--|--
__and__(self,lhs)   |lhs & rhs|位与
__or__(self,lhs)    |lhs | rhs|位或
__xor__(self,lhs)   |lhs ^ rhs|位异或
__lshift__(self,lhs)|lhs <<rhs|左移
__rshift__(self,lhs)|lhs >>rhs|右移

# 7.一元运算符
方法名|表达式|描述
--|--|--
__neg__(self)   |- self|负号
__pos__(self)   |+ self|正号
__invert__(self)|~ self|取反

# 8.in/not in 运算符
方法名|表达式|描述
--|--|--
__contains__|in / not in|



参考：
https://blog.csdn.net/zhangshuaijun123/article/details/82149056