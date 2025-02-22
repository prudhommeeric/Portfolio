// Function to add the "navbarDark" class to the navbar on scroll
function handleNavbarScroll() {
    const header = document.querySelector(".navbar");
    window.onscroll = function () {
        const top = window.scrollY;
        if (top >= 100) {
            header.classList.add("navbarDark");
        } else {
            header.classList.remove("navbarDark");
        }
    };
}

// Function to handle navbar collapse on small devices after a click
function handleNavbarCollapse() {
    const navLinks = document.querySelectorAll(".nav-item");
    const menuToggle = document.getElementById("navbarSupportedContent");

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            new bootstrap.Collapse(menuToggle).toggle();
        });
    });
}

// Function to dynamically create HTML elements from the skills JSON file
function createSkillsFromJSON() {
    const container = document.querySelector("#skills .container");
    let row = document.createElement("div");
    row.classList.add("row");

    // Load the JSON file
    fetch("src/assets/data/skills.json") // Mise à jour du lien
        .then((response) => response.json())
        .then((data) => {
            // Iterate through the JSON data and create HTML elements
            data.forEach((item, index) => {
                const card = document.createElement("div");
                card.classList.add("col-lg-4", "mt-4");
                card.innerHTML = `
                    <div class="card skillsText">
                        <div class="card-body">
                            <img src="src/assets/images/${item.image}" alt="${item.alt}" /> <!-- Mise à jour du lien d'image -->
                            <h3 class="card-title mt-3">${item.title}</h3>
                            <p class="card-text mt-3">${item.text}</p>
                        </div>
                    </div>
                `;

                // Append the card to the current row
                row.appendChild(card);

                // If the index is a multiple of 3 or it's the last element, create a new row
                if ((index + 1) % 3 === 0 || index === data.length - 1) {
                    container.appendChild(row);
                    row = document.createElement("div");
                    row.classList.add("row");
                }
            });
        });
}

// Function to dynamically create HTML elements from the portfolio JSON file
function createPortfolioFromJSON() {
    const container = document.querySelector("#portfolio .container");
    let row = document.createElement("div");
    row.classList.add("row");

    // Load the JSON file
    fetch("src/assets/data/portfolio.json") // Mise à jour du lien
        .then((response) => response.json())
        .then((data) => {
            // Iterate through the JSON data and create HTML elements
            data.forEach((item, index) => {
                const card = document.createElement("div");
                card.classList.add("col-lg-4", "mt-4");
                card.innerHTML = `
                    <div class="card portfolioContent">
                    <img class="card-img-top" src="src/assets/images/${item.image}" alt="${item.alt}" style="width:100%"> <!-- Mise à jour du lien d'image -->
                    <div class="card-body">
                        <h3 class="card-title">${item.title}</h3>
                        <p class="card-text">${item.text}</p>
                        <div class="text-center">
                            <a href="${item.link}" class="btn btn-success" target="_blank">Lien</a>
                        </div>
                    </div>
                </div>
                `;

                // Append the card to the current row
                row.appendChild(card);

                // If the index is a multiple of 3 or it's the last element, create a new row
                if ((index + 1) % 3 === 0 || index === data.length - 1) {
                    container.appendChild(row);
                    row = document.createElement("div");
                    row.classList.add("row");
                }
            });
        });
}

// Charger les données JSON et créer l'accordéon
function createAccordionFromJSON() {
    fetch("src/assets/data/experiences.json") // Mise à jour du lien
        .then(response => response.json())
        .then(data => {
            const accordionContainer = document.getElementById("accordionContainer");
            if (!accordionContainer) return;

            data.forEach((experience, id) => {

                const accordionItem = document.createElement("div");
                accordionItem.classList.add("accordion-item");

                const header = document.createElement("div");
                header.classList.add("accordion-header");

                const button = document.createElement("button");
                button.classList.add("accordion-button", "collapsed"); // Assure que le bouton est "collapsed" au départ
                button.type = "button";
                button.setAttribute("data-bs-toggle", "collapse");
                button.setAttribute("data-bs-target", `#collapse${id}`);
                button.setAttribute("aria-expanded", "false");
                button.setAttribute("aria-controls", `collapse${id}`);
                button.textContent = `${experience.entreprise} - ${experience.poste}`;

                header.appendChild(button);

                const body = document.createElement("div");
                body.id = `collapse${id}`;
                body.classList.add("accordion-collapse", "collapse"); // Assure que le corps est fermé au départ
                body.setAttribute("data-bs-parent", "#accordionContainer"); // Assure que seul un élément est ouvert à la fois

                const bodyContent = document.createElement("div");
                bodyContent.classList.add("accordion-body");

                bodyContent.innerHTML = `
                    <strong>Période:</strong> ${experience.periode}<br>
                    <strong>Contexte du projet:</strong> ${experience.projet_contexte}<br>
                    <strong>Outils:</strong> ${experience.outils}<br>
                    <strong>Méthodes:</strong> ${experience.methodes}<br>
                    <strong>Prestations réalisées:</strong>
                    <ul>
                        ${experience.prestations_realisees.map(prestation => `<li>${prestation}</li>`).join('')}
                    </ul>
                `;

                body.appendChild(bodyContent);
                accordionItem.appendChild(header);
                accordionItem.appendChild(body);
                accordionContainer.appendChild(accordionItem);
            });

            // Initialiser Bootstrap Collapse sur tous les éléments
            const collapses = document.querySelectorAll('.accordion-collapse');
            collapses.forEach(collapseElement => {
                new bootstrap.Collapse(collapseElement, {
                    toggle: false // Assure que les éléments sont fermés au démarrage
                });
            });
        })
        .catch(error => console.log("Erreur de chargement des expériences:", error));
}

// Call the functions to execute the code
handleNavbarScroll();
handleNavbarCollapse();
createSkillsFromJSON();
createPortfolioFromJSON();
createAccordionFromJSON();
