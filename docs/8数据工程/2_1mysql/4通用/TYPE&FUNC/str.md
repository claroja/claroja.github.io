# str


## type
### CHAR VARCHAR
char和varchar类型在最大长度和尾部补0方式有差异

CHAR 固定长度
最大长度可以设置为255,
存储时长度不满足,会在尾部填充0,在取数据时会将0自动去掉
存储长度超过时,会截断

VARCHAR 可变长度
长度可以设置为65535
存储长度不足时,不填充0,会缩小存储空间
存储长度超过时,会截断


Value|CHAR(4)|Storage Required|VARCHAR(4)|Storage Required
--|--|--|--|--
''|'    '|4 bytes|''|1 byte
'ab'|'ab  '|4 bytes|'ab'|3 bytes
'abcd'|'abcd'|4 bytes|'abcd'|5 bytes
'abcdefgh'|'abcd'|4 bytes|'abcd'|5 bytes



通过下面这个例子,可以看到,在VARCHAR(4)字符后面的空白字符被舍去.
```
mysql> CREATE TABLE vc (v VARCHAR(4), c CHAR(4));
Query OK, 0 rows affected (0.01 sec)

mysql> INSERT INTO vc VALUES ('ab  ', 'ab  ');
Query OK, 1 row affected (0.00 sec)

mysql> SELECT CONCAT('(', v, ')'), CONCAT('(', c, ')') FROM vc;
+---------------------+---------------------+
| CONCAT('(', v, ')') | CONCAT('(', c, ')') |
+---------------------+---------------------+
| (ab  )              | (ab)                |
+---------------------+---------------------+
1 row in set (0.06 sec)
```
### The BLOB and TEXT Types
BLOB可以存大量的可变的二进制数据
TEXT可以存大量的可变的字符数据


Data Type|Storage Required
--|--
TINYBLOB, TINYTEXT|L + 1 bytes, where L < 28
BLOB, TEXT|L + 2 bytes, where L < 216
MEDIUMBLOB, MEDIUMTEXT|L + 3 bytes, where L < 224
LONGBLOB, LONGTEXT|L + 4 bytes, where L < 232


## function



Name|Description|例子
--|--|--
`ASCII(str)`|返回字符ascii码|`SELECT ASCII('2'); # -> 50` 
`BIN(N)`|返回字符的二进制值|`SELECT BIN(12); # -> '1100'`
BIT_LENGTH()|Return length of argument in bits
`CHAR(N,... [USING charset_name])`|将整型转换为字符|`SELECT CHAR(77,121,83,81,'76'); # -> 'MySQL'`
CHAR_LENGTH()|Return number of characters in argument
CHARACTER_LENGTH()|Synonym for CHAR_LENGTH()
`CONCAT(str1,str2,...)`|拼贴字符串|`SELECT CONCAT('My', 'S', 'QL'); # -> 'MySQL'`
CONCAT_WS()|Return concatenate with separator
ELT()|Return string at index number
EXPORT_SET()|Return a string such that for every bit set in the value bits, you get an on string and for every unset bit, you get an off string
`FIELD(str,str1,str2,str3,...)`|Returns the index (position) of str in the str1, str2, str3, ... list.|`SELECT FIELD('Bb', 'Aa', 'Bb', 'Cc', 'Dd', 'Ff'); # -> 2`
FIND_IN_SET()|Index (position) of first argument within second argument
`FORMAT(X,D[,locale])`|格式化字符串,D是小数点保留位|`SELECT FORMAT(12332.123456, 4); # -> '12,332.1235'`
FROM_BASE64()|Decode base64 encoded string and return result
HEX()|Hexadecimal representation of decimal or string value
`INSERT(str,pos,len,newstr)`|插入字符|`SELECT INSERT('Quadratic', 3, 4, 'What'); #  -> 'QuWhattic'`
`INSTR(str,substr)`|索引子字符串|`SELECT INSTR('foobarbar', 'bar'); # -> 4`
LCASE()|Synonym for LOWER()
`LEFT(str,len)`|从左边截取字符串|`SELECT LEFT('foobarbar', 5); # -> 'fooba'`
`LENGTH(str)`|返回字符串长度
LIKE|Simple pattern matching
LOAD_FILE()|Load the named file
`LOCATE(substr,str), LOCATE(substr,str,pos)`|索引字符串|`SELECT LOCATE('bar', 'foobarbar'); # -> 4`
`LOWER(str)`|小写|`SELECT LOWER('QUADRATICALLY'); -> 'quadratically'`
`LPAD(str,len,padstr)`|左边填充字符串,len是填充后的长度|`SELECT LPAD('hi',4,'??'); # -> '??hi'`
`LTRIM(str)`|删除左边的空白|`SELECT LTRIM('  barbar');  # -> 'barbar'`
MAKE_SET()|Return a set of comma-separated strings that have the corresponding bit in bits set
MATCH|Perform full-text search
`MID(str,pos,len)`| SUBSTRING(str,pos,len)
NOT LIKE|Negation of simple pattern matching
NOT REGEXP|Negation of REGEXP
OCT()|Return a string containing octal representation of a number
OCTET_LENGTH()|Synonym for LENGTH()
ORD()|Return character code for leftmost character of the argument
POSITION()|Synonym for LOCATE()
QUOTE()|Escape the argument for use in an SQL statement
REGEXP|Whether string matches regular expression
REGEXP_INSTR()|Starting index of substring matching regular expression
REGEXP_LIKE()|Whether string matches regular expression
REGEXP_REPLACE()|Replace substrings matching regular expression
REGEXP_SUBSTR()|Return substring matching regular expression
`REPEAT(str,count)`|重复字符串|`SELECT REPEAT('MySQL', 3); # -> 'MySQLMySQLMySQL'`
`REPLACE(str,from_str,to_str)`|替换字符串|`SELECT REPLACE('www.mysql.com', 'w', 'Ww');  #  -> 'WwWwWw.mysql.com'`
`REVERSE(str)`|反转字符串|`SELECT REVERSE('abc'); # -> 'cba'`
`RIGHT(str,len)`|从右边截取字符串|` SELECT RIGHT('foobarbar', 4); # -> 'rbar'`
RLIKE|Whether string matches regular expression
`RPAD(str,len,padstr)`|右边填充空白|`SELECT RPAD('hi',5,'?'); # -> 'hi???'`
`RTRIM(str)`|右边删除空白|`SELECT RTRIM('barbar   '); #  -> 'barbar'`
SOUNDEX()|Return a soundex string
SOUNDS LIKE|Compare sounds
`SPACE(N)`|生成空白字符|`SELECT SPACE(6); # ->-> '      '`
STRCMP()|Compare two strings
SUBSTR()|Return the substring as specified
`SUBSTRING(str,pos,len)`|截取字符串|`SELECT SUBSTRING('Quadratically',5,6); # -> 'ratica'`
SUBSTRING_INDEX()|Return a substring from a string before the specified number of occurrences of the delimiter
TO_BASE64()|Return the argument converted to a base-64 string
`TRIM([{BOTH ....`|删除空白|`SELECT TRIM('  bar   '); # -> 'bar'`
UCASE()|UPPER()
UNHEX()|Return a string containing hex representation of a number
`UPPER(str)`|大写|`SELECT UPPER('Hej'); # -> 'HEJ'`
WEIGHT_STRING()|Return the weight string for a string


参考:
https://dev.mysql.com/doc/refman/8.0/en/string-types.html
https://dev.mysql.com/doc/refman/8.0/en/string-functions.html