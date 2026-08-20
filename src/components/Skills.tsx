import { useLayoutEffect, useRef, useState } from "react";
import { TranslucidButton } from "./reusables/buttons";
import { motion } from "motion/react"

import { ES, US, FR, DE, BR, JP, type FlagComponent } from "country-flag-icons/react/3x2";

import androidStudioIcon from '#assets/android-studio.webp';
import bashIcon from '#assets/bash.webp';
import boostAsioIcon from '#assets/boost.asio.png';
import bootstrapIcon from '#assets/bootstrap.webp';
import cmakeIcon from '#assets/cmake.png';
import cppIcon from '#assets/cpp.webp';
import cssIcon from '#assets/css.png';
import dockerIcon from '#assets/docker.png';
import expressIcon from '#assets/express.png';
import figmaIcon from '#assets/figma.webp';
import gitIcon from '#assets/git.webp';
import githubActionsIcon from '#assets/github-actions.png';
import githubIcon from '#assets/github.svg';
import htmlIcon from '#assets/html.webp'; import jetpackComposeIcon from '#assets/jetpack-compose.png';
import jiraIcon from '#assets/jira.png';
import jsIcon from '#assets/js.webp';
import kotlinIcon from '#assets/kotlin.png';
import linuxIcon from '#assets/linux.webp';
import mariadbIcon from '#assets/mariadb.svg';
import motionIcon from '#assets/motion.png';
import mysqlIcon from '#assets/mysql.png';
import neovimIcon from '#assets/neovim.png';
import nextjsIcon from '#assets/nextjs.png';
import phpIcon from '#assets/php.png';
import postgresqlIcon from '#assets/postgresql.webp';
import postmanIcon from '#assets/postman.webp';
import pythonIcon from '#assets/python.webp';
import reactIcon from '#assets/react.webp';
import sdlIcon from '#assets/sdl.png';
import shadcnIcon from '#assets/shadcn.png';
import sqliteIcon from '#assets/sqlite.webp';
import tailwindIcon from '#assets/tailwind.png';
import tanstackQueryIcon from '#assets/tanstack-query.svg';
import tsIcon from '#assets/ts.webp';
import vimIcon from '#assets/vim.svg';
import visualStudioIcon from '#assets/visual-studio.webp';
import viteIcon from '#assets/vite.webp';
import vueIcon from '#assets/vue.webp';
import vsCodeIcon from '#assets/vs-code.webp';
import zodIcon from '#assets/zod.png';
import zshIcon from '#assets/zsh.svg';
import { cn } from "#lib/utils";

type TechnologyTypes = 'Languages' | 'Frontend' | 'Backend' | 'Databases' | 'Mobile' | 'Low Level' | 'DevOps' | 'IDE' | 'Non-coding';

type Technology = {
  name: string;
  icon: string;
};

type TechnologiesPerType = Record<TechnologyTypes, Technology[]>;

type Sections = 'Technologies' | 'Langugages';

type Section = {
  name: string;
  type: Sections;
};

