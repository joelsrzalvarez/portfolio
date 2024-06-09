import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { LanguageSelector } from './components/LanguageSelector/LanguageSelector';
import { Education } from './components/Education/Education';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <LanguageSelector/>
      <About />
      <Education/>
      <Experience />
      <Projects />
      <Contact />
    </div>
    </LanguageProvider>
  );
}

export default App;
