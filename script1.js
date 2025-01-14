
const projects = [
{
 img: "tv.mp4", // Video file for this project
 title: "frusto.ma",
 description: "J'ai conçu et optimisé le site e-commerce frusto.ma, une plateforme WordPress dédiée à la vente de produits uniques en ligne. Ce projet met en valeur mon expertise en création de sites web intuitifs et performants pour l'expérience utilisateur.",
 type: "video"
},
{
 img: "tv2.mp4",
 title: "englighting.ma",
 description: "Dans le cadre du projet englighting.ma, j'ai collaboré avec une équipe professionnelle pour réaliser la partie design et gérer les campagnes d'emailing, garantissant une communication visuelle et stratégique efficace.",
 type: "video"
},
{
 img: "2.jpg", // Video file for this project
 title: "Pmta port25",
 description: "j'ai configuré une capture PMTA (Port25) avec authentifications SPF, DKIM, et DMARC, tout en gérant une base de données et des IP propres validées par Spamhaus pour des campagnes d'emailing optimisées.",
 type: "image"
},
{
 img: "p4.png",
 title: "fechier.Bat",
 description: "Dans le cadre du projet 4, j'ai démontré mon expertise en création et optimisation de fichiers .bat, automatisant des tâches complexes pour améliorer l'efficacité et réduire les processus manuels.",
 type: "image"
},

];

let currentIndex = 0;

// Select DOM elements
const mediaContainer = document.getElementById("carousel-media");
const titleElement = document.getElementById("carousel-title");
const descriptionElement = document.getElementById("carousel-description");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

// Function to update the carousel content
function updateCarousel(index) {
const project = projects[index];

// Clear the current media content
mediaContainer.innerHTML = "";

// Determine if the media is an image or video
if (project.type === "image") {
 const img = document.createElement("img");
 img.src = project.img;
 img.alt = project.title;
 img.style.maxWidth = "100%";
 img.style.borderRadius = "8px";
 mediaContainer.appendChild(img);
} else if (project.type === "video") {
 const video = document.createElement("video");
 video.src = project.img;
 video.controls = true;
 video.autoplay = true;
 video.loop = true;
 video.style.maxWidth = "100%";
 video.style.borderRadius = "8px";
 mediaContainer.appendChild(video);
}

// Update title and description
titleElement.textContent = project.title;
descriptionElement.textContent = project.description;
}

// Event listeners for navigation
leftArrow.addEventListener("click", () => {
currentIndex = (currentIndex - 1 + projects.length) % projects.length;
updateCarousel(currentIndex);
});

rightArrow.addEventListener("click", () => {
currentIndex = (currentIndex + 1) % projects.length;
updateCarousel(currentIndex);
});

// Initialize with the first project
updateCarousel(currentIndex);






