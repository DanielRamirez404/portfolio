import { TranslucidButton } from "./reusables/buttons";

import apoloImg from '#assets/apolo-ugma.png';
import asiaBarImg from '#assets/asia-bar.png';
import woollyBreakoutImg from '#assets/woolly-breakout.png';
import chessImg from '#assets/chess.png';
import libraryImg from '#assets/library.png';

import apoloVideo from '#assets/apolo-ugma.mp4';
import asiaBarVideo from '#assets/asia-bar.mp4';
import woollyBreakoutVideo from '#assets/woolly-breakout.mp4';
import chessVideo from '#assets/chess.mp4';
import libraryVideo from '#assets/library.mp4';

import { cn } from "#lib/utils";
import { Badge } from "./ui/badge";
import { AnimatedGradientText } from "./ui/animated-gradient-text";

import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';
import { MediaPlayer, MediaProvider } from '@vidstack/react';
import { defaultLayoutIcons, DefaultVideoLayout } from '@vidstack/react/player/layouts/default';
import { useRef, useState } from "react";

import { AnimatePresence, motion, useScroll, useTransform } from "motion/react"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "#components/ui/dialog"
import { useIsMobile } from "#hooks/use-mobile";
import { useLenis } from "#hooks/useLenis";
import { useTypedTranslations } from "#hooks/useTypedTranslations";

