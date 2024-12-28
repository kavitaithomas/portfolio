import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <div className="bg-darkest-purple min-h-screen">
      <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-36">
        <NavBar />
        <Hero />
        <AboutMe />
      </div>
    </div>
  );
}

export default App;
