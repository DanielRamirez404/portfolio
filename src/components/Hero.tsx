import { cn, generateUUID, splitIntoN } from "#lib/utils";
import { motion, type KeyframeOptions } from "motion/react"
import { Particles } from "./ui/particles";
import { TranslucidButton, TranslucidIconLink, } from "./reusables/buttons";
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Download } from 'lucide-react';
import { useIsMobile } from "#hooks/use-mobile";
import profilePicture from '#assets/daniel.jpg';
import { VE } from 'country-flag-icons/react/3x2'

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
        className={cn(className, "z-20 text-xl sm:text-8xl/20 font-bold text-center align-middle")}
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
          key={generateUUID()}
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
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen py-[5vh] relative flex flex-col w-full items-center justify-center gap-3">

      <div className="flex flex-row gap-3 items-center justify-center">
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
          <h2 className="font-bold text-2xl leading-none">Daniel Ramírez</h2>
          <div className="flex flex-row items-center gap-1.5">
            <VE className="h-10 w-10 rounded-md overflow-hidden" />
            <div className="text-xs leading-none">
              <p>Puerto la Cruz,</p>
              <p>Venezuela</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <JobTitleWord animationType="complex">
          SOFTWARE
        </JobTitleWord>

        <div className="flex flex-row justify-center items-center gap-3">
          <JobTitleWord
            animationType="simple"
            transition={{
              duration: 0.5,
              delay: 2,
            }}
          >
            ENGINEER
          </JobTitleWord>

          <a
            href={`${import.meta.env.BASE_URL}files/CV.pdf`}
            download="Daniel-Ramírez-CV.pdf"
            className="inline-block"
          >
            <TranslucidButton className="flex flex-row items-center justify-center gap-1">
              <Download size={16} className="shrink-0" />
              <span className="leading-none mb-[0.1rem]">Download my CV!</span>
            </TranslucidButton>
          </a>

        </div>

      </div>

      <div className="flex flex-row justify-center items-center gap-5">
        <TranslucidIconLink href="https://github.com/DanielRamirez404" target="_blank" rel="noreferrer" icon={faGithub} />
        <TranslucidIconLink href="https://www.linkedin.com/in/danielramirezabou/" target="_blank" rel="noreferrer" icon={faLinkedin} />
        <TranslucidIconLink href="https://wa.link/mbd8fh" target="_blank" rel="noreferrer" icon={faWhatsapp} />
        <TranslucidIconLink href="mailto:danielramirezabou@gmail.com" icon={faEnvelope} />
        {isMobile && (<TranslucidIconLink href="tel:+584224047404" icon={faPhone} />)}
      </div>

    </div>
  );
}
