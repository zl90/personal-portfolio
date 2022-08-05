import Hero from "./Hero/Hero";
import Info from "./Info/Info";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import Works from "./Works/Works";

function Content() {
  return (
    <main className="content-container">
      <Hero />
      <Info />
      <Skills />
      <Works />
      <Projects />
    </main>
  );
}

export default Content;
