import NavBar from "./components/Navbar";
import "./App.css";
import Banner from "./components/Banner";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { Contact } from "./components/Contact";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
