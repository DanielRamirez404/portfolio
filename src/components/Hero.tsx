import { cn, generateUUID, splitIntoN } from "#lib/utils";
import { motion, type KeyframeOptions } from "motion/react"
import { Particles } from "./ui/particles";
import { TranslucidButton } from "./reusables/buttons";

import { Send } from 'lucide-react';

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


  return (
    <div className="relative flex flex-col w-full min-h-screen items-center justify-center">

      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        color="#ece8df"
        refresh
      />

      <JobTitleWord animationType="complex">
        Software
      </JobTitleWord>

      <div className="flex flex-row justify-center items-center gap-5">
        <JobTitleWord
          animationType="simple"
          transition={{
            duration: 0.5,
            delay: 2,
          }}
        >
          Engineer
        </JobTitleWord>

        <TranslucidButton className="translate-y-3 flex flex-row items-center justify-center gap-1">
          <Send size={16} className="shrink-0" />
          <span className="leading-none mb-[0.2rem]">Contact Me!</span>
        </TranslucidButton>
      </div>

    </div>
  );
}
