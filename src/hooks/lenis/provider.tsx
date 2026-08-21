import React, { useEffect, useState } from "react";
import Lenis from "lenis";
import { cancelFrame, frame } from "motion";
import { LenisContext } from "./context";

type LenisProviderProps = {
  children: React.ReactNode;
  lockDuration?: number;
};

export function LenisProvider({ children, lockDuration = 0 }: LenisProviderProps) {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);

    const lenisInstance = new Lenis({
      autoRaf: false,
    });

    setLenis(lenisInstance);

    const updateMotionFrame = ({ timestamp }: { timestamp: number }) => {
      lenisInstance.raf(timestamp);
    };

    frame.update(updateMotionFrame, true);

    let unlockTimer: ReturnType<typeof setTimeout> | undefined;

    if (lockDuration > 0) {
      lenisInstance.stop();
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";

      unlockTimer = setTimeout(() => {
        lenisInstance.start();
        document.body.style.overflow = "";
        document.documentElement.style.overflow = "";
      }, lockDuration);
    }

    return () => {
      cancelFrame(updateMotionFrame);
      lenisInstance.destroy();
      setLenis(null);

      if (unlockTimer) {
        clearTimeout(unlockTimer);
      }

      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [lockDuration]);

  return (
    <LenisContext.Provider value={lenis} >
      {children}
    </LenisContext.Provider>
  );
}

