import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import UIUXProjects from './components/UIUXProjects';
import FrontEndProjects from './components/FrontEndProjects';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <UIUXProjects />
        <FrontEndProjects />
        <Timeline />
        <Contact />
      </main>
      <footer className="footer">
        <p>© {new Date().getFullYear()} — Built with React</p>
      </footer>
    </>
  );
}

export default App;
