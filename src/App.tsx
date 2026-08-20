import { Curtain } from "#components/Curtain";
import { Hero } from "#components/Hero";
import { Projects } from "#components/Projects";
import { Skills } from "#components/Skills";
import { Particles } from "#components/ui/particles";
import { useLenis } from "#hooks/useLenis";

function App() {
  useLenis(4000)

  return (
    <div className="relative min-h-screen w-screen flex flex-col justify-center overflow-x-hidden">
      <Particles
        className="absolute inset-0 z-0"
        quantity={300}
        ease={80}
        color="#ece8df"
        refresh
      />
      <Curtain delay={3} />
      <Hero />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
