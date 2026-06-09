const csCtaContainer = document.querySelector(".cs-cta-container");
const csCta = document.querySelector(".cs-cta");

csCta.addEventListener("click", (e) => {
  csCtaContainer.classList.toggle("cs-selected");
});
