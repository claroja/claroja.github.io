# pivot



company_name|action|pagecount
--|--|--
Company A|PRINT|3
Company A|PRINT|2
Company A|PRINT|3
Company B|EMAIL|
Company B|PRINT|2
Company B|PRINT|2
Company B|PRINT|1
Company A|PRINT|3


company_name|EMAIL|PRINT 1 pages |PRINT 2 pages |PRINT 3 pages
--|--|--|--|--
CompanyA|0|0|1|3
CompanyB|1|1|2|0



```sql
SELECT  P.`company_name`,
    COUNT(
        CASE 
            WHEN P.`action`='EMAIL' 
            THEN 1 
            ELSE NULL 
        END
    ) AS 'EMAIL',
    COUNT(
        CASE 
            WHEN P.`action`='PRINT' AND P.`pagecount` = '1' 
            THEN P.`pagecount` 
            ELSE NULL 
        END
    ) AS 'PRINT 1 pages',
    COUNT(
        CASE 
            WHEN P.`action`='PRINT' AND P.`pagecount` = '2' 
            THEN P.`pagecount` 
            ELSE NULL 
        END
    ) AS 'PRINT 2 pages',
    COUNT(
        CASE 
            WHEN P.`action`='PRINT' AND P.`pagecount` = '3' 
            THEN P.`pagecount` 
            ELSE NULL 
        END
    ) AS 'PRINT 3 pages'
FROM    test_pivot P
GROUP BY P.`company_name`;
```


refs:
https://stackoverflow.com/questions/7674786/how-can-i-return-pivot-table-output-in-mysql