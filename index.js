const navBtn = document.querySelector('#nav-button');
const closeNav = document.querySelector('#close-navlist');
const navList = document.querySelector('#nav-list');
const navListItems = document.querySelectorAll('#nav-list > ul > li');
navBtn.addEventListener('click', () => {
  navList.classList.remove('hide');
  navList.classList.add('mobile-menu');
});

closeNav.addEventListener('click', () => {
  navList.classList.add('hide');
  navList.classList.remove('mobile-menu');
});

navListItems.forEach((item) => item.addEventListener('click', () => {
  navList.classList.add('hide');
  navList.classList.remove('mobile-menu');
}));

function createPopupWindow(project) {
  const popupWindow = document.createElement('div');
  popupWindow.classList.add('popup-window');
  popupWindow.innerHTML = `<div>
    <a id="close-popup"><img src="./img/close-navlist.png" alt="Close Button"></a>
    <h2 class="card-header">${project.name}</h2>
    <ul class="card-badges"></ul>`;
  project.techs.forEach((item) => {
    popupWindow.querySelector('ul').innerHTML += `<li>${item}</li>`;
  });
  popupWindow.querySelector('div').innerHTML += `
    <div class="img-placeholder"><img src="${project.imgSrc}" alt="The project preview"></div>
    <p class='card-desc'>${project.desc}</p>
    <div class="btns-container">
      <a class="card-button" href="${project.liveUrl}" target="_blank">See Live</a>
      <a class="card-button" href="${project.srcUrl}" target="_blank">See Source</a>
    </div>`;
  document.body.appendChild(popupWindow);
  document.querySelector('html').style.overflow = 'hidden';
  const closePopup = document.querySelector('#close-popup');
  closePopup.addEventListener('click', () => {
    popupWindow.remove();
    document.querySelector('html').style.overflow = 'auto';
  });
}

function createProjectCard(project, isItLast) {
  const newCard = document.createElement('div');

  if (isItLast === 1) {
    newCard.innerHTML += `<img src="${project.imgSrc}" alt="The Project Preview"></img>`;
    newCard.id = 'last-work';
    newCard.innerHTML += `<div class="card-body">
      <h2 class='card-header'>${project.name}</h2>
      <p class='card-desc'>${project.desc}</p>
      <ul class='card-badges'>`;
    project.techs.forEach((item) => {
      newCard.querySelector('ul').innerHTML += `<li>${item}</li>`;
    });
    newCard.querySelector('.card-body').innerHTML += '<a class=\'card-button\'>See Project</a></div>';
    document.querySelector('#works').appendChild(newCard);
  } else {
    newCard.classList.add('work');
    newCard.innerHTML += `
      <div>
        <h2 class='card-header'>${project.name}</h2>
        <p class='card-desc'>${project.briefDesc}</p>
        <ul class='card-badges'>`;
    project.techs.forEach((item) => {
      newCard.querySelector('ul').innerHTML += `<li>${item}</li>`;
    });
    newCard.innerHTML += '<a class="card-button">See Project</a></div>';
    newCard.style.background = `url('${project.imgSrc}') no-repeat`;
    document.querySelector('#works').appendChild(newCard);
  }
  const popupBtn = newCard.querySelector('a');
  popupBtn.addEventListener('click', () => {
    createPopupWindow(project);
  });
}

const firstProject = {
  name: 'goCar',
  briefDesc: 'goCar is a web app to book cars online, after registering as user on the app you can access the available cars and book one of them if you like. The app is built with Ruby on Rails and React.JS.',
  desc: 'goCar is a web app to book cars online, after registering as user on the app you can access the available cars and book one of them if you like. The app is built with Ruby on Rails and React.JS where both back and front ends are integrated using a REST API.',
  imgSrc: './img/screenshot_gocar_desktop_1.png',
  techs: ['Ruby on Rails','PostgreSQL', 'React.JS', 'Redux'],
  liveUrl: 'https://gocar-frontend.vercel.app/',
  srcUrl: 'https://github.com/ouasamine/gocar-backend',
};

const projects = [
  {
    name: 'iBudget',
    briefDesc: 'iBudget is a useful web app to keep track of your transactions and organise them in groups.',
    desc: 'iBudget is a web mobile friendly app that supports user registration and authentication using the Devise gem, a user can create his own account on the app and after logging in she/he will be able to add categories and then add transactions under those categories, the app provide some metrics like the total value of transactions under each category, the app is built with Ruby on Rails framework.',
    imgSrc: './img/screenshot_ibudget_desktop_1.png',
    techs: ['Ruby on Rails','PostgreSQL', 'HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://i-budget-production.up.railway.app/groups',
    srcUrl: 'https://github.com/ouasamine/i-budget',
  },
  {
    name: 'Air Quality Index',
    briefDesc: 'Air Quality Index is a single page app that provide live data about the air quality in different cities.',
    desc: 'Air Quality Index is a single page app that provide live data about the air quality in different cities. The app uses an external API to fetch data and is built with React.JS, Redux.JS and JavaScript.',
    imgSrc: './img/air-quality.png',
    techs: ['React.JS','Redux.JS','JavaScript'],
    liveUrl: 'https://ouasamine.github.io/air-quality',
    srcUrl: 'https://github.com/ouasamine/air-quality',
  },
  {
    name: 'BookStore',
    briefDesc: 'An online books store where you can add your preffered books.',
    desc: 'Bookstore is books list page using an external API to store your preferred books with the ability to remove and add new books, the project is built with React.JS & Redux.JS.',
    imgSrc: './img/bookstore.png',
    techs: ['React.JS','Redux.JS','JavaScript'],
    liveUrl: 'https://bookstore-b254.netlify.app/',
    srcUrl: 'https://github.com/ouasamine/bookstore',
  },
  {
    name: 'TVmaze',
    briefDesc: 'TVmaze is a web app that presents details about different shows and gives the user the ability to like or comment on their preferred show.',
    desc: 'A multi pages web app about famous shows, it presents details about different shows and gives the user the ability to like or comment on their preferred show. The project was built with JavaScript ES6 and bundeled with Webpack.',
    imgSrc: './img/tvmaze.png',
    techs: ['HTML', 'CSS', 'JavaScript', 'Webpack'],
    liveUrl: 'https://ouasamine.github.io/tvmaze/',
    srcUrl: 'https://github.com/ouasamine/tvmaze',
  },
];

createProjectCard(firstProject, 1);

projects.forEach((project) => {
  createProjectCard(project);
});
const form = document.querySelector('#contact-form');
const { email } = form.elements;
const fullName = form.elements.full_name;
const msg = form.elements.message;
const msgContainer = document.querySelector('.msg-container');
const pattern = /[A-Z]/;
const invalidEmail = 'Please make sure that all characters in your email are lowercase!';

function showMsg(msg, container) {
  container.innerHTML = msg;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (pattern.test(email.value) === true) {
    showMsg(invalidEmail, msgContainer);
  } else {
    form.submit();
  }
});

const Data = {
  name: '',
  email: '',
  message: '',
};

const storedData = window.localStorage.getItem('Data');
const parsedData = JSON.parse(storedData);

form.addEventListener('change', () => {
  Data.email = email.value;
  Data.name = fullName.value;
  Data.message = msg.value;
  const strngData = JSON.stringify(Data);
  window.localStorage.setItem('Data', strngData);
});

if (storedData !== null) {
  email.value = parsedData.email;
  fullName.value = parsedData.name;
  msg.value = parsedData.message;
}