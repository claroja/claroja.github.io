# 数据类型

## 数据类型

### 数值型
1. 整型
类型|大小|描述
--|--|--
TINYINT(Length)|1字节|适用于存储分类，比如性别等，范围：-128~127，或者0~255（无符号）
INT(Length)|4字节|范围：-2 147 483 648~2 147 483 647，或者0~4 294 967 295（无符号）
BIGINT(Length)|8字节|

2. 浮点型
类型|大小|描述
--|--|--
FLOAT(Length, Decimals)|4字节|具有浮动小数点的较小的数
DOUBLE(Length, Decimals)|8字节|具有浮动小数点的较大的数

2.int(LENGTH)
无论是int(3), int(6), 都可以显示6位以上的整数。但是，当数字不足3位或6位时，前面会用0补齐(使用zerofill)。
### 字符型
类型|大小|描述
--|--|--
CAHR(Length)|Length字节|定长字段。相较varchar，查询快，可能造成存储浪费，适用于固定长度字符，比如手机号，长度为0~255个字符
VARCHAR(Length)|String长度+1字节或String长度+2字节|变长字段。相较char，查询慢，只存储容量的规定上限，节省空间，长度为0~65 535个字符
TEXT|String长度+2字节|字符串，适用于存储文章，最大长度为65 535个字符

1）char(LENGTH) 与 varchar(LENGTH) 如果超出(LENGTH)则会进行裁剪
2）char 不可变，查询效率高，可能造成存储浪费
varchar 可变，查询效率不如char，节省空间
3）char和varchar必须制定length


### 时间型
类型|大小|描述
--|--|--
DATE|3字节|采用YYYY-MM-DD格式
DATETIME|8字节|采用YYYY-MM-DD HH:MM:SS格式
TIMESTAMP|4字节|采用YYYYMMDDHHMMSS格式；可接受的范围终止于2037年



