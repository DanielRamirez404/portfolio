import { useEffect } from "react";
import Lenis from "lenis";
import { cancelFrame, frame } from "motion"


export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: false,
    });

    const updateMotionFrame = ({ timestamp }: { timestamp: number }) => {
      lenis.raf(timestamp);
    }

    frame.update(updateMotionFrame, true);

    return () => {
      cancelFrame(updateMotionFrame);
      lenis.destroy();
    };
  }, []);
}
