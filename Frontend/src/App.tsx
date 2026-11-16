import Navbar from "./components/Navbar";
import Hero from "./Hero/hero";
import About from "./components/About";
import Roadmap from "./components/Roadmap";
import Techstack from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Roadmap />
      <Techstack />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;