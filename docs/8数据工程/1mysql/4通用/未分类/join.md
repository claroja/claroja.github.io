# join


An inner join of A and B gives the result of A intersect B, i.e. the inner part of a [Venn diagram](https://en.wikipedia.org/wiki/Venn_diagram) intersection.

An outer join of A and B gives the results of A union B, i.e. the outer parts of a [Venn diagram](https://en.wikipedia.org/wiki/Venn_diagram) union.


Suppose you have two tables, with a single column each, and data as follows:

A|B
--|--
1|3
2|4
3|5
4|6
Note that (1,2) are unique to A, (3,4) are common, and (5,6) are unique to B.

## Inner join

```sql
select * from a INNER JOIN b on a.a = b.b;
select a.*, b.*  from a,b where a.a = b.b;
-- a | b
-- --+--
-- 3 | 3
-- 4 | 4
```

## Left outer join

```sql
select * from a LEFT OUTER JOIN b on a.a = b.b;
select a.*, b.*  from a,b where a.a = b.b(+);

-- a |  b
-- --+-----
-- 1 | null
-- 2 | null
-- 3 |    3
-- 4 |    4
```

## Right outer join

```sql
select * from a RIGHT OUTER JOIN b on a.a = b.b;
select a.*, b.*  from a,b where a.a(+) = b.b;

-- a    |  b
-- -----+----
-- 3    |  3
-- 4    |  4
-- null |  5
-- null |  6
```

## Full outer join

```sql
select * from a FULL OUTER JOIN b on a.a = b.b;

--  a   |  b
-- -----+-----
--    1 | null
--    2 | null
--    3 |    3
--    4 |    4
-- null |    6
-- null |    5
```

## self join

```sql
select c.id, c.title, c.pid, p.title from areas as c inner join areas as p on c.pid = p.id where p.title = '山西省';
```

refs:
https://stackoverflow.com/questions/38549/what-is-the-difference-between-inner-join-and-outer-join
https://en.wikipedia.org/wiki/Venn_diagram
https://blog.csdn.net/claroja/article/details/107941316