const hamburger = document.querySelector(".toggle-icon");
const closeIcon = document.querySelector(".close-icon");
const navMenu = document.querySelector(".nav-desktop");
const logoBrand = document.querySelector(".logo-brand");
const menuItems = document.querySelectorAll(".nav-link");

function showMenu() {
  navMenu.classList.toggle("nav-mobile");
  hamburger.classList.toggle("hide");
  closeIcon.classList.toggle("show");
  logoBrand.classList.toggle("hide");
}

function hideMenu() {
  hamburger.classList.remove("hide");
  closeIcon.classList.remove("show");
  logoBrand.classList.remove("hide");
  navMenu.classList.remove("nav-mobile");
}

[hamburger, closeIcon].forEach((item) => {
  item.addEventListener("click", showMenu);
});

menuItems.forEach((n) => n.addEventListener("click", hideMenu));
