---

title: Compter le temps d'exécution d'une méthode en Python
date: 2021-03-03 19:17 UTC
tags: Python

---

```python
import time

tic = time.perf_counter()
# Do something...
toc = time.perf_counter()

print(f"Updated in {toc - tic:0.4f} seconds")
```
