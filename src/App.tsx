import { About } from "./components/About";
import { BackgroundBlobs } from "./components/BackgroundBlobs";
import { Closing } from "./components/Closing";
import { CursorGlow } from "./components/CursorGlow";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
import { Skills } from "./components/Skills";
import { Work } from "./components/Work";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-bg-base text-text-primary">
      <BackgroundBlobs />
      <CursorGlow />
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