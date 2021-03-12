---

title: Introduction aux annotations de type (Type Hints)
date: 2021-01-28 19:26 UTC
tags: Python

---

Python est un langage dynamique, c'est à dire que le type d'une variable peut être changé a posteriori. 

Concrètement, cela permet d'écrire ceci :

```python
festival = "Les vieilles charues" # festival refers to a string
festival = 44190 # now it refers to an integer
```

Pourquoi voudrait-on changer cela ? Afin d'être plus explicite sur le type attendu d'une variable dans le cadre d'une fonction, par exemple. Préciser le type attendu permet au premier coup d’œil de connaître le type d'objet qu'il est possible de passer en paramètre.

Cela améliore la lisibilité du code et évite donc les erreurs.

Considérons la fonction suivante :

```python
def count_candies(candies):
		return len(candies)		

count_candies(["Dragibus", "Regal'ad"])
# 2

```

Il est tout à fait possible de ne pas passer une liste à notre fonction du moment que la méthode `len` l'autorise. Mais la fonction ne fera alors pas du tout ce pourquoi elle a été créée...

```python
count_candies("Mi-cho-ko")
# 9
```

Comment s'assurer que le développeur qui utilisera `count_candies` passe bien une liste en paramètre ? Appelons les annotations de type, `Type Hints` en anglais, à la rescousse !

```python
def count_candies(candies: list) -> int:
		return len(candies)

# def my_function(argument_name: argument_type) -> return_type:
#    pass
```

Et voilà ! Magique !

Nous pourrions nous attendre à ce que ces annotations soient contraignantes, c'est-à-dire qu'elles lèvent une erreur si un type incorrect est utilisé. Nous aurions tort car cela contreviendrait à l'essence même du langage : son côté dynamique.

Les annotations portent bien leur nom : ce sont des indications dont l'objet est d'améliorer la compréhension du code.

Rappelons également que chaque fonction est une API exposant une interface plus ou moins complexe. Bien sûr, dans le cadre de notre exemple, elle est très simple. Mais il arrive fréquemment que des méthodes acceptent beaucoup d'arguments et fassent plus de vingt lignes. Cela permet de savoir exactement ce qui est attendu en entrée et ce qui est renvoyé en sortie sans avoir à en disséquer les entrailles.

Puisque ces annotations sont des indications qui améliorent la qualité d'un projet, il est logique qu'elles aient leur place dans un environnement de test ou une CI aux côtés de _linters_ et de tests automatiques. [La librairie mypy](https://mypy.readthedocs.io/en/stable/) semble être la plus utilisée à cet effet mais je n'ai pas encore eu l'occasion de jouer avec.

Nous avons utilisé des annotations dans le cadre d'un système de notifications personnalisé dans une app Django. Cela vous titille de savoir ce qui nous a amené à cette solution ? [Lire notre échange sur GitHub](https://github.com/betagouv/itou/pull/444/files#diff-8126313c598b34f7657bec54fd01935f9abb2ef7b21bd273ff60f8a889042574R35).

```python
class NotificationBase:
	def __init__(self, recipients_qs: [SiaeMembershipQuerySet,]):
		"""
		`recipients_qs`: Django QuerySet leading to this notification recipients.
		We should be able to perform a `filter()` with it.
		"""
		self.recipients_qs = recipients_qs
		# ...
```

Je n'ai pas testé, car nous n'avons pas encore ajouté `mypy` au projet, mais je suppose très fortement qu'aucune erreur ne serait levée si nous passions en paramètre un objet d'un autre type que `SiaeMembershipQuerySet` , donc ne vous basez pas sur cet exemple. Pourquoi cette solution nous convient-elle alors ? Car elle a le mérite d'être très explicite, tout simplement.

Les annotations de type sont un concept bien plus vaste. Pour creuser le sujet, je conseille de lire attentivement les pages suivantes :

- [Python Type Checking (Guide](https://realpython.com/python-type-checking/)) (sur Real Python)
- [PEP 483 -- The Theory of Type Hints](https://www.python.org/dev/peps/pep-0483/)
- [PEP 484 -- Type Hints](https://www.python.org/dev/peps/pep-0484/)
- [La doc du module typing](https://docs.python.org/fr/3/library/typing.html)
