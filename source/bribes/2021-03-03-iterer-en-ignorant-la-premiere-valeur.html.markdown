---

title: Itérer en ignorant la première valeur
date: 2021-03-03 20:47 UTC
tags: Python

---

Blabla

READMORE

```python

for i, approval in enumerate(merged_approvals[1:], start=1):
    if (
        approval.originates_from_itou
        and not merged_approvals[i - 1].originates_from_itou
        and approval.is_valid
    ):
        merged_approvals.insert(0, merged_approvals.pop(i))
        break
```

Déplacer un élément en premier dans la liste : 
```python
my_list.insert(0, my_list.pop(i))
```

https://docs.python.org/fr/3.9/library/functions.html#enumerate
