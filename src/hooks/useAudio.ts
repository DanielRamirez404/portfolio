import { useContext, useState } from "react";
import useSound from "use-sound";
import { SoundSettingsContext } from "./sound/context";

type UseSoundEffectOptions = {
  src: string;
  onend?: () => void;
}

export function useAudio({ src, onend }: UseSoundEffectOptions) {
  const { muted } = useContext(SoundSettingsContext) ?? {};

  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const [play, { pause, stop }] = useSound(src, {
    volume: muted ? 0 : 1,
    interrupt: true,

    onplay: () => {
      setIsPlaying(true);
    },

    onpause: () => {
      setIsPlaying(false);
    },

    onstop: () => {
      setIsPlaying(false);
    },

    onend: onend,
  });

  return {
    isPlaying,
    play,
    pause,
    stop,
  };
}

export function useVolume() {
  const { muted, setMuted } = useContext(SoundSettingsContext) ?? {};
  
  const toggle = () => setMuted?.((prev) => !prev);

  return {
    isMuted: muted,
    toggle
  };
}
