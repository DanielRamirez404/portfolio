import { useRef } from "react";
import { TranslucidButton } from "./reusables/buttons";
import { motion, useScroll, useTransform } from "motion/react"
import { useTypedTranslations } from "#hooks/useTypedTranslations";

export function Footer() {

  const { t } = useTypedTranslations();

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.25, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);

  return (
    <footer ref={ref} className="w-full pb-14 sm:pb-28 pt-8 sm:pt-16">
      <motion.div
        style={{ opacity, y }}
        className="w-full flex flex-col items-center justify-center"
      >

        <div className="w-[90%] max-w-200 flex flex-col items-center justify-center gap-3">

          <TranslucidButton
            resize={false}
            shine={false}
            className="flex flex-row cursor-default w-full justify-between h-40 p-6!"
          >
            <div className="h-full flex flex-col items-start justify-end text-5xl/10 text-start">
              <h3>Daniel</h3>
              <h3 className="ms-3">Ramírez</h3>
            </div>

            <div className="flex flex-col text-sm sm:text-base gap-0.5 text-end sm:text-start">
              <h4 className="font-semibold mb-5">{t('letsConnect')}</h4>
              <a className="opacity-60 hover:opacity-100 transition-opacity duration-300" href="mailto:danielramirezabou@gmail.com">{t('email')}</a>
              <a className="opacity-60 hover:opacity-100 transition-opacity duration-300" href="https://www.linkedin.com/in/danielramirezabou/" target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="opacity-60 hover:opacity-100 transition-opacity duration-300" href="https://github.com/DanielRamirez404" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </TranslucidButton>

          <div className="w-full flex flex-row text-base font-semibold opacity-85 hover:opacity-100 transition-opacity duration-300">
            <span className="flex-1 text-start">© {new Date().getFullYear()}</span>
            <span className="flex-1 text-end">Daniel Ramírez</span>
          </div>

        </div>

      </motion.div>
    </footer>
  );
}
