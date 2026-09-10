import { useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Ideas from "./components/Ideas";
import Life from "./components/Life";
import MobileNav from "./components/MobileNav";
import SideNav from "./components/SideNav";
import TopBar from "./components/TopBar";
import Work from "./components/Work";
import { useScrollProgress } from "./hooks/useScrollProgress";
import { useScrollReveal } from "./hooks/useScrollReveal";
import { useScrollSpy } from "./hooks/useScrollSpy";

const SECTIONS = ["about", "work", "experience", "life", "contact"];

export default function App() {
  const active = useScrollSpy(SECTIONS);
  useScrollReveal();
  useScrollProgress();

  useEffect(() => {
    document.body.classList.add("is-loaded");
    return () => document.body.classList.remove("is-loaded");
  }, []);

  return (
    <div className="brutalist-page">
      <SideNav active={active} />
      <TopBar />
      <MobileNav active={active} />
      <main className="main-canvas">
        <Hero />
        <About />
        <Work />
        <Experience />
        <Ideas />
        <Life />
        <Contact />
      </main>
    </div>
  );
}
