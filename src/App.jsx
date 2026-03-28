import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import TechStack from "./components/TechStack/TechStack";
import Studies from "./components/Studies/Studies";
import EducationJourney from "./components/Education/EducationJourney";
import Works from "./components/Works/Works";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <div style={{paddingTop: '100PX'}}>
              <Hero />
              <About />
              <TechStack />
              <Studies />
              <EducationJourney />
              <Works />
              <Contact />
      </div>

      <Footer />
    </div>
  );
}

export default App;