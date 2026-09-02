import { motion, useAnimationControls } from "motion/react"
import './buttons.css'
import { cn } from '#lib/utils';
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { useIsMobile } from "#hooks/use-mobile";

type TranslucidButtonProps = React.ComponentPropsWithoutRef<typeof motion.button> & {
  rotate?: boolean;
  shine?: boolean;
  resize?: boolean;
  active?: boolean;
  ref?: React.Ref<HTMLButtonElement>;
}

export function TranslucidButton({
  rotate,
  resize = true,
  active = false,
  className,
  shine = true,
  children,
  onHoverStart,
  onHoverEnd,
  ...props
}: TranslucidButtonProps) {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const controls = useAnimationControls();

  return (
    <motion.button
      className={
        cn(
          "outline outline-bright-snow-100 px-3 py-2 rounded-4xl text-sm font-semibold",
          "relative cursor-pointer overflow-hidden transition-colors duration-300 ease-in-out",
          shine && "btn-swipe",
          active && "bg-bright-snow-100 text-charcoal-blue-950 btn-active",
          className
        )
      }

      onHoverStart={
        (event, info) => {
          setIsHovered(true);
          controls.stop();
          controls.start({
            rotate: rotate ? -10 : undefined,
            scale: resize ? 1.1 : undefined,
            transition: { duration: 0.2, ease: "easeInOut" }
          });
          onHoverStart?.(event, info);
        }
      }
      onHoverEnd={
        (event, info) => {
          setIsHovered(false);

          controls.start({
            scale: 1,
            rotate: rotate ? [-10, 12, 0] : undefined,
            transition: {
              duration: 0.4,
              times: [0, 0.6, 1],
              ease: "easeOut"
            },
          })

          onHoverEnd?.(event, info);
        }
      }

      onTapStart={
        () => {
          controls.start({
            scale: resize ? [0.95, 1.1] : undefined,
            transition: {
              duration: 0.4,
              times: [0, 0.6, 1],
              ease: "easeOut"
            },
          })
        }
      }


      animate={controls}

      transition={{
        scale: {
          duration: 0.15,
          ease: 'easeInOut'
        },
        rotate: !isHovered
          ? { duration: 0.4, times: [0, 0.6, 1], ease: "easeOut" }
          : { duration: 0.5 }
      }}

      {...props}
    >
      {children}
    </motion.button>
  );
}

type TranslucidIconButtonProps = Omit<TranslucidButtonProps, 'rotate'> & {
  icon: IconProp;
  href: string;
  target?: string;
  rel?: string;
};

export function TranslucidIconLink({ icon, href, target, rel, ...props }: TranslucidIconButtonProps) {
  return (
    <a href={href} target={target} rel={rel}>
      <TranslucidButton rotate {...props} >
        <FontAwesomeIcon icon={icon} className="h-5! w-5! sm:h-6! sm:w-6!" />
      </TranslucidButton>
    </a>
  );
}

type IconButtonProps = React.ComponentPropsWithoutRef<typeof motion.button>;

export function IconButton({ className, children, ...props }: IconButtonProps) {
  const isMobile = useIsMobile();

  return (
    <motion.button
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.25 }}
      whileTap={{ scale: isMobile ? 0.8 : undefined }}
      className={cn("cursor-pointer", className)}
      {...props}
    >
      {children}
    </motion.button>
  );
}
