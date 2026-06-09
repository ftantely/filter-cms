// add classes for mobile navigation toggling
var CSbody = document.querySelector("body");
const CSnavbarMenu = document.querySelector("#cs-navigation");
const CShamburgerMenu = document.querySelector("#cs-navigation .cs-toggle");
const csActive = document.querySelector("#cs-navigation .cs-active");
const cSDropDownButton = document.querySelector(
  "#cs-navigation .cs-dropdown-button",
);
const cSDropDown = document.querySelector("#cs-navigation .cs-dropdown");
//Add classes to navbar
CShamburgerMenu.addEventListener("click", function () {
  CShamburgerMenu.classList.toggle("cs-active");
  CSnavbarMenu.classList.toggle("cs-active");
  CSbody.classList.toggle("cs-open");

  // run the function to check the aria-expanded value
  ariaExpanded();
});
//Add classes to dropdown
cSDropDownButton.addEventListener("click", function () {
  cSDropDown.classList.toggle("cs-service-active");
});
function ariaExpanded() {
  const csUL = document.querySelector("#cs-expanded");
  const csExpanded = csUL.getAttribute("aria-expanded");

  if (csExpanded === "false") {
    csUL.setAttribute("aria-expanded", "true");
  } else {
    csUL.setAttribute("aria-expanded", "false");
  }
}
