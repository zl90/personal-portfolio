import Hero from "./Hero/Hero";
import Info from "./Info/Info";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";

function Content() {
  return (
    <main className="content-container">
      <Hero />
      <Info />
      <Skills />
      <Projects />
    </main>
  );
}

export default Content;
