import { useContext } from "react";
import { LenisContext } from "./lenis/context";

export function useLenis() {
  return useContext(LenisContext);
}
