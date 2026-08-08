import { motion } from "motion/react"

type CurtainProps = {
  delay: number;
};

export function Curtain({ delay }: CurtainProps) {
  return (
    <motion.div
      className="absolute inset-0 bg-raspberry-500 z-10"
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{
        duration: 1,
        delay
      }}
    />
  )
}
