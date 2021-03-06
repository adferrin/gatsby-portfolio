import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Austin Ferrin', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, I\'m',
  name: 'Austin Ferrin',
  subtitle: 'Former Chef turned Software Dev',
  cta: 'Know More',
};

// ABOUT DATA
export const aboutData = {
  img: 'profilePic.jpeg',
  paragraphOne: 'I was a Chef for 13 years starting out as a dishwasher working my way up to head Chef. Now I am taking on software development from the ground up.',
  paragraphTwo: "I graduated from the software immersive program at General Assembly in 2020 for my foundational knowledge. I also have Free Code Camp\'s certifications for JavaScript Algorithms and Data Structures & Front End Libraries. Just as I did in the kitchen, I solve complex problems with tried and true process coupled with technique.",
  paragraphThree: 'So far, my skills include JavaScript - Python - MongoDB - PostgreSQL - React - Gatsby - Django - Express - Node.js - RESTFUL Routing - MVC ',
  resume: 'https://docs.google.com/document/d/e/2PACX-1vQO4QwUsAfT3HHwqqBtRxxbKUxfq4d8_sy7YGSuIPCATquvLjFVarfSeScVDJ69dKz1J2xP1sxWv0Af/pub', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'NightOwl.jpg',
    title: 'Night Owl',
    info: 'This project was a MERN stack and included JSONwebToken, Bcrypt, and Socket.io. This app creates private rooms for groups to search, queue, and dispaly youtube videos in real time using socket.io to chat.',
    info2: '',
    url: 'https://seir629-nightowl.herokuapp.com/',
    repo: 'https://github.com/adferrin/videorange', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'DevCenter.png',
    title: 'Dev Center',
    info: 'This application is designed to condense clutter in your broswer by authentication with third party API\'s for one homescreen. It allows basic function of those apps and is a full stack app including Python, Django, PostgreSQL, SocialOAuth, PyGitHub, and Tweepy.',
    info2: '',
    url: 'https://devcenter-629.herokuapp.com/',
    repo: 'https://github.com/adferrin/DevCenter', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Racette.png',
    title: 'Racette',
    info: 'Racette is an app that creates and stores your favorite recipes. It includes Mongoose, Espress, Node.js, Materialize, and Google OAuth for security.',
    info2: '',
    url: 'https://recipe-app-adf.herokuapp.com/',
    repo: 'https://github.com/adferrin/recipe-app', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Let\'s Chat',
  btn: 'Email me!',
  email: 'Adferrin@icloud.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
  //  {
  //    id: nanoid(),
  //    name: 'twitter',
  //    url: '',
  //  },
  //  {
  //    id: nanoid(),
  //    name: 'codepen',
  //    url: '',
  //  },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/austin-ferrin-1798641b2/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/adferrin',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
