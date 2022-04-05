let hamburger = document.querySelector(".toggle-icon");
let close_icon = document.querySelector(".close-icon");
let nav_menu = document.querySelector(".nav-desktop");
let main_container = document.querySelector(".main-container");
let menu_items = document.querySelectorAll(".nav-link");

[hamburger, close_icon].forEach((item) => {
  item.addEventListener("click", showMenu);
});

menu_items.forEach((n) => n.addEventListener("click", hideMenu));

function showMenu() {
  nav_menu.classList.toggle("nav-mobile");
  hamburger.classList.toggle("hide");
  close_icon.classList.toggle("show");
  main_container.classList.toggle("menu-background");
}

function hideMenu() {
  hamburger.classList.remove("hide");
  close_icon.classList.remove("show");
  main_container.classList.remove("menu-background");
  nav_menu.classList.remove("nav-mobile");
}
