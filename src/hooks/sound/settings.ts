import { type Dispatch, type SetStateAction } from "react";

export type SoundSettings = {
  muted: boolean;
  setMuted: Dispatch<SetStateAction<boolean>>;
};
