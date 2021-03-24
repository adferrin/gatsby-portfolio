import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Austin Ferrin', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, I am',
  name: 'Austin Ferrin',
  subtitle: 'Former Chef turned Software Dev',
  cta: 'Know More',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://docs.google.com/document/d/e/2PACX-1vQO4QwUsAfT3HHwqqBtRxxbKUxfq4d8_sy7YGSuIPCATquvLjFVarfSeScVDJ69dKz1J2xP1sxWv0Af/pub', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'NightOwl.jpg',
    title: 'Night Owl',
    info: 'This is a group project',
    info2: '',
    url: 'https://seir629-nightowl.herokuapp.com/',
    repo: 'https://github.com/adferrin/videorange', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'DevCenter.png',
    title: 'Dev Center',
    info: 'This is a group project',
    info2: '',
    url: 'https://devcenter-629.herokuapp.com/',
    repo: 'https://github.com/adferrin/DevCenter', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to talk?',
  btn: 'Contact me!',
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
