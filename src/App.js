import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Projects from './components/Projects';
import About from './components/About';
import Scroll from './components/Scroll';
import Contact from './components/Contact';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    min-width: 704px; /* 최소 너비 설정 */
    overflow-x: hidden; /* 가로 스크롤 방지 */
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <HeroSection />
        <About />
        <Projects />
        <Scroll />
        <Contact />
      </div>
    </>
  );
}

export default App;
