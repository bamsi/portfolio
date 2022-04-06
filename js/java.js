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

/** define project object */
let projects = [
  {
    name: "Multi-Post Stories Gain+Glory",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima error,doloremque reprehenderit debitis quam molestias vel, consequuntur autem neque temporibus, magni id. Dolorum vero voluptatibus aspernatur animi,eos nesciunt. Exercitationem.",
    image: "images/image.svg",
    technologies: [
      { name: "Ruby on rails" },
      { name: "CSS" },
      { name: "Javascript" },
      { name: "Html" },
    ],
    live: "#",
    source: "#",
  },
  {
    name: "Multi-Post Stories Gain+Glory",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima error,doloremque reprehenderit debitis quam molestias vel, consequuntur autem neque temporibus, magni id. Dolorum vero voluptatibus aspernatur animi,eos nesciunt. Exercitationem.",
    image: "images/image.svg",
    technologies: [
      { name: "Ruby on rails" },
      { name: "CSS" },
      { name: "Javascript" },
      { name: "Html" },
    ],
    live: "#",
    source: "#",
  },
  {
    name: "Multi-Post Stories Gain+Glory",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima error,doloremque reprehenderit debitis quam molestias vel, consequuntur autem neque temporibus, magni id. Dolorum vero voluptatibus aspernatur animi,eos nesciunt. Exercitationem.",
    image: "images/image.svg",
    technologies: [
      { name: "Ruby on rails" },
      { name: "CSS" },
      { name: "Javascript" },
      { name: "Html" },
    ],
    live: "#",
    source: "#",
  },
  {
    name: "Multi-Post Stories Gain+Glory",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima error,doloremque reprehenderit debitis quam molestias vel, consequuntur autem neque temporibus, magni id. Dolorum vero voluptatibus aspernatur animi,eos nesciunt. Exercitationem.",
    image: "images/image.svg",
    technologies: [
      { name: "Ruby on rails" },
      { name: "CSS" },
      { name: "Javascript" },
      { name: "Html" },
    ],
    live: "#",
    source: "#",
  },
  {
    name: "Multi-Post Stories Gain+Glory",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima error,doloremque reprehenderit debitis quam molestias vel, consequuntur autem neque temporibus, magni id. Dolorum vero voluptatibus aspernatur animi,eos nesciunt. Exercitationem.",
    image: "images/image.svg",
    technologies: [
      { name: "Ruby on rails" },
      { name: "CSS" },
      { name: "Javascript" },
      { name: "Html" },
    ],
    live: "#",
    source: "#",
  },
  {
    name: "Multi-Post Stories Gain+Glory",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    image: "images/image.svg",
    technologies: [
      { name: "Ruby on rails" },
      { name: "CSS" },
      { name: "Javascript" },
      { name: "Html" },
    ],
    live: "#",
    source: "#",
  },
];
