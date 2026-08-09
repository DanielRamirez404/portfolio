import { motion } from "motion/react"
import './buttons.css'
import { cn } from '#lib/utils';

type TranslucidButtonProps = React.ComponentPropsWithoutRef<typeof motion.button> & {
  rotate?: boolean;
}

export function TranslucidButton({ rotate, className, children, ...props }: TranslucidButtonProps) {
  return (
    <motion.button
      className={
        cn(
          "outline outline-bright-snow-100 px-3 py-2 rounded-4xl text-sm font-semibold",
          "relative cursor-pointer overflow-hidden btn-swipe",
          className
        )
      }

      whileHover={{ scale: 1.1, rotate: rotate ? 67 : undefined }}
      whileTap={{ scale: 0.95 }}

      transition={{
        duration: 0.15,
        ease: 'easeInOut'
      }}

      {...props}
    >
      {children}
    </motion.button>
  );
}
