 
const subcontainer = document.querySelector(".subcontainer");
const img = document.querySelector(".img");
const header = document.querySelector(".header img");
const description = document.querySelector(".info h3");

// Animate In

card.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  title.style.transform = "translateZ(3px)";
  header.style.transform = "translateZ(3px) rotateZ(0deg)";
  description.style.transform = "translateZ(3px)";
});

// Animate Out

card.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  title.style.transform = "translateZ(0px)";
  header.style.transform = "translateZ(0px) rotateZ(0deg)";
  description.style.transform = "translateZ(0px)";
});