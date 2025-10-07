# num


## function

Name|Description|例子
--|--|--
ABS(X)|绝对值|`SELECT ABS(-32); # -> 32`
ACOS(X)	|反余弦|`SELECT ACOS(1); # -> 0`
ASIN(X)|	反正弦|`SELECT ASIN(0.2); # -> 0.20135792079033`
ATAN(X)|	反正切|`SELECT ATAN(2); # -> 1.1071487177941`
ATAN2(), ATAN()|	Return the arc tangent of the two arguments
CEIL(X)	| CEILING()
CEILING(X)	|向上取整|`SELECT CEILING(1.23);  # -> 2`
CONV(N,from_base,to_base)|	Convert numbers between different number bases
COS(X)	|余弦|`SELECT COS(PI());  # -> -1`
COT()	|Return the cotangent
CRC32()	|Compute a cyclic redundancy check value
DEGREES(X)|	Convert radians to degrees|`SELECT DEGREES(PI()); # -> 180`
EXP(X)|	指数|`SELECT EXP(2); # -> 7.3890560989307`
FLOOR()	|向下取整 |`SELECT FLOOR(1.23), FLOOR(-1.23); # -> 1, -2`
LN(X)|	Return the natural logarithm of the argument|`SELECT LN(2);  # -> 0.69314718055995`
LOG()|	Return the natural logarithm of the first argument|`SELECT LOG(10,100); # -> 2`
LOG10()|	Return the base-10 logarithm of the argument
LOG2()	|Return the base-2 logarithm of the argument
MOD(N,M), N % M, N MOD M|	Return the remainder|`SELECT MOD(234, 10); #  -> 4`
PI()	|Return the value of pi|`SELECT PI(); # -> 3.141593`
POW()|	Return the argument raised to the specified power|`SELECT POW(2,2); # -> 4`
POWER()|	 POW()
RADIANS()|	Return argument converted to radians
RAND([N])|	随机数 |`SELECT FLOOR(7 + (RAND() * 5));`
ROUND(X), ROUND(X,D)|	随机数|`SELECT ROUND(-1.23); # -> -1`
SIGN(X)|	大于0的判定为1,小于0的返回-1,0等于0|`SELECT SIGN(-32);`
SIN(X)	|Return the sine of the argument
SQRT(X)|	Return the square root of the argument|`SELECT SQRT(4);  #  -> 2`
TAN()|	Return the tangent of the argument
`TRUNCATE(X,D)`|	Truncate to specified number of decimal places|`SELECT TRUNCATE(-1.999,1); # -> 100`


## type
### Integer
Type	|Storage (Bytes)	|Minimum Value Signed	|Minimum Value Unsigned	|Maximum Value Signed	|Maximum Value Unsigned
--|--|--|--|--|--
TINYINT|	1|	-128|	0|	127|	255
SMALLINT|	2|	-32768|	0|	32767|	65535
MEDIUMINT|	3|	-8388608|	0|	8388607|	16777215
INT|	4|	-2147483648|	0|	2147483647|	4294967295|
BIGINT|	8|	-263|	0|	2^63-1|	2^64-1|


### Decimal
`salary DECIMAL(5,2)`


### Float&Double
`FLOAT(7,4) will look like -999.9999 when displayed. `
`MySQL performs rounding when storing values, so if you insert 999.00009 into a FLOAT(7,4) column, the approximate result is 999.0001.`
### Bit

If you assign a value to a BIT(M) column that is less than M bits long, the value is padded on the left with zeros. For example, assigning a value of b'101' to a BIT(6) column is, in effect, the same as assigning b'000101'.


参考:
https://dev.mysql.com/doc/refman/8.0/en/numeric-types.html
https://dev.mysql.com/doc/refman/8.0/en/mathematical-functions.html
