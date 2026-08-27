import React, { useState } from "react";
import { SoundSettingsContext } from "./context";

type SoundProviderProps = {
  children: React.ReactNode;
};

export function SoundProvider({ children }: SoundProviderProps) {
  const [muted, setMuted] = useState<boolean>(true);

  return (
    <SoundSettingsContext value={{ muted, setMuted }}>
      {children}
    </SoundSettingsContext>
  );
}

