import About from "@/components/About";
import Experience from "@/components/Experience";
import Intro from "@/components/Intro";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import SectionDivider from "@/components/section-divider";
import Contact from "@/components/Contact";
import Education from "@/components/Education";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 ">
       <Intro/>
       <SectionDivider/>
       <Education/>
       <About/>
       <Projects/>
       <Skills/>
       <Experience/>
       <Contact/>
    </main>
  );
}