export function Projects() {

  const { t } = useTypedTranslations();

  type Project = {
    name: string;
    description: string;
    type: 'Project' | 'Freelance' | 'University';
    priority: 'high' | 'low';
    img: string;
    video: string;
    github?: string;
    stack: string[];
  };

  const [isVideoPlayerOpen, setVideoPlayerOpenStatus] = useState<boolean>(false);

  const isMobile = useIsMobile();

  const [areAllProjectsShown, setAllProjectsAsShown] = useState<boolean>(false);

  const projects: Project[] = [

    {
      name: 'Apolo UGMA',
      type: 'Freelance',
      priority: 'high',
      description: t('apolo-caption'),
      img: apoloImg,
      video: apoloVideo,
      stack: ["Next.js", "TypeScript", "Tailwind", "Tanstack Query", "Zod", "Shadcn"],
    },

    {
      name: 'Woolly Breakout',
      type: 'Project',
      priority: 'high',
      description: t('woolly-breakout-caption'),
      img: woollyBreakoutImg,
      video: woollyBreakoutVideo,
      stack: ["C++20", "SDL2", "Boost.Asio", "CMake"],
    },

    {
      name: 'Asia Bar Restaurant Web',
      type: 'Freelance',
      priority: 'high',
      description: t('asia-bar-caption'),
      img: asiaBarImg,
      video: asiaBarVideo,
      stack: ["Node.js", "Express.js", "JWT", "MariaDB", "React", "JavaScript", "CSS"],
    },

    {
      name: 'The Best Chess Clone',
      type: 'Project',
      priority: 'low',
      description: t('chess-caption'),
      img: chessImg,
      video: chessVideo,
      stack: ["C++20", "SDL2", "CMake"],
    },

    {
      name: 'Library Management System',
      type: 'University',
      priority: 'low',
      description: t('library-caption'),
      img: libraryImg,
      video: libraryVideo,
      stack: ["React", "JavaScript", "Tailwind"],
    },
  ];

  const selectedProject = useRef<Project>(projects[0]);

  const priorityProjects = projects.filter(p => p.priority === 'high');

  const shownProjects = isMobile && !areAllProjectsShown ? priorityProjects : projects;

  const lastPriorityProject = priorityProjects.at(-1);

  const lastPriorityProjectRef = useRef(null);

  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.25, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);

  const showMoreRef = useRef(null);

  const { scrollYProgress: showMoreProgress } = useScroll({
    target: showMoreRef,
    offset: ["end end", "end end"]
  });

  const showMoreStyle = { opacity: useTransform(showMoreProgress, [0, 1], [0, 1]) };

  const lenis = useLenis();

  return (
    <div ref={containerRef} className="min-h-screen py-[5vh] relative flex flex-col w-screen items-center gap-3">
      <motion.div style={{ opacity, y }} className="w-full flex flex-col items-center justify-center gap-8">

        <Dialog open={isVideoPlayerOpen} onOpenChange={setVideoPlayerOpenStatus}>
          <DialogContent className="sm:max-w-3xl">
            <DialogHeader>
              <DialogTitle>{selectedProject.current.name}</DialogTitle>
            </DialogHeader>
            <MediaPlayer title={selectedProject.current.name} src={selectedProject.current.video}>
              <MediaProvider />
              <DefaultVideoLayout
                thumbnails={selectedProject.current.img}
                icons={defaultLayoutIcons}
              />
            </MediaPlayer>
          </DialogContent>
        </Dialog>

        <div className="w-[95%] lg:w-[70%] flex flex-col items-center justify-center max-w-200 gap-8 px-5">

          <h2 className="text-3xl font-semibold self-start">
            {t('projects-header')}
          </h2>

          <p className="text-center font-semibold opacity-85 hover:opacity-100 transition-opacity duration-300">
            {t('projects-caption')}
          </p>

          <div className="w-full flex flex-row flex-wrap gap-10 items-strech justify-center">
            <AnimatePresence mode='sync'>
              {shownProjects.map(project => {
                const { name, img, type, priority, description, stack } = project;

                return (
                  <motion.div

                    key={name}

                    initial={priority === 'high' ? {} : { opacity: 0.25, y: "-5%" }}
                    animate={priority === 'high' ? {} : { opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: "5%" }}

                    transition={{
                      duration: 0.6,
                      ease: 'easeInOut'
                    }}

                    className="flex flex-row items-center justify-center md:w-75" 

                  >
                    <TranslucidButton

                      ref={name === lastPriorityProject?.name ? lastPriorityProjectRef : null}

                      className={cn(
                        "relative w-75 flex flex-col gap-5 items-start h-full"
                      )}

                      shine={false}

                      onClick={() => {
                        selectedProject.current = project;
                        setVideoPlayerOpenStatus(true);
                      }}
                    >

                      <div className="w-full flex flex-col items-center gap-1">

                        <div className="flex w-full flex-row justify-center bg-charcoal-blue-900 overflow-hidden rounded-2xl">
                          <img
                            className="h-50 w-auto"
                            src={img}
                            fetchPriority={priority}
                            alt={`${name}-project-image`}
                          />
                        </div>


                        <div className="w-full flex flex-row items-center justify-between gap-3">
                          <h4 className="text-base md:text-lg truncate flex-1 text-start max-w-[75%]">
                            {name}
                          </h4>

                          {
                            type === "Freelance" ? (
                              <div className="group relative rounded-full px-2 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f]">
                                <span
                                  className={cn(
                                    "animate-gradient absolute inset-0 block h-full w-full rounded-[inherit]",
                                    "bg-linear-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-size-[300%_100%] p-px"
                                  )}
                                  style={{
                                    WebkitMask:
                                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "destination-out",
                                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    maskComposite: "subtract",
                                    WebkitClipPath: "padding-box",
                                  }}
                                />
                                <AnimatedGradientText className="text-xs">
                                  {t('freelance-bagde')}
                                </AnimatedGradientText>
                              </div>
                            ) : (
                              <div className="group relative rounded-full px-2 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f]">
                                <span
                                  className={cn(
                                    "animate-gradient absolute inset-0 block h-full w-full rounded-[inherit]",
                                    "bg-linear-to-r from-[#22d3ee]/50 via-[#2dd4bf]/50 to-[#22d3ee]/50 bg-size[300%_100%] p-px"
                                  )}
                                  style={{
                                    WebkitMask:
                                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "destination-out",
                                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    maskComposite: "subtract",
                                    WebkitClipPath: "padding-box",
                                  }}
                                />
                                <span className="text-xs text-bright-snow-200">
                                  {type === 'Project' ? t('project-badge') : t('university-badge')}
                                </span>
                              </div>
                            )
                          }
                        </div>

                        <p className="w-full text-start font-normal text-xs">
                          {description}
                        </p>

                      </div>

                      <div className="flex flex-row flex-wrap gap-x-2">
                        {stack.map(technology => (
                          <Badge
                            key={name + technology}
                            variant="outline"
                            className="text-xs bg-transparent border-bright-snow-100 my-1"
                          >
                            {technology}
                          </Badge>
                        ))}
                      </div>

                    </TranslucidButton>
                  </motion.div>
                );
              })}
            </AnimatePresence>

          </div>

          <motion.p
            className={cn(
              "self-end text-end cursor-pointer font-semibold opacity-85 hover:opacity-100 transition-opacity duration-300",
              !isMobile && "hidden"
            )}
            ref={showMoreRef}
            style={showMoreStyle}
            onClick={
              () => {
                const isChangingToLess = areAllProjectsShown;

                if (isChangingToLess && lastPriorityProjectRef.current) {
                  lenis?.scrollTo(lastPriorityProjectRef.current, { offset: -200 });
                }

                setAllProjectsAsShown(prev => !prev);
              }
            }
          >
            {areAllProjectsShown ? "Show less" : "Show more..."}
          </motion.p>

        </div>


      </motion.div>
    </div>
  );
}
