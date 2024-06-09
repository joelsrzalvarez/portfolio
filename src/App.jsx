import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import { Navbar } from './components/Navbar/Navbar';
import { LanguageSelector } from './components/LanguageSelector/LanguageSelector';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Experience } from './components/Experience/Experience';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';
import { Education } from './components/Education/Education';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, []);

  return (
    <LanguageProvider>
    <div className={styles.App}>
      <Navbar />
      <LanguageSelector />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Contact />
      <button
        className={styles.scrollTop}
        onClick={scrollTop}
        style={{ display: showScroll ? 'flex' : 'none' }}
      >
        &#8679;
      </button>
    </div>
    </LanguageProvider>
  );
}

export default App;
