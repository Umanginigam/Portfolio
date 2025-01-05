import Image from "next/image";
import Hero from "@/components/main/Hero";
import Skills from "@/components/main/Skills"
import About from "@/components/main/About";
import Projects from "@/components/main/Project";
import Contact from "@/components/main/Contact";
export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col py-20">
        <Hero />
        <About />
        <div className="pt-10">
          <Skills />
        </div>
        <div className="pt-0">
          <Projects />
        </div>
        <Contact />
      </div>
    </main>
  );
}

