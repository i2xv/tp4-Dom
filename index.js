// Créer un événement au click sur le hamburger menu pour sortir la sidebar, ranger la sidebar si on reclick dessus

// Ranger la sidebar si on click sur le contenu principal

// BONUS
// Créer en css l'hamburger menu qui se transforme en croix

// Aide
// Priorités en CSS : id > classe > baliseHtml
const content = document.querySelector(".content");

content.addEventListener("click", () => {
  sideBar.classList.remove("sidebar-actived");
});

btn.addEventListener("click", (e) => {
  sideBar.classList.toggle("sidebar-actived");
});
