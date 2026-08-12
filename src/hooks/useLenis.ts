import { useEffect } from "react";
import Lenis from "lenis";
import { cancelFrame, frame } from "motion";

export function useLenis(lockDuration = 0) {
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);

    const lenis = new Lenis({
      autoRaf: false,
    });

    const updateMotionFrame = ({ timestamp }: { timestamp: number }) => {
      lenis.raf(timestamp);
    };

    frame.update(updateMotionFrame, true);

    let unlockTimer: ReturnType<typeof setTimeout> | undefined;

    if (lockDuration > 0) {
      lenis.stop();
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";

      unlockTimer = setTimeout(() => {
        lenis.start();
        document.body.style.overflow = "";
        document.documentElement.style.overflow = "";
      }, lockDuration);
    }

    return () => {
      cancelFrame(updateMotionFrame);
      lenis.destroy();

      if (unlockTimer) {
        clearTimeout(unlockTimer);
      }

      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [lockDuration]);
}
