import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

export const english_translations = {
  // Hero Section

  "first-job-header": "SOFTWARE",
  "second-job-header": "ENGINEER",
  "long-download-cv": "My Resume!",
  "short-download-cv": "My Resume!",
  "available-languages": "Available Languages",

  // Technologies Section

  technologies: "Technologies",
  all: "All",
  "programming-languages": "Languages",
  frontend: "Frontend",
  backend: "Backend",
  devops: "DevOps",
  ides: "IDEs",

  "all-caption":
    "I've worked with a bunch of technologies, but these are the ones I feel the most comfortable with. I do mostly Web Dev and Low-Level side projects",

  "programming-languages-caption":
    "These are the ones I've used the most. My native language is C++, so learning others has been a breeze. I tend to lean to JS/TS and Python solutions on real projects",

  "frontend-caption":
    "Probably the field I've worked the most with. I like building intuitive and appealing UIs so that the UX is seamless. I also value reusability and a fast dev experience",

  "backend-caption":
    "I like using JS/TS on the backend to be consistent with the frontend. But of course, the right tech stack should depend on the job's nature",

  "devops-caption":
    "These might feel like miscellaneous tools, but bear with me! CI/CD is really a game-changer! especially in real-life projects. I'm also used to linux since I use arch, btw",

  "ides-caption":
    "Nowadays, I just stick to Neovim, since I've customized it and feel really comfortable and in control. I also love vim motions, it's really cool once you get the hang of it!",

  // Spoken Languages Section

  "spoken-languages": "Spoken Languages",
  "spoken-languages-caption": "Click on the cards to read an example!",
  "native": "Native",

  spanish: "Spanish",
  english: "English",
  french: "French",
  german: "German",
  portuguese: "Portuguese",
  japanese: "Japanese",

  "spanish-caption":
    "As my native language, it's helped me a great deal to learn other languages that share several traits!",
  "english-caption":
    "It's sort of my default language for my studies, online life and even my entertainment, so I'm pretty used to it",
  "french-caption":
    "My favorite one! It's been quite easy for me to pick up. Plus, I love Francophone YouTube and Music",
  "german-caption":
    "It's not as hard as I once thought. I'm far better listening and reading than speaking, but I'm still learning!",
  "portuguese-caption":
    "I'm really into how it sounds. As a Spanish speaker, it's fairly easy, but it's still its own different language",
  "japanese-caption":
    "I'm kind of rusty, but I love it! I don't practice enough since I'm focused on other languagues at the moment",
  
  // Projects Section

  "projects-header": "Projects",
  "projects-caption": "Click on the cards to watch a short demo!",

  "freelance-bagde": "Freelance",
  "project-badge": "Project",
  "university-badge": "University",

  "apolo-caption":
    "UX-focused automatic student enrollment projection & academic scheduling web app for the UGMA university where I built the entire frontend",
  "woolly-breakout-caption":
    "2D real-time local multiplayer cross-platform game built with client-server architecture and TCP sockets",
  "asia-bar-caption":
    "Led and built most of a POS & kitchen ticket generation system for a local restaurant",
  "chess-caption":
    "Cross-platform chess clone integrating a custom bot made with a minmax backtracking AI algorithm",
  "library-caption":
    "Circulation loans management system built for the Julián Temístocles Maza public library",

  // Footer 
  email: "Email",
  letsConnect: "Let's Connect!"
};

export const spanish_translations = {
  // Hero Section

  "first-job-header": "INGENIERO",
  "second-job-header": "DE SOFTWARE",
  "long-download-cv": "¡Descarga mi CV!",
  "short-download-cv": "¡Obtén mi CV!",
  "available-languages": "Idiomas Disponibles",

  // Technologies Section

  technologies: "Tecnologías",
  all: "Todas",
  "programming-languages": "Lenguajes",
  frontend: "Frontend",
  backend: "Backend",
  devops: "DevOps",
  ides: "IDEs",

  "all-caption": "He trabajado con muchas tecnologías. Estas son aquellas con las que me siento más cómodo. Suelo hacer desarrollo web y proyectos personales de bajo nivel",

  "programming-languages-caption": "Estos son aquellos con los que mejor me llevo. Mi lenguaje nativo es C++, así que aprender otros ha sido pan comido. Suelo usar JS/TS y Python en soluciones reales",

  "frontend-caption": "Donde más he trabajado. Me gusta concebir UIs intuitivas y llamativas para mejorar la UX. También valoro la reusabilidad y rápida experiencia de desarrollo",

  "backend-caption": "Me gusta usar JS/TS en el back para ser consistente con el frontend. Pero, al final del día, el stack debe depender de los requerimientos de la aplicación",

  "devops-caption": "Pueden parecer misceláneas, ¡pero CI/CD es superimportante en producción! También estoy acostumbrado a linux porque uso Arch, btw",

  "ides-caption": "Hoy día, uso Neovim, ya que lo he personalizado mucho y me siento bastante en control. Una vez te acostumbras a las vim motions, ¡No hay vuelta atrás!",

  // Spoken Languages Section

  "spoken-languages": "Mis Idiomas",
  "spoken-languages-caption": "¡Cliquea las cartas para ver ejemplos!",
  "native": "Nativo",

  spanish: "Español",
  english: "Inglés",
  french: "Francés",
  german: "Alemán",
  portuguese: "Portugués",
  japanese: "Japonés",

  "spanish-caption": "Como mi idioma materno, me ha ayudado enormemente a aprender otros con similitudes",
  "english-caption": "Es mi idioma por defecto en cuanto a estudios o vida en línea y entretenimiento, así que estoy acostumbrado",
  "french-caption": "¡Mi favorito! Ha sido fácil para mí, además de que me encanta la música y YouTube francófono",
  "german-caption": "No es tan complicado como pensaba. Soy mucho mejor escuchando y leyendo que hablando, ¡pero sigo aprendiendo!",
  "portuguese-caption": "Me encanta su fonética. Como hispano, me ha sido sencillo, pero sigue siendo su propia lengua",
  "japanese-caption": "Ando oxidado, ¡pero lo adoro! No practico suficiente porque estoy enfocado en otros idiomas",
  
  // Projects Section

  "projects-header": "Proyectos",
  "projects-caption": "¡Cliquea las cartas para ver una demo corta!",

  "freelance-bagde": "Freelance",
  "project-badge": "Proyecto",
  "university-badge": "Universidad",

  "apolo-caption": "Web app enfocada en UX para la proyección estudiantil automática y creación de horarios académicos desarrollada para la UGMA, cuyo frontend desarrollé por completo",
  "woolly-breakout-caption": "Videojuego 2D multiplataforma y multijugador local a tiempo real creado con arquitectura cliente-servidor y sockets TCP",
  "asia-bar-caption": "Lideré y concebí la mayor parte de un sistema POS y de generación de tickets de cocina para un restaurante local",
  "chess-caption": "Clon de ajedrez multiplataforma que integra un bot como contrincante cuya IA se basa en el algoritmo de backtracking minmax",
  "library-caption": "Sistema de gestión de préstamos circulantes para la Biblioteca Pública Julián Temístocles Maza",

  // Footer 
  email: "Correo",
  letsConnect: "¡Contáctame!"
};


i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: "en",

    resources: {
      en: {
        translation: english_translations,
      },
      es: {
        translation: spanish_translations,
      }
    },
  });
