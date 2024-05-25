document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav ul li a");

  links.forEach((link) => {
    link.addEventListener("mouseover", () => {
      link.style.transition = "color 0.3s ease-in-out";
      link.style.color = "#00ff00";
    });
    link.addEventListener("mouseout", () => {
      link.style.transition = "color 0.3s ease-in-out";
      link.style.color = "";
    });
  });
});