function TechnologiesSection() {
  const [techType, setTechType] = useState<TechnologyTypes | 'All'>('All');
  const [selecteds, setSelecteds] = useState<string[]>([]);

  const captions: Record<TechnologyTypes | 'All', string> = {

    'All': "As a dev coding since 2022, with some freelancing experience, I've worked with a bunch of technologies. These are the ones I feel the most comfortable with. I do mostly Web Dev and low-level side projects. Feel free to check the other tabs to read my opinions on each field!",

    'Languages': "These are the languages I feel the most comfortable with. My native (programming) language is C++, so learning others has been a breeze. I'm eager to learn Rust and Go. I tend to lean to JS/TS and python solutions on real projects",

    'Frontend': "It's probably the field I've worked the most with. I like building intuitive and appealing UIs so that the user has a seamless experience. I also value reusability and a fast dev experience, hence I like technologies like next, tailwind and useQuery that do the heavy lifting",

    'Backend': "I like using JS/TS on the backend to boost consistency with the frontend. But of course, the right tech stack should depend on the job's nature, like Go for speed-sensitive needs (which I've dabbled with in a teammate's codebase). I'd love to try Django, FastAPI and Nest.js",

    'Databases': "I've ended up working with different relational DBMSs. I like writing SQL queries myself, so I haven't worked with many ORMs. I'd like to test both redis and mongodb soon since I believe they'd be both fantastic tools to have in my repertoire",

    'Low Level': "I love this stuff, because it's not used for your average CRUD application. I've used these with computer graphics and networking with sockets. Low-level apps usually require better grasp of DSA concepts too",

    'Mobile': "I love Android Studio. I've had a great development experience with it and Jetpack Compose for the UI. Mobile development is one of my favorite fields, at least when it comes down to how fun it is! I also want to give react native a try",

    'DevOps': "These might feel like miscellaneous tools, but bear with me! CI/CD is really a game-changer! especially in real-life projects. I'm also used to using linux since I use arch, btw, and the development experience has been wonderful!",

    'IDE': "Nowadays, I just stick to Neovim, since I've customized it and feel really comfortable and in control. I also love vim motions, it used to feel so weird at first, but it's really cool once you get the hang of it!",

    'Non-coding': "Well, these are the actual miscellaneous tools. Basically technologies which I think are worth mentioning but don't deserve a whole tab per category. I like using Figma for UI drafts and Jira for kanban boards"
  };

  const techSections: TechnologiesPerType = {

    'Languages': [
      { name: 'C++', icon: cppIcon },
      { name: 'JavaScript', icon: jsIcon },
      { name: 'TypeScript', icon: tsIcon },
      { name: 'Python', icon: pythonIcon },
      { name: 'Kotlin', icon: kotlinIcon },
      { name: 'PHP', icon: phpIcon },
    ],

    'Frontend': [
      { name: 'Next.js', icon: nextjsIcon },
      { name: 'Vite', icon: viteIcon },
      { name: 'React', icon: reactIcon },
      { name: 'Vue', icon: vueIcon },
      { name: 'HTML', icon: htmlIcon },
      { name: 'CSS', icon: cssIcon },
      { name: 'Tailwind', icon: tailwindIcon },
      { name: 'Bootstrap', icon: bootstrapIcon },
      { name: 'Motion', icon: motionIcon },
      { name: 'TanStack Query', icon: tanstackQueryIcon },
      { name: 'Zod', icon: zodIcon },
      { name: 'Shadcn', icon: shadcnIcon },
    ],

    'Backend': [
      { name: 'Express', icon: expressIcon },
      { name: 'Next.js', icon: nextjsIcon },
      { name: 'Postman', icon: postmanIcon },
    ],

    'Databases': [
      { name: 'PostgreSQL', icon: postgresqlIcon },
      { name: 'MariaDB', icon: mariadbIcon },
      { name: 'MySQL', icon: mysqlIcon },
      { name: 'SQLite', icon: sqliteIcon },
    ],

    'Low Level': [
      { name: 'SDL', icon: sdlIcon },
      { name: 'Boost.Asio', icon: boostAsioIcon },
    ],

    'Mobile': [
      { name: 'Jetpack Compose', icon: jetpackComposeIcon },
    ],

    'DevOps': [
      { name: 'Git', icon: gitIcon },
      { name: 'GitHub', icon: githubIcon },
      { name: 'GitHub Actions', icon: githubActionsIcon },
      { name: 'Docker', icon: dockerIcon },
      { name: 'Linux', icon: linuxIcon },
      { name: 'Bash', icon: bashIcon },
      { name: 'Zsh', icon: zshIcon },
      { name: 'CMake', icon: cmakeIcon },
    ],

    'IDE': [
      { name: 'Neovim', icon: neovimIcon },
      { name: 'Vim', icon: vimIcon },
      { name: 'Visual Studio Code', icon: vsCodeIcon },
      { name: 'Visual Studio', icon: visualStudioIcon },
      { name: 'Android Studio', icon: androidStudioIcon },
    ],

    'Non-coding': [
      { name: 'Figma', icon: figmaIcon },
      { name: 'Jira', icon: jiraIcon },
    ]
  };

  const allTechnologies: Technology[] = Array.from(
    new Map(
      Object.values(techSections)
        .flat()
        .map(tech => [tech.name, tech])
    ).values()
  );

  const areAllChosen = techType === 'All';

  const chosenTechnologies = areAllChosen ? allTechnologies : techSections[techType];

  return (
    <>
      <div className="flex flex-row items-center overflow-x-scroll w-full overflow-y-visible py-2 px-1 custom-scrollbar">
        <TranslucidButton
          className="rounded-none w-full whitespace-nowrap min-w-40"
          resize={false}
          active={techType === 'All'}
          shine={techType !== 'All'}
          onClick={() => setTechType('All')}
        >
          All
        </TranslucidButton>
        {Object.entries(techSections).map(([type, _]) => (
          <TranslucidButton
            key={type}
            className="rounded-none w-full whitespace-nowrap min-w-40"
            resize={false}
            active={techType === type}
            shine={techType !== type}
            onClick={() => setTechType(type as TechnologyTypes)}
          >
            {type}
          </TranslucidButton>
        ))}
      </div>
      <div className="flex flex-col gap-5">
        <p className="text-xs sm:text-sm md:text-base text-start sm:text-center font-semibold opacity-85 hover:opacity-100 transition-opacity duration-300">
          {captions[techType]}
        </p>
        <div className={cn("w-full flex flex-wrap justify-center items-center gap-5")}>
          {chosenTechnologies.map(({ name, icon }) => {

            const isActive = selecteds.includes(name);

            return (
              <TranslucidButton
                key={name}
                className={cn(
                  "whitespace-nowrap min-w-35 flex flex-row items-center gap-3 justify-start",
                  areAllChosen && "min-w-10",
                )}
                active={isActive}
                onHoverStart={() => setSelecteds(prev => [...prev, name])}
                onHoverEnd={() => setTimeout(() => setSelecteds(prev => prev.filter(tech => tech !== name)), 200)}
              >
                <img
                  className={cn(
                    "h-5 w-5 object-contain transition-all duration-200",
                    isActive
                      ? "grayscale-0 opacity-100"
                      : "grayscale opacity-50"
                  )}
                  src={icon}
                  fetchPriority="auto"
                  alt={`${name}-icon`}
                />
                {!areAllChosen && name}
              </TranslucidButton>
            );
          })}
        </div>
      </div>
    </>
  );
}

