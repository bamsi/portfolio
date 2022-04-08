const hamburger = document.querySelector(".toggle-icon");
const closeIcon = document.querySelector(".close-icon");
const navMenu = document.querySelector(".nav-desktop");
const logoBrand = document.querySelector(".logo-brand");
const menuItems = document.querySelectorAll(".nav-link");
const iconClose = document.querySelectorAll(".icon-close");
const projectLink = document.querySelectorAll(".link-project");

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
const projects = [
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
    live: "https://bamsi.github.io/portfolio/",
    source: "https://github.com/bamsi/portfolio",
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
    live: "https://bamsi.github.io/portfolio/",
    source: "https://github.com/bamsi/portfolio",
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
    live: "https://bamsi.github.io/portfolio/",
    source: "https://github.com/bamsi/portfolio",
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
    live: "https://bamsi.github.io/portfolio/",
    source: "https://github.com/bamsi/portfolio",
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
    live: "https://bamsi.github.io/portfolio/",
    source: "https://github.com/bamsi/portfolio",
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
    live: "https://bamsi.github.io/portfolio/",
    source: "https://github.com/bamsi/portfolio",
  },
];

/** function to close model */
function closePopup() {
  const model = document.getElementById("model-container");
  const container = document.querySelector(".main-container");
  container.classList.remove("hide-main");
  model.classList.remove("show-popup");
}

function loadProjects() {
  const list = document.getElementById("project-list");
  let projectList = "";
  projects.forEach((item) => {
    projectList += `<li class="list-item">
    <div class="image-placeholder"></div>
    <div class="image-desc">
       <h3>${item.name}</h3>
   <div class="buttons">`;
    item.technologies.forEach((language) => {
      projectList += `<div>${language.name}</div>`;
    });
    projectList += `</div>
    <div class="button-link">
       <button class="button link-project" type="button" onclick="openProject()">See Project</button>
     </div>
    </div>
   </li>`;
  });

  list.innerHTML = projectList;
}
window.onload = function () {
  loadProjects();
};

function openProject() {
  const model = document.getElementById("model-container");
  const container = document.querySelector(".main-container");
  const item = projects[0];

  let innerHtml = `<div class="model">
                     <div class="model-placeholder">
                       <span class="icon-close" onclick="closePopup()"></span>
                     </div>
                      <h1 class="project-title">${item.name}</h1>
                      <div class="buttons">`;

  item.technologies.forEach((language) => {
    innerHtml += `<div>${language.name}</div>`;
  });
  innerHtml += `</div>
                <p class="model-description">${item.description}</p>
                <div class="project-buttons">
                <button class="model-button" onclick="window.open('${item.live}')" > <span>See Live</span> <span class="live-icon"><span> </button>
                <button class="model-button" onclick="window.open('${item.source}')"> <span>See Source</span> <span class="source-icon"><span> </button>
                </div>
                </div>`;
  model.innerHTML = innerHtml;
  container.classList.add("hide-main");
  model.classList.add("show-popup");
}

iconClose.forEach((n) => n.addEventListener("click", closePopup));
projectLink.forEach((n) => n.addEventListener("click", openProject));

/** validate email address */
const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  const email = document.getElementById("email");
  const error = document.getElementById("error");
  const pattern = /^([a-zd.-_]+)@([a-zd_-]+).([a-z-_]{2,8})(.[a-z-_]{2,8})?$/;
  const message = "You have entered an invalid email address!";
  if (!pattern.test(email.value)) {
    e.preventDefault();
    error.innerHTML = message;
  }
});
