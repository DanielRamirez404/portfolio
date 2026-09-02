import { useIsMobile } from "#hooks/use-mobile";
import { cn } from "#lib/utils";
import { motion, type KeyframeOptions } from "motion/react"
import { useEffect, useState } from "react";

type CurtainProps = {
  delay: number;
};

export function Curtain({ delay }: CurtainProps) {
  const isMobile = useIsMobile();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setReady(true), 500);
    return () => clearTimeout(timer);
  }, []);

  if (!ready || isMobile) return null;

  const timeFramesSettings: KeyframeOptions = {
    duration: delay,
    ease: "easeInOut",
    times: [0, 0.1, 0.8, 1],
  }

  return (
    <motion.div
      className={cn("absolute inset-0 bg-raspberry-500 z-10", (!ready || isMobile) && "invisible")}
      animate={{ opacity: [0, 1, 1], y: [0, 0, "-100%"] }}
      
      transition={{ 
        opacity: timeFramesSettings,
        y: timeFramesSettings,
      }}
    />
  );
}
