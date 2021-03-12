---

title: Récupérer la valeur d'une clé ou créer cette dernière si elle n'existe pas
date: 2021-01-27 19:36 UTC
tags: Python

---

Dans le cas de dictionnaires profonds, on peut vouloir récupérer la valeur d'une clé inexistante. Prenons l'exemple d'un dictionnaire qui servirait à répertorier des fruits en fonction de leur famille.

```python
fruits = {
	"berries": ["strawberries", "raspberries", "blueberries", "kiwifruit"],
	"melons": ["watermelons", "rockmelons", "honeydew melons"],
}
```

Imaginons que nous voulons ajouter une orange. La clé "citrus" n'existant pas, il nous faut vérifier qu'ellpyte existe avant de continuer.

```python
In [1]: fruits["citrus"] = ["orange"]
- --------------------------------------------------------------------------
KeyError: 'citrus'
```

Le premier réflexe est alors d'écrire une fonction qui ressemblerait à ceci :

```python
def add_key_if_not_exists(key):
    if not fruits.get(key):
		    fruits[key] = []

add_key_if_not_exists("citrus")
fruits["citrus"].append("orange")
```

Un peu pénible, non ?

Le type `dict` de Python intègre par défaut la méthode `setdefault` ([lire la doc](https://docs.python.org/3/library/stdtypes.html#dict.setdefault)) qui fait exactement ce que nous voulons en une seule ligne !

```python
fruits.setdefault("citrus", []).append("lime")

# {'berries': ['strawberries', 'raspberries', 'blueberries', 'kiwifruit'],
# 'melons': ['watermelons', 'rockmelons', 'honeydew melons'],
# 'citrus': ['orange', 'lime']}

```

Bien sûr, notre cas est très simple. Mais si vous jetez un coup d’œil à [ce commit](https://github.com/betagouv/itou/pull/444/commits/561f1ac98f32991f97443b923ed4a81a3ee4d681), vous comprendrez pourquoi cette petite méthode est bien utile.

⚠️ J'ai fait l'erreur suivante avant de me rendre compte que ça ne pouvait pas fonctionner ! A votre avis, pourquoi ?

```python
fruits = []

# Add "lime" to {"citrus": []} and create key if it does not exist.
fruits.setdefault("citrus", ["lime"])
# => OK, "lime" is in the list.

# Add "bergamot" to {"citrus": []} and create key if it does not exist.
fruits.setdefault("citrus", ["bergamot"])
# WRONG! fruits["citrus"] only contains "lime"!

```
