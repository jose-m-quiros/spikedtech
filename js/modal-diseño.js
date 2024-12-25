document.addEventListener("DOMContentLoaded", function () {
  const categoryButtons = document.querySelectorAll(".category-btn");

  categoryButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const link = this.getAttribute("data-link");
      window.open(link, "_blank"); 
    });
  });
});
