let hamburger = document.querySelector(".toggle-icon");
let close_icon = document.querySelector(".close-icon");
let nav_menu = document.querySelector(".nav-desktop");
let logo_brand = document.querySelector(".logo-brand");
let menu_items = document.querySelectorAll(".nav-link");

[hamburger, close_icon].forEach((item) => {
  item.addEventListener("click", showMenu);
});

menu_items.forEach((n) => n.addEventListener("click", hideMenu));

function showMenu() {
  nav_menu.classList.toggle("nav-mobile");
  hamburger.classList.toggle("hide");
  close_icon.classList.toggle("show");
  logo_brand.classList.toggle("hide");
}

function hideMenu() {
  hamburger.classList.remove("hide");
  close_icon.classList.remove("show");
  logo_brand.classList.remove("hide");
  nav_menu.classList.remove("nav-mobile");
}
