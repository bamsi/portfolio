const hamburger = document.querySelector('.toggle-icon');
const closeIcon = document.querySelector('.close-icon');
const navMenu = document.querySelector('.nav-desktop');
const logoBrand = document.querySelector('.logo-brand');
const menuItems = document.querySelectorAll('.nav-link');
const iconClose = document.querySelectorAll('.icon-close');
const projectLink = document.querySelectorAll('.link-project');

function showMenu() {
  navMenu.classList.toggle('nav-mobile');
  hamburger.classList.toggle('hide');
  closeIcon.classList.toggle('show');
  logoBrand.classList.toggle('hide');
}

function hideMenu() {
  hamburger.classList.remove('hide');
  closeIcon.classList.remove('show');
  logoBrand.classList.remove('hide');
  navMenu.classList.remove('nav-mobile');
}

[hamburger, closeIcon].forEach((item) => {
  item.addEventListener('click', showMenu);
});

menuItems.forEach((n) => n.addEventListener('click', hideMenu));

/** define project object */
const projects = [
  {
    name: 'Budget Application',
    description:
      'Budget app is about building a mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what.',
    image: 'images/budget-app.png',
    technologies: [
      { name: 'Ruby on rails' },
      { name: 'Bootstrap' },
      { name: 'Postgres' },
    ],
    live: 'https://evening-lowlands-65023.herokuapp.com/',
    source: 'https://github.com/bamsi/budget-app',
  },
  {
    name: "Space Traveler's Hub",
    description:
      'A web application for a company that provides commercial and scientific space travel services. This application allows users to book rockets and join selected space missions.',
    image: 'images/space.jfif',
    technologies: [
      { name: 'React Redux' },
      { name: 'API' },
      { name: 'CSS' },
      { name: 'Html' },
    ],
    live: 'https://space-hub1.netlify.app/',
    source: 'https://github.com/Mikelobi/space-travelers-hub',
  },
  {
    name: 'Math Magician',
    description:
      '"Math magicians" is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to: Make simple calculations. -Read a random math-related quote.',
    image: 'images/math.png',
    technologies: [
      { name: 'React' },
      { name: 'CSS' },
      { name: 'Javascript' },
      { name: 'Html' },
    ],
    live: 'https://react-mathmagician.herokuapp.com/',
    source: 'https://github.com/bamsi/math-magician',
  },
  {
    name: 'Leader Board',
    description:
      'This is a project structure for the leader board which has been designed using html, css, javascript , and webpack.',
    image: 'images/leaderboard.png',
    technologies: [
      { name: 'APIs' },
      { name: 'CSS' },
      { name: 'Javascript(ES6)' },
      { name: 'Html' },
    ],
    live: 'https://kaleidoscopic-flan-2fcb9c.netlify.app/',
    source: 'https://github.com/bamsi/leaderboard',
  },
  {
    name: 'Jukwaa',
    description:
      'This is a forum for sharing tips about lifestyle diseases. The website has been designed to address the challenge of non communicable disease which is currently affecting lives of young men and women.',
    image: 'images/jukwaa.png',
    technologies: [
      { name: 'Bootstrap' },
      { name: 'CSS' },
      { name: 'Javascript' },
      { name: 'Html' },
    ],
    live: 'https://bamsi.github.io/jukwaa/',
    source: 'https://github.com/bamsi/jukwaa',
  },
  {
    name: 'School Management System',
    description:
      "This is a school management system designed to manage school operations. The system features include: student Registration, Student Academic Performance, Student Fees, Payment Management, Parent's Feedbac,k and Notice Board",
    image: 'images/skongaweb.jfif',
    technologies: [
      { name: 'Laravel' },
      { name: 'Angular' },
      { name: 'PrimeNG' },
      { name: 'Postgres' },
    ],
    live: 'https://skongaweb.com/',
    source: 'https://github.com/bamsi/skongaweb-ui',
  },
];

/** function to close model */
function closePopup() {
  const model = document.getElementById('model-container');
  const container = document.querySelector('.main-container');
  container.classList.remove('hide-main');
  model.classList.remove('show-popup');
}

function loadProjects() {
  const list = document.getElementById('project-list');
  let projectList = '';
  projects.forEach((item, index) => {
    projectList += `<li class="list-item">
    <div class="image-placeholder">
     <img src="${item.image}" alt="${item.name}" />
    </div>
    <div class="image-desc">
       <h3>${item.name}</h3>
   <div class="buttons">`;
    item.technologies.forEach((language) => {
      projectList += `<div>${language.name}</div>`;
    });
    projectList += `</div>
    <div class="button-link">
       <button class="button link-project" type="button" onclick="openProject(${index})">See Project</button>
     </div>
    </div>
   </li>`;
  });

  list.innerHTML = projectList;
}

function openProject(index) {
  const model = document.getElementById('model-container');
  const container = document.querySelector('.main-container');
  const item = projects[index];
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
  container.classList.add('hide-main');
  model.classList.add('show-popup');
}

iconClose.forEach((n) => n.addEventListener('click', closePopup));
projectLink.forEach((n) => n.addEventListener('click', openProject));

/** create form object */

function store() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  const formData = {
    name,
    email,
    message,
  };
  window.localStorage.setItem('form_data', JSON.stringify(formData));
}

/** validate email address */
const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
  const email = document.getElementById('email');
  const error = document.getElementById('error');
  const pattern =
    /^([a-zd.\-_]+)@([a-zd\-_]+).([a-z\-_]{2,8})(.[a-z\-_]{2,8})?$/;
  const message = 'You have entered an invalid email address!';
  if (!pattern.test(email.value)) {
    e.preventDefault();
    error.innerHTML = message;
  }
  store();
});

function readData() {
  const formData = JSON.parse(window.localStorage.getItem('form_data'));
  document.getElementById('name').value = formData?.name;
  document.getElementById('email').value = formData?.email;
  document.getElementById('message').value = formData?.message;
}

window.onload = function () {
  loadProjects();
  readData();
};

// this implementation of smooth scrolling between several areas.
$('.nav a').on('click', function (e) {
  if (this.hash !== '') {
    e.preventDefault();
    const hashValue = this.hash;
    $('html, body').animate(
      {
        scrollTop: $(hashValue).offset().top,
      },
      900
    );
  }
});
