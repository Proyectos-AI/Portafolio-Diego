import Particles from "./components/Particles";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import AISection from "./components/AISection";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      {/* Background layers */}
      <div className="fixed inset-0 z-[-10] bg-surface-container-lowest" />
      <div className="aurora-blob w-[500px] h-[500px] bg-primary/10 top-[-10%] left-[-5%] rounded-full" />
      <div className="aurora-blob w-[600px] h-[600px] bg-secondary/10 bottom-[-10%] right-[-5%] rounded-full" />
      <div className="fixed inset-0 z-[-9] dot-grid opacity-30" />
      <Particles />

      <Navbar />

      <main className="relative z-10 pt-20">
        <Hero />
        <Stats />
        <About />
        <Projects />
        <TechStack />
        <AISection />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
