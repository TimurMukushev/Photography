function app() {
  const buttons = document.querySelectorAll(".section-work__titles-toggle");
  const cards = document.querySelectorAll(".same-size");

  function filter(category, items) {
    items.forEach((item) => {
      const isItemFiltered = !item.classList.contains(category);
      const isShowAll = category.toLowerCase() === "all";
      if (isItemFiltered && !isShowAll) {
        item.classList.add("hide");
      } else {
        item.classList.remove("hide");
      }
    });
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const currentCategory = button.dataset.filter;
      filter(currentCategory, cards);
    });
  });
}

app();
