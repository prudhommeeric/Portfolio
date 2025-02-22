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
portfolio/
│── index.html        # Page principale
│── style.css         # Feuille de style principale
│── carousel.css      # Styles du carrousel
│── script/
│   ├── script.js     # Script général
│   ├── carousel.js   # Script du carrousel
│── data/
│   ├── carousel.json # Données du carrousel
│── images/           # Dossier contenant les images
```

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

