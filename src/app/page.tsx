import Hero from "@/components/Hero";
// import { Hero } from "@/components/Hero";

import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";
import PMOSection from "@/components/PMOSection";
import Services from "@/components/Services";


export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <PMOSection />
        <Services />
        <Contact />
        <ScrollToTop />
        <Footer />
      </main>

    </>
  );
}
