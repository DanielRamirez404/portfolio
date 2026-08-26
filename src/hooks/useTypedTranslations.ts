import { english_translations } from "#data/i18next:";
import { useTranslation } from "react-i18next";

export type TranslationKey = keyof typeof english_translations;

export function useTypedTranslations() {
  const { t, ...rest } = useTranslation();
    
  return {
    t: (key: TranslationKey) => t(key),
    ...rest
  }
}
