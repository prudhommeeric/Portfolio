// Récupération du fichier JSON contenant les informations du carousel
fetch('data/carousel.json')
  .then(response => response.json()) // Parse JSON
  .then(data => {
    createCarousel(data);
  })
  .catch(error => {
    console.error("Erreur dans le fichier JSON :", error);
  });

// Fonction pour créer le carousel Bootstrap avec les données du fichier JSON
function createCarousel(data) {
  const container = document.getElementById('carousel-container');

  data.forEach((item, index) => {
    const div = document.createElement('div');
    div.classList.add('carousel-item');
    if (index === 0) div.classList.add('active'); // La première image doit être active

    const img = document.createElement('img');
    img.classList.add('d-block', 'w-100');
    img.src = item.src;
    img.alt = item.alt;

    div.appendChild(img);
    container.appendChild(div);
  });
}
