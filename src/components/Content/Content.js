import Companies from "./Companies/Companies";
import Hero from "./Hero/Hero";
import Info from "./Info/Info";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import Socials from "./Socials/Socials";
import Works from "./Works/Works";

function Content() {
  return (
    <main className="content-container">
      <Hero />
      <Info />
      <Skills />
      <Works />
      <Projects />
      <Companies />
      <Socials />
    </main>
  );
}

export default Content;
