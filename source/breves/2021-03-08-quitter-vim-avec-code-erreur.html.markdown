---

title: Quitter VIM avec un code d'erreur
date: 2021-03-08 20:45 UTC
tags: VIM, Shell

---

👉  `:cq`

Imaginons que je lance un `git merge master` avant de me rendre compte, avec une évidente panique, que je ne peux pas mener à bien la fusion pour une raison quelconque. Je veux **interrompre** la fusion.

READMORE

Il suffit d'entrer `:cq` . MAGIQUE.

```bash
$ git merge master
# :cq
suggestion : en attente de la fermeture du fichier par votre éditeur de texte… error: There was a problem with the editor 'vim'.
Pas de validation de la fusion ; utilisez 'git commit' pour terminer la fusion.
$ git merge --abort
```
