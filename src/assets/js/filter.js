// filter buttons
const computersSection = document.querySelector(".computers-section");
const filterByBrandButton = document.querySelector(".filter-by-brand-button");
const filterByTypeButton = document.querySelector(".filter-by-type-button");
const filterByConditionButton = document.querySelector(
  ".filter-by-condition-button",
);

filterByBrandButton.addEventListener("click", () => {
  computersSection.classList.toggle("active-brand");
});
filterByTypeButton.addEventListener("click", () => {
  computersSection.classList.toggle("active-type");
});
filterByConditionButton.addEventListener("click", () => {
  computersSection.classList.toggle("active-condition");
});
//filter javascript

const checkboxes = document.querySelectorAll('.filters input[type="checkbox"]');
const allCheckbox = document.querySelector('.filters input[value="all"]');
const cards = document.querySelectorAll(".computer-card");

function filterCards() {
  const checkedBrands = Array.from(
    document.querySelectorAll(".filter-brands input:checked"),
  ).map((cb) => cb.value);
  const checkedTypes = Array.from(
    document.querySelectorAll(".filter-types input:checked"),
  ).map((cb) => cb.value);
  const checkedConditions = Array.from(
    document.querySelectorAll(".filter-conditions input:checked"),
  ).map((cb) => cb.value);

  // If nothing is checked, check "All" and show everything
  if (
    checkedBrands.length === 0 &&
    checkedTypes.length === 0 &&
    checkedConditions.length === 0
  ) {
    allCheckbox.checked = true;
    cards.forEach(
      (card) => (card.closest(".card-container").style.display = "flex"),
    );
    return;
  }

  cards.forEach((card) => {
    const brandMatch =
      checkedBrands.length === 0 || checkedBrands.includes(card.dataset.brand);
    const typeMatch =
      checkedTypes.length === 0 || checkedTypes.includes(card.dataset.type);
    const conditionMatch =
      checkedConditions.length === 0 ||
      checkedConditions.includes(card.dataset.condition);

    // AND logic between groups — card must match all selected groups
    card.closest(".card-container").style.display =
      brandMatch && typeMatch && conditionMatch ? "flex" : "none";
  });
}

// Handle "All" checkbox
allCheckbox.addEventListener("change", () => {
  if (allCheckbox.checked) {
    checkboxes.forEach((cb) => {
      if (cb.value !== "all") cb.checked = false;
    });
    cards.forEach(
      (card) => (card.closest(".card-container").style.display = "flex"),
    );
  } else {
    allCheckbox.checked = true;
  }
});

// Handle all other checkboxes
checkboxes.forEach((checkbox) => {
  if (checkbox.value === "all") return;

  checkbox.addEventListener("change", () => {
    allCheckbox.checked = false;
    filterCards();
  });
});
