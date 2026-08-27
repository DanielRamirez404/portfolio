import { createContext } from "react";
import type { SoundSettings } from "./settings";

export const SoundSettingsContext = createContext<SoundSettings | null>(null);
