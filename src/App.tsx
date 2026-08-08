import { Curtain } from "#components/Curtain";
import { Hero } from "#components/Hero";
import { useLenis } from "#hooks/useLenis";
import { motion } from "motion/react"

function App() {
  useLenis()

  return (
    <div className="relative min-h-screen w-screen flex flex-col items-center justify-center">
      <Curtain delay={3} />

      <Hero />
    </div>
  );
}

export default App;
