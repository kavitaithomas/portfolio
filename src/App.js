import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-my-light min-h-screen overflow-x-hidden">
      <div className="mx-8 md:mx-16 lg:mx-36 max-w-full">
        <NavBar />
        <Hero />
        <AboutMe />
        <Projects />
        <TechStack />
        <Experience />
        <Contact />
      </div>
    </div>
  );
}

export default App;
