import React, { useEffect, useState } from "react";
import { SoundSettingsContext } from "./context";

type SoundProviderProps = {
  children: React.ReactNode;
};

export function SoundProvider({ children }: SoundProviderProps) {
  const [muted, setMuted] = useState<boolean>(() => !!localStorage.getItem('audio-preference'));

  useEffect(() => {
    if (muted) {
      localStorage.setItem('audio-preference', 'true');
    } else {
      localStorage.removeItem('audio-preference');
    }
  }, [muted]);

  return (
    <SoundSettingsContext value={{ muted, setMuted }}>
      {children}
    </SoundSettingsContext>
  );
}

