# shell


You need to use the -p flag to send a password. And it's tricky because you must have no space between -p and the password.
```sql
$ mysql -h "server-name" -u "root" "-pXXXXXXXX" "database-name" < "filename.sql"
```

If you use a space after -p it makes the mysql client prompt you interactively for the password, and then it interprets the next command argument as a database-name:

```sql
$ mysql -h "server-name" -u "root" -p "XXXXXXXX" "database-name" < "filename.sql"
Enter password: <you type it in here>
ERROR 1049 (42000): Unknown database 'XXXXXXXX'
```




refs:
https://stackoverflow.com/questions/8055694/how-to-execute-a-mysql-command-from-a-shell-script
https://www.codeleading.com/article/35245676702/