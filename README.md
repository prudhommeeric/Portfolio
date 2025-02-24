# P12-testeur-logiciel-portfolio

# Portfolio Eric PRUDHOMME

## Description
Ce projet est un portfolio personnel développé en **HTML, CSS, JavaScript** avec **Bootstrap**. Il présente mon parcours, mes compétences, mes projets, ainsi qu'un carrousel affichant les entreprises qui m'ont fait confiance.

## Fonctionnalités
- **Navigation fluide** avec une barre de navigation fixe.
- **Section "À propos"** pour détailler mon expérience.
- **Carrousel dynamique** affichant les logos des entreprises.
- **Sections "Compétences" et "Projets"** pour mettre en avant mon expertise.
- **Section "Contact"** avec des liens vers LinkedIn et email.
- **Section "Expériences"** 

## Technologies utilisées
- **HTML5 / CSS3**
- **JavaScript (ES6+)**
- **Bootstrap 5.1.3** (CDN)
- **FontAwesome** (pour les icônes)

## Installation
1. **Cloner le projet**
   ```bash
   git clone https://github.com/votre-repo/portfolio.git
   cd portfolio
   ```

2. **Lancer un serveur local** (facultatif)
   - Avec VS Code : Installer l'extension "Live Server" et cliquer sur "Go Live".
   - Avec Python :
     ```bash
     python -m http.server
     ```

## Structure du projet
```
P12-testeur-logiciel-portfolio-1/
│
├── index.html           # Page d'accueil de ton portfolio
├── README.md            # Documentation de ton projet
│
├── .vscode/             # Configurations de VS Code (si utilisé)
│
└── src/                 # Dossier source pour tous tes fichiers dynamiques
    ├── assets/          # Dossier contenant les ressources (images, scripts, styles, données)
    │   │   
    │   ├── data/        # Fichiers JSON pour ton contenu dynamique (ex : portfolio.json, skills.json)
    │   │   ├── carousel.json
    │   │   ├── experiences.json
    │   │   ├── portfolio.json
    │   │   └── skills.json
    │   │
    │   ├── images/      # Dossier contenant toutes les images
    │   │   ├── slideshow/
    │   │   ├── booki.avif
    │   │   ├── favicon.ico
    │   │   ├── gestion-de-projet.avif
    │   │   └── ...
    │   │
    │   ├── script/      # Dossier contenant tous les scripts JS
    │   │   ├── carousel.js
    │   │   ├── script.js
    │   │   └── ...
    │   │
    │   └── style/       # Dossier contenant tous les fichiers CSS
    │       ├── carousel.css
    │       ├── experiences.css
    │       ├── style.css
    │       └── ...
    │
    └── ...

## Carrousel d'entreprises
Les images du carrousel sont définies dans `data/carousel.json` :
```json
[
    { "src": "images/slideshow/entreprise1.jpg", "alt": "Entreprise 1" },
    { "src": "images/slideshow/entreprise2.jpg", "alt": "Entreprise 2" }
]
```
Le script `carousel.js` charge dynamiquement ces images et les affiche sous forme de diaporama automatique.

## Améliorations possibles
- Ajout d'un mode **dark/light**.
- Passage du carrousel en **React Slick**.
- Intégration d'une **page de blog**.

## Auteur
**Eric PRUDHOMME** - [LinkedIn](https://www.linkedin.com/in/eric-prudhomme/)

## Licence
Ce projet est sous licence MIT.

