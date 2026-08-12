import { Curtain } from "#components/Curtain";
import { Hero } from "#components/Hero";
import { Skills } from "#components/Skills";
import { useLenis } from "#hooks/useLenis";

function App() {
  useLenis()

  return (
    <div className="relative min-h-screen w-screen flex flex-col justify-center">
      <Curtain delay={3} />
      <Hero />
      <Skills />
    </div>
  );
}

export default App;
