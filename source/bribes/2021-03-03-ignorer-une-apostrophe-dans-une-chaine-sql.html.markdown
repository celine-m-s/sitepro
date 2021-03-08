---

title: Ignorer une apostrophe dans une chaîne SQL
date: 2021-03-03 20:48 UTC
tags: sql

---

Il est possible d'échapper des apostrophes en les doublant ! Pas très intuitif mais efficace.

READMORE

```sql
DECLARE @my_table TABLE (
    [value] VARCHAR(200)
)

INSERT INTO @my_table VALUES ('hi, my name''s tim.')

SELECT * FROM @my_table
```

Résultat

```sql

value
==================
hi, my name's tim.

```

Merci https://stackoverflow.com/a/1586588/3086625


