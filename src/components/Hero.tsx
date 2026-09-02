import { cn, splitIntoN } from "#lib/utils";
import { motion, useScroll, useTransform, type KeyframeOptions } from "motion/react"
import { IconButton, TranslucidButton, TranslucidIconLink, } from "./reusables/buttons";
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { ChevronsDown, Download, Languages, Play, Square, StepBack, StepForward, Volume2, VolumeX } from 'lucide-react';
import { useIsMobile } from "#hooks/use-mobile";
import profilePicture from '#assets/daniel.jpg';
import { VE } from 'country-flag-icons/react/3x2'
import { useEffect, useRef, useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "#components/ui/dropdown-menu"

import { useTypedTranslations } from "#hooks/useTypedTranslations";
import { availableLanguages } from "#data/languages:";
import { useVolume } from "#hooks/useAudio";
import { usePlaylist } from "#hooks/usePlaylist";

type headerProps = React.ComponentPropsWithoutRef<typeof motion.h1>;

type JobTitleWordProps = Omit<headerProps, 'children' | 'className'> & {
  animationType: 'simple' | 'complex';
  children: string;
  className?: string;
}

function JobTitleWord({ children, className, animationType, ...props }: JobTitleWordProps) {
  if (animationType === 'simple') {
    return (
      <motion.h1
        className={cn(className, "z-20 text-4xl/8 sm:text-7xl/14 md:text-8xl/20 font-bold text-center align-middle")}
        initial={{ x: "-15%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        {...props}
      >
        {children}
      </motion.h1>
    );
  }

  const numberOfChunks = Math.min(4, children.length);
  const chunks = splitIntoN(children, numberOfChunks);

  const timeframesSettings: KeyframeOptions = {
    duration: 2,
    ease: "easeInOut",
    times: [0, 0.5, 0.6, 1],
  };

  return (
    <div className="flex flex-row">
      {chunks.map((chunk, i) => (
        <JobTitleWord
          key={`Job-${i}`}
          animationType="simple"
          initial={{ clipPath: "inset(0 0 100% 0)" }}
          animate={{
            y: ["100%", i % 2 === 0 ? "-100%" : "200%", null, "0%"],
            x: [i % 2 === 0 ? "-100%" : "200%", "0%", null, "0%"],
            clipPath: "inset(0 0 0 0)",
            scale: [1.5, null, null, 1]
          }}
          transition={{
            delay: 0.5,
            y: timeframesSettings,
            x: timeframesSettings,
            scale: timeframesSettings,
            clipPath: {
              duration: 1,
              ease: "easeInOut",
            },
          }}
          {...props}
        >
          {chunk}
        </JobTitleWord >
      ))}
    </div>
  )
}

export function Hero() {
  const { t, i18n } = useTypedTranslations();

  const isMobile = useIsMobile();

  const [isCurtainOn, setCurtainStatus] = useState<boolean>(true);

  useEffect(() => {
    const timer1 = setTimeout(() => setCurtainStatus(!isMobile), 250);
    const timer2 = setTimeout(() => setCurtainStatus(false), 2000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    }
  }, [isMobile]);

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const volume = useVolume();

  const playlist = usePlaylist();

  return (
    <motion.header
      className="min-h-screen py-[5vh] relative flex flex-col w-full items-center justify-center gap-3"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{ opacity, y }}
    >
      <div
        className={cn(
          "absolute top-0 w-full px-10 md:px-25 lg:px-50 flex flex-row h-15 items-center justify-around pt-5",
        )}
      >
        <div className="flex-1 text-xl tracking-widest select-none">
          <span className="text-charcoal-blue-400">
            ~
          </span>
          /
          <motion.span
            className="text-charcoal-blue-400 text-xl"
            animate={{ opacity: [1, 0, 0, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            ▮
          </motion.span>
        </div>
        <div className="flex-1 flex flex-row lg:gap-10 gap-5 justify-end items-center">

          <div
            className={cn(
              "flex flex-row gap-3 items-center",
            )}
          >
            <DropdownMenu>
              <DropdownMenuTrigger render={
                <IconButton aria-label="translate">
                  <Languages />
                </IconButton>
              } />
              <DropdownMenuContent className="w-40" align="start">
                <DropdownMenuGroup>
                  <DropdownMenuLabel>{t('available-languages')}</DropdownMenuLabel>
                  {Object.entries(availableLanguages).map(([code, { flag: Flag, nativeName }]) => (
                    <DropdownMenuItem key={code} className="cursor-pointer font-bold" onClick={() => i18n.changeLanguage(code)}>
                      <Flag className="h-8! w-8! rounded-md overflow-hidden" />
                      {nativeName}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            <IconButton aria-label="toggle volume">
              {volume.isMuted
                ? <VolumeX onClick={() => volume.toggle()} />
                : <Volume2 onClick={() => volume.toggle()} />
              }
            </IconButton>

          </div>

          <div className="relative flex flex-col items-center justify-center">
            <div className="flex flex-row gap-2 items-center justify-center">
              <IconButton aria-label="prev song">
                <StepBack className="w-5! h-5!" onClick={() => playlist.skipToPrev()} />
              </IconButton>
              <IconButton aria-label="toggle song play">
                {
                  playlist.isPlaying
                    ? <Square className="w-5! h-5!" onClick={() => playlist.pause()} />
                    : <Play className="w-5! h-5!" onClick={() => playlist.resume()} />
                }
              </IconButton>
              <IconButton aria-label="next song">
                <StepForward className="w-5! h-5!" onClick={() => playlist.skipToNext()} />
              </IconButton>
            </div>

            <div className="absolute top-full mt-1 left-0 right-0 flex justify-center overflow-x-hidden">
              <p className="max-w-full min-w-full text-center text-xs text-nowrap animate-infinite-scroll">
                {playlist.currentPlaying}
              </p>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 2.5,
          duration: 0.5,
          ease: 'easeInOut'
        }}
        className={cn(
          "flex flex-row gap-3 items-center justify-center",
          isCurtainOn && "hidden"
        )}
      >
        <TranslucidButton rotate className="p-0 rounded-full">
          <img
            className="h-20 w-20 object-cover"
            src={profilePicture}
            fetchPriority="high"
            alt="profile-photo"
            width={100}
            height={100}
          />
        </TranslucidButton>
        <div className="flex flex-col">
          <p className="font-bold text-xl sm:text-2xl leading-none">Daniel Ramírez</p>
          <div className="flex flex-row items-center gap-1.5">
            <VE className="h-10 w-10 rounded-md overflow-hidden" />
            <div className="text-xs leading-none">
              <p>Puerto la Cruz,</p>
              <p>Venezuela</p>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="flex flex-col items-center justify-center">
        <JobTitleWord animationType="complex">
          {t('first-job-header')}
        </JobTitleWord>

        <div className="flex flex-row justify-center items-center gap-1.5 sm:gap-3">
          <JobTitleWord
            animationType="simple"
            transition={{
              duration: 0.5,
              delay: 2,
            }}
          >
            {t('second-job-header')}
          </JobTitleWord>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 2.5,
              duration: 0.5,
              ease: 'easeInOut'
            }}
          >
            <DropdownMenu>
              <DropdownMenuTrigger render={
                <TranslucidButton
                  resize={false}
                  className={cn(
                    "flex flex-row items-center justify-center gap-1 px-2 py-1 sm:px-3 sm:py-2",
                    isCurtainOn && "invisible"
                  )}
                >
                  <Download size={isMobile ? 14 : 16} className="shrink-0" />
                  <span className="leading-none sm:mb-[0.1rem] text-xs sm:text-base">
                    {isMobile ? t('short-download-cv') : t('long-download-cv')}
                  </span>
                </TranslucidButton>
              } />
              <DropdownMenuContent className="w-40" align="start">
                <DropdownMenuGroup>
                  <DropdownMenuLabel>{t('available-languages')}</DropdownMenuLabel>
                  {Object.entries(availableLanguages).map(([code, { flag: Flag, nativeName, resumeFile, resumeName }]) => !resumeFile ? null : (
                    <DropdownMenuItem key={code} className="cursor-pointer font-bold">
                      <a key={code}
                        className="flex flex-row items-center gap-2"
                        href={resumeFile}
                        download={`Daniel Ramírez - ${resumeName ?? `Resume ${code}`}.pdf`}
                      >
                        <Flag className="h-8! w-8! rounded-md overflow-hidden" />
                        {nativeName}
                      </a>
                    </DropdownMenuItem>

                  ))}
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>

          </motion.div>


        </div>

      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 2.5,
          duration: 0.5,
          ease: 'easeInOut'
        }}

        className={cn(
          "flex flex-row justify-center items-center gap-5",
          isCurtainOn && "invisible"
        )}
      >
        <TranslucidIconLink
          href="https://github.com/DanielRamirez404"
          target="_blank"
          rel="noreferrer"
          icon={faGithub}
          aria-label="GitHub"
        />

        <TranslucidIconLink
          href="https://www.linkedin.com/in/danielramirezabou/"
          target="_blank"
          rel="noreferrer"
          icon={faLinkedin}
          aria-label="LinkedIn"
        />

        <TranslucidIconLink
          href="https://wa.link/mbd8fh"
          target="_blank"
          rel="noreferrer"
          icon={faWhatsapp}
          aria-label="WhatsApp"
        />

        <TranslucidIconLink
          href="mailto:danielramirezabou@gmail.com"
          icon={faEnvelope}
          aria-label="Email"
        />

        {isMobile && (
          <TranslucidIconLink
            href="tel:+584224047404"
            icon={faPhone}
            aria-label="Phone"
          />
        )}
      </motion.div>

      <motion.div
        className="translate-y-10"
        animate={{
          opacity: [0, 0, 1, 1, 0],
          y: [0, 0, -10, 40, 40]
        }}
        transition={{
          delay: 3,
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
          times: [0, 0.3, 0.6, 0.8, 1]
        }}
      >
        <ChevronsDown className="w-15 h-15" />
      </motion.div>

    </motion.header>
  );
}
