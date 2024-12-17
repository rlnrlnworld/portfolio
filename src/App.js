import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Projects from './components/Projects';
import About from './components/About';

function App() {
  return (
    <div className="App">
     <Header />
     <HeroSection />
     <Projects />
     <About />
    </div>
  );
}

export default App;
