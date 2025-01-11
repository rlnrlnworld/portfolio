import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Projects from './components/Projects';
import About from './components/About';
import Scroll from './components/Scroll';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
     {/* <Header /> */}
     <HeroSection />
     <About />
     <Projects />
     <Scroll />
     <Contact />
    </div>
  );
}

export default App;
