import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Projects from './components/Projects';
import About from './components/About';
import Scroll from './components/Scroll';

function App() {
  return (
    <div className="App">
     <Header />
     <HeroSection />
     <Projects />
     <About />
     <Scroll />
    </div>
  );
}

export default App;
