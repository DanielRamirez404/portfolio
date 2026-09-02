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
  databases: "Databases",
  "low-level": "Low Level",
  mobile: "Mobile",
  devops: "DevOps",
  ides: "IDEs",
  "non-coding": "Non-coding",

  "all-caption":
    "As a dev coding since 2022, with some freelancing experience, I've worked with a bunch of technologies. These are the ones I feel the most comfortable with. I do mostly Web Dev and low-level side projects. Feel free to check the other tabs to read my opinions on each field!",

  "programming-languages-caption":
    "These are the languages I feel the most comfortable with. My native (programming) language is C++, so learning others has been a breeze. I'm eager to learn Rust and Go. I tend to lean to JS/TS and python solutions on real projects",

  "frontend-caption":
    "It's probably the field I've worked the most with. I like building intuitive and appealing UIs so that the user has a seamless experience. I also value reusability and a fast dev experience, hence I like technologies like next, tailwind and useQuery that do the heavy lifting",

  "backend-caption":
    "I like using JS/TS on the backend to boost consistency with the frontend. But of course, the right tech stack should depend on the job's nature, like Go for speed-sensitive needs (which I've dabbled with in a teammate's codebase). I'd love to try Django, FastAPI and Nest.js",

  "databases-caption":
    "I've ended up working with different relational DBMSs. I like writing SQL queries myself, so I haven't worked with many ORMs. I'd like to test both redis and mongodb soon since I believe they'd be both fantastic tools to have in my repertoire",

  "low-level-caption":
    "I love this stuff, because it's not used for your average CRUD application. I've used these with computer graphics and networking with sockets. Low-level apps usually require better grasp of DSA concepts too",

  "mobile-caption":
    "I love Android Studio. I've had a great development experience with it and Jetpack Compose for the UI. Mobile development is one of my favorite fields, at least when it comes down to how fun it is! I also want to give react native a try",

  "devops-caption":
    "These might feel like miscellaneous tools, but bear with me! CI/CD is really a game-changer! especially in real-life projects. I'm also used to using linux since I use arch, btw, and the development experience has been wonderful!",

  "ides-caption":
    "Nowadays, I just stick to Neovim, since I've customized it and feel really comfortable and in control. I also love vim motions, it used to feel so weird at first, but it's really cool once you get the hang of it!",

  "non-coding-caption":
    "Well, these are the actual miscellaneous tools. Basically technologies which I think are worth mentioning but don't deserve a whole tab per category. I like using Figma for UI drafts and Jira for kanban boards",

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
  databases: "Bases de Datos",
  "low-level": "Bajo Nivel",
  mobile: "Móvil",
  devops: "DevOps",
  ides: "IDEs",
  "non-coding": "Otras",

  "all-caption": "Como programo desde 2022 y tengo algo de experiencia freelance, he trabajado com muchas tecnologías. Estas son aquellas con las que me siento más cómodo. Suelo hacer desarrollo web y proyectos personales de bajo nivel",

  "programming-languages-caption": "Estos son los lenguajes de programación con los que mejor me llevo. Mi lenguaje nativo es C++, por lo que aprender otros ha sido pan comido. Suelo escoger JS/TS y Python para soluciones reales",

  "frontend-caption": "Probablemente donde más he trabajado. Me gusta concebir interfaces intuitivas y llamativas para mejorar la experiencia de usuario. También valoro la reusabilidad y rápida experiencia de desarrollo, por lo que me gustan tecnologías como next y tailwind",

  "backend-caption": "Me gusta usar JS/TS en el back para facilitar la coordinación con el frontend. Pero, al final del día, el stack debe depender de los requerimientos de la aplicación, como Go en proyectos que pidan alta velocidad (que he podido ver en el código fuente de un equipo con el que trabajé)",

  "databases-caption": "He trabajado con distintos gestores relacionales. Me gusta escribir las queries por mi cuenta, por lo que no he trabajao con tantos ORMs. Me gustaría probar mongodb y redis",

  "low-level-caption": "Me encanata esta área porque requiere más complejidad que un simple CRUD. Suelen pedir mejor comprensión de estructuras de datos y algoritmos. He trabajado con computación gráfica y networking con sockets",

  "mobile-caption": "Me gusta Android Studio porque he tenido una gran experiencia con él y Jetpack Compose para la interfaz gráfica. ¡El desarrollo móvil es definitivamente una de las áreas que más me llenan!",

  "devops-caption": "Pueden parecer misceláneas, ¡pero CI/CD es superimportante en producción! También estoy acostumbrado a linux porque uso Arch, btw, ¡y la experiencia me ha sido encantadora!",

  "ides-caption": "Hoy día, uso Neovim, ya que lo he personalizado mucho y me siento bastante en control. Me encantan las vim motions. Una vez te acostumbras, ¡No hay vuelta atrás!",

  "non-coding-caption": "Básicamente herramientas misceláneas que no tienen que ver directamante con código, pero que son de bastante utilidad en la industria",

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
  "japanese-caption": "Ando oxidado, ¡pero lo adoro!. No practico suficiente porque estoy enfocado en otros idiomas",
  
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
