import NavBar from "./components/NavBar";
import Hero2 from "./components/Hero2";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import Stars from "./components/Stars";

function App() {
  return (
    <div className="bg-my-gray min-h-screen overflow-x-hidden">
      <div className="mx-8 md:mx-16 lg:mx-40 max-w-full">
        <Stars />
        <NavBar />
        <Hero2 />
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
