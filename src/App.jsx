import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Writing from "./components/Writing";
import Contact from "./components/Contact";

function App() {
  return (
    <main className="bg-background min-h-screen text-text selection:bg-primary/30">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Writing />
      <Contact />
    </main>
  );
}

export default App;
