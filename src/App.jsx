import Rail from "./components/Rail.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";

export default function App() {
  return (
    <div className="app-shell">
      <Rail />
      <main className="main">
        <div className="content">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </div>
      </main>
    </div>
  );
}
