# Projet Kasa

Kasa est le dernier projet de la formation développeur Web chez OpenClassrooms.

Projet build et hebergé sur [vercel](https://kasa-p7-open-classrooms.vercel.app/) et aussi hebergé sur [serveur](https://kasa.angiepons.fr/)

Utilisation de la librairie React.js  
Utilisation de React router

## Compétences évaluées:

- Initialiser une application avec Create React App
- Développer des éléments de l'interface d'un site web grâce à des composants React
- Configurer la navigation entre les pages de l'application avec React Router

## Contraintes techniques

React :
Il est impératif d’utiliser ces éléments de React pour un code de qualité :

- Découpage en composants modulaires et réutilisables ;
- Un composant par fichier ;
- Structure logique des différents fichiers ;
- Utilisation des props entre les composants ;
- Utilisation du state dans les composants quand c'est nécessaire ;
- Gestion des événements ;
- Listes : React permet de faire des choses vraiment intéressantes avec
  les listes, en itérant dessus, par exemple avec map. Il faut les utiliser
  autant que possible.

React Router :

- Les paramètres des routes sont gérés par React Router dans l'URL
  pour récupérer les informations de chaque logement.
- Il existe une page par route.
- La page 404 est renvoyée pour chaque route inexistante, ou si une
  valeur présente dans l’URL ne fait pas partie des données
  renseignées.
- La logique du routeur est réunie dans un seul fichier.

---

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Note

Pour faire fonctionner correctement le site sur un serveur apache il faut ajouter un fichier .htaccess à la racine.
`<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>`
