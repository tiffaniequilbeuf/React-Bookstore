# Projet "Bookstore" :

Je suis un libraire qui veut un logiciel pour gérer mon inventaire de livres. Je veux pouvoir l'utiliser au plus vite, donc chaque étape doit être faite l'une après l'autre :

- [X] Créer une liste de livre (dans un état), et l'afficher (nom, auteur, année de parution)
- [X] Chaque livre est un composant et on lui passer les informations en props
- [X] Je veux un bouton pour afficher un formulaire pour ajouter un nouveau livre
- [X] Quand je remplis et valide ce formulaire, le livre s'ajoute, et mon formulaire est caché
- [X] Dans le formulaire, ajouter un champ pour la couverture du livre (une URL absolue) et afficher cette couverture dans mon composant livre
- [X] Ajouter un attribut "quantity" dans l'objet livre, pour m'aider à faire mon inventaire. Il est par défaut à 1 quand j'ajoute un livre
- [X] Dans mon composant  "Book", j'ai deux boutons (+ et -) pour modifier la quantité.
- [X] Si la quantité passe à 0, le livre disparait
- [X] On ajoute un historique qui contient uniquement les livres avec 0 de quantité 

Après validation, axes d'évolution : ajouter une bouton + coté archives. Si il y a un retour en stock, le livre repassera dans le tableau du haut. On pouvait tout faire avec le même composant et 2 états. On peut lui ajouter une petite props isArchived par exemple qui lui applique une opacité...

- [ ] Migrez votre bibliothèque dans un store Zustand
- [ ] Ajoutez React Router et créez une page d'accueil pour l'application


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
