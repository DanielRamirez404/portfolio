import { useLayoutEffect, useRef, useState } from "react";
import { TranslucidButton } from "./reusables/buttons";
import { motion, useScroll, useTransform } from "motion/react"

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
import { useTypedTranslations, type TranslationKey } from "#hooks/useTypedTranslations";


type Technology = {
  name: string;
  icon: string;
};

type Sections = 'Technologies' | 'Langugages';

type Section = {
  name: string;
  type: Sections;
};

function TechnologiesSection() {

  const { t } = useTypedTranslations();

  function asTypedConst<T extends readonly TranslationKey[]>(arr: T): T {
    return arr;
  }

  const allTypes = asTypedConst([
    'programming-languages',
    'frontend',
    'backend',
    'databases',
    'mobile',
    'low-level',
    'devops',
    'ides',
    'non-coding',
  ] as const);

  type TechnologyTypes = typeof allTypes[number];

  type TechnologiesPerType = Record<TechnologyTypes, Technology[]>;

  type AllOptions = TechnologyTypes | 'all';

  const [techType, setTechType] = useState<AllOptions>('all');
  const [selecteds, setSelecteds] = useState<string[]>([]);

  const captions: Record<AllOptions, string> = {
    'all': t('all-caption'),
    'programming-languages': t('programming-languages-caption'),
    'frontend': t('frontend-caption'),
    'backend': t('backend-caption'),
    'databases': t('databases-caption'),
    'low-level': t('low-level-caption'),
    'mobile': t('mobile-caption'),
    'devops': t('devops-caption'),
    'ides': t('ides-caption'),
    'non-coding': t('non-coding-caption'),
  };

  const techSections: TechnologiesPerType = {

    'programming-languages': [
      { name: 'C++', icon: cppIcon },
      { name: 'JavaScript', icon: jsIcon },
      { name: 'TypeScript', icon: tsIcon },
      { name: 'Python', icon: pythonIcon },
      { name: 'Kotlin', icon: kotlinIcon },
      { name: 'PHP', icon: phpIcon },
    ],

    'frontend': [
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

    'backend': [
      { name: 'Express', icon: expressIcon },
      { name: 'Next.js', icon: nextjsIcon },
      { name: 'Postman', icon: postmanIcon },
    ],

    'databases': [
      { name: 'PostgreSQL', icon: postgresqlIcon },
      { name: 'MariaDB', icon: mariadbIcon },
      { name: 'MySQL', icon: mysqlIcon },
      { name: 'SQLite', icon: sqliteIcon },
    ],

    'low-level': [
      { name: 'SDL', icon: sdlIcon },
      { name: 'Boost.Asio', icon: boostAsioIcon },
    ],

    'mobile': [
      { name: 'Jetpack Compose', icon: jetpackComposeIcon },
    ],

    'devops': [
      { name: 'Git', icon: gitIcon },
      { name: 'GitHub', icon: githubIcon },
      { name: 'GitHub Actions', icon: githubActionsIcon },
      { name: 'Docker', icon: dockerIcon },
      { name: 'Linux', icon: linuxIcon },
      { name: 'Bash', icon: bashIcon },
      { name: 'Zsh', icon: zshIcon },
      { name: 'CMake', icon: cmakeIcon },
    ],

    'ides': [
      { name: 'Neovim', icon: neovimIcon },
      { name: 'Vim', icon: vimIcon },
      { name: 'Visual Studio Code', icon: vsCodeIcon },
      { name: 'Visual Studio', icon: visualStudioIcon },
      { name: 'Android Studio', icon: androidStudioIcon },
    ],

    'non-coding': [
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

  const areAllChosen = techType === 'all';

  const chosenTechnologies = areAllChosen ? allTechnologies : techSections[techType];

  return (
    <>
      <div className="flex flex-row items-center overflow-x-scroll w-full overflow-y-visible py-2 px-1 custom-scrollbar">
        <TranslucidButton
          className="rounded-none w-full whitespace-nowrap min-w-40"
          resize={false}
          active={techType === 'all'}
          shine={techType !== 'all'}
          onClick={() => setTechType('all')}
        >
          {t('all')}
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
            {t(type as TranslationKey)}
          </TranslucidButton>
        ))}
      </div>
      <div className="flex flex-col gap-5">
        <p className="text-xs sm:text-sm md:text-base text-start sm:text-center font-semibold opacity-85 hover:opacity-100 transition-opacity duration-300">
          {captions[techType as TechnologyTypes | 'all']}
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

  const { t } = useTypedTranslations();

  const [selected, setSelected] = useState<string | null>(null);

  const [isExampleOpen, setExampleOpenStatus] = useState<boolean>(false);

  type Language = {
    name: string;
    level: string;
    flag: FlagComponent;
    description: string;
    example?: string;
  };

  const languages: Language[] = [
    {
      name: t('spanish'),
      level: t('native'),
      flag: ES,
      description: t('spanish-caption'),
      example: "Lo genial del español es que, pese a haber tantos dialectos, son todos bastante inteligibles entre sí"
    },
    {
      name: t('english'),
      level: "C1",
      flag: US,
      description: t('english-caption'),
      example: "English is the most useful language in software development since it's basically ubiquitous"
    },
    {
      name: t('french'),
      level: "B2",
      flag: FR,
      description: t('french-caption'),
      example: "Perso, je trouve le verlan et les expressions d'argot français vachement chouettes !"
    },
    {
      name: t('german'),
      level: "B1",
      flag: DE,
      description: t('german-caption'),
      example: "Ich möchte mehr deutsche Inhalte konsumieren, um besser zu werden. Ich glaube auch, dass sie einen schönen Klang hat"
    },
    {
      name: t('portuguese'),
      level: "B1",
      flag: BR,
      description: t('portuguese-caption'),
      example: "Gosto muito da sonoridade dessa língua. Não conheço muitas gírias ainda, mas estou com vontade de aprender!"
    },
    {
      name: t('japanese'),
      level: "N5",
      flag: JP,
      description: t('japanese-caption'),
      example: "日本語で話すのは本当に難しいし、聞く時もあまり分からないけど、アニメを見たりマンガを読んだりできるから、なんとかなるはずだよね！"
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Partial<Record<string, HTMLDivElement | null>>>({});
  const [offset, setOffset] = useState(0);

  useLayoutEffect(() => {
    if (!selected) {
      setSelected(t('spanish'));
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
  }, [selected, t]);

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

  const { t } = useTypedTranslations()

  const [section, setSection] = useState<Sections>('Technologies');

  const sections: Section[] = [
    { name: t('technologies'), type: 'Technologies' },
    { name: t('spoken-languages'), type: 'Langugages' },
  ];

  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [-50, 0]);

  return (
    <div
      ref={containerRef}
      className="min-h-screen py-[5vh] relative flex flex-col w-screen items-center pt-[10vh]"
    >
      <motion.div
        className="w-[90%] flex flex-col items-center justify-center max-w-200 gap-3 px-5"
        style={{ opacity, y }}
      >

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
              {t('spoken-languages-caption')}
            </p>
            <LanguagesSection />
          </>
        )}

      </motion.div>
    </div>
  );
}


