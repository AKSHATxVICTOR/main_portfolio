import { About } from "./components/About";
import { Closing } from "./components/Closing";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
import { Skills } from "./components/Skills";
import { Work } from "./components/Work";

export default function App() {
  return (
    <div className="min-h-screen bg-ink-base text-bone">
      <Nav />
      <main>
        <Hero />
        <About />
        <Work />
        <Skills />
        <Closing />
      </main>
      <Footer />
    </div>
  );
}
