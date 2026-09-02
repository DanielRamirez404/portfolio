import { ES, US, FR, DE, BR, JP, type FlagComponent } from "country-flag-icons/react/3x2";
import EnglishResume from '../assets/English Resume.pdf';
import SpanishResume from '../assets/CV Español.pdf';

type code = string;

type Languages = Record<code, {
  flag: FlagComponent;
  nativeName: string;
  resumeFile?: string;
  resumeName?: string;
}>

export const languages: Languages = {
  en: { flag: US, nativeName: "English", resumeFile: EnglishResume, resumeName: "English Resume" },
  es: { flag: ES, nativeName: "Español", resumeFile: SpanishResume, resumeName: "CV Español" },
  fr: { flag: FR, nativeName: "Français" },
  de: { flag: DE, nativeName: "Deutsch" },
  pt: { flag: BR, nativeName: "Português" },
  ja: { flag: JP, nativeName: "日本語" },
};

export const availableTranslations = ["en", "es"];

export const availableLanguages: Languages = Object.fromEntries(
  Object.entries(languages).filter(([code]) =>
    availableTranslations.includes(code)
  )
) as Languages;
