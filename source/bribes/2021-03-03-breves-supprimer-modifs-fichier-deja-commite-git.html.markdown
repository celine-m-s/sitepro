---

title: Supprimer les modifications apportées à un fichier déjà commité
date: 2021-03-03 20:45 UTC

---

Blabla

READMORE

```bash
# Go back to the last commit (HEAD - 1) but keep the changes
git reset --soft HEAD~1

# Then commit
git commit -m "blabla"

# ... or reset the changes to add files again
git reset HEAD file
git add otherfiles
```

cf https://devconnected.com/how-to-remove-files-from-git-commit/