function LanguagesSection() {

  type LanguageName =
    | "Spanish"
    | "English"
    | "French"
    | "German"
    | "Portuguese"
    | "Japanese";

  const [selected, setSelected] = useState<LanguageName | null>(null);

  const [isExampleOpen, setExampleOpenStatus] = useState<boolean>(false);

  type Language = {
    name: LanguageName;
    level: string;
    flag: FlagComponent;
    description: string;
    example?: string;
  };

  const languages: Language[] = [
    {
      name: "Spanish",
      level: "Native",
      flag: ES,
      description: "As my native language, it's helped me a great deal to learn other languages that share several traits!",
      example: "Lo genial del español es que, pese a haber tantos dialectos, son todos bastante inteligibles entre sí"
    },
    {
      name: "English",
      level: "C1",
      flag: US,
      description: "It's sort of my default language for my studies, online life and even my entertainment, so I'm pretty used to it",
      example: "English is the most useful language in software development since it's basically ubiquitous"
    },
    {
      name: "French",
      level: "B2",
      flag: FR,
      description: "My favorite one! It's been quite easy for me to pick up. Plus, I love Francophone YouTube and Music",
      example: "Perso, je trouve le verlan et les expressions d'argot français vachement chouettes !"
    },
    {
      name: "German",
      level: "B1",
      flag: DE,
      description: "It's not as hard as I once thought. I'm far better listening and reading than speaking, but I'm still learning!",
      example: "Ich möchte mehr deutsche Inhalte konsumieren, um besser zu werden. Ich glaube auch, dass sie einen schönen Klang hat"
    },
    {
      name: "Portuguese",
      level: "B1",
      flag: BR,
      description: "I'm really into how it sounds. As a Spanish speaker, it's fairly easy, but it's still its own different language",
      example: "Gosto muito da sonoridade dessa língua. Não conheço muitas gírias ainda, mas estou com vontade de aprender!"
    },
    {
      name: "Japanese",
      level: "N5",
      flag: JP,
      description: "I'm kind of rusty, but I love it! I don't practice enough since I'm focused on other languagues at the moment",
      example: "日本語で話すのは本当に難しいし、聞く時もあまり分からないけど、アニメを見たりマンガを読んだりできるから、なんとかなるはずだよね！"
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Partial<Record<LanguageName, HTMLDivElement | null>>>({});
  const [offset, setOffset] = useState(0);

  useLayoutEffect(() => {
    if (!selected) {
      setSelected('Spanish');
      return;
    }

    const container = containerRef.current;
    const item = itemRefs.current[selected];
    if (!container || !item) return;

    const containerRect = container.getBoundingClientRect();
    const itemRect = item.getBoundingClientRect();

    const containerCenter = containerRect.left + containerRect.width / 2;
    const itemCenter = itemRect.left + itemRect.width / 2;
    const delta = containerCenter - itemCenter;

    setOffset((prev) => prev + delta);
  }, [selected]);

  return (
    <div ref={containerRef} className="min-h-[50vh] flex items-center mt-7">
      <motion.div
        className="flex flex-row gap-5 items-center"
        animate={{ x: offset }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {languages.map(({ name, level, flag: Flag, description, example }) => {
          const isSelected = selected === name;

          return (
            <div
              key={name}
              ref={(el) => { itemRefs.current[name] = el; }}
              className="h-full"
            >
              <TranslucidButton
                shine={false}
                onClick={
                  () => {

                    if (!isSelected) {
                      setSelected(name);
                      setExampleOpenStatus(false);
                      return;
                    }

                    setExampleOpenStatus(prev => !prev);
                  }
                }
                className={cn(
                  "relative overflow-visible min-h-20 min-w-20",
                  isSelected && "w-50 h-full flex flex-col gap-3"
                )}
              >
                <Flag
                  title={name}
                  className={cn(
                    "h-full w-full rounded-md overflow-hidden",
                  )}
                />

                {isSelected
                  ? isExampleOpen
                    ? (
                      <p>{example}</p>
                    ) : (
                      <>
                        <h3 className="text-2xl">{name}</h3>
                        <p>{description}</p>
                      </>

                    )


                  : (
                    <div className="absolute left-1/2 -translate-x-1/2 translate-y-full font-bold text-charcoal-blue-400 bg-charcoal-blue-950 border border-bright-snow-200 rounded-md p-1.5">
                      {level}
                    </div>
                  )}

              </TranslucidButton>
            </div>
          )
        })}
      </motion.div>
    </div>
  );
}

export function Skills() {

  const [section, setSection] = useState<Sections>('Technologies');

  const sections: Section[] = [
    { name: 'Technologies', type: 'Technologies' },
    { name: 'Languages', type: 'Langugages' },
  ];

  return (
    <div className="min-h-screen py-[5vh] relative flex flex-col w-full items-center pt-[10vh]">

      <div className="w-[90%] flex flex-col items-center justify-center max-w-200 gap-3 px-5">
        <div className="flex flex-row w-full">
          {sections.map(({ name, type }) => (
            <TranslucidButton
              key={type}
              className="rounded-none w-full"
              resize={false}
              active={section === type}
              shine={section !== type}
              onClick={() => setSection(type)}
            >
              {name}
            </TranslucidButton>
          ))}
        </div>

        {section === 'Technologies' ? (
          <TechnologiesSection />
        ) : (
          <>
            <p className="translate-y-5 text-center font-semibold opacity-85 hover:opacity-100 transition-opacity duration-300">
              Click on the cards to read an example!
            </p>
            <LanguagesSection />
          </>
        )}

      </div>


    </div>
  );
}


