import { Curtain } from "#components/Curtain";
import { Hero } from "#components/Hero";
import { Projects } from "#components/Projects";
import { Skills } from "#components/Skills";
import { Particles } from "#components/ui/particles";
import { LenisProvider } from "#hooks/lenis/provider.tsx";
import { SoundProvider } from "#hooks/sound/provider.tsx";
import './data/i18next'

function App() {
  return (
    <LenisProvider lockDuration={4000}>
      <SoundProvider>
        <div className="relative min-h-screen w-screen flex flex-col justify-center overflow-x-hidden">
          <Particles
            className="absolute inset-0 z-0 h-full w-full"
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
      </SoundProvider>
    </LenisProvider>
  );
}

export default App;
