const panels = document.querySelector(".panels");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClass();
    panel.classList.add("active");
  });
});

// All 5 panels activate on click, so add this function to remove it on the other ones
function removeActiveClass() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
