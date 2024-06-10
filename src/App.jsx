import React from 'react';
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
import ContactWhatsapp from './components/ContactWhatsapp/ContactWhatsapp';
import ScrollButton from './components/ScrollButton/ScrollButton';

function App() {
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
        <ContactWhatsapp/>
        <ScrollButton />
      </div>
    </LanguageProvider>
  );
}

export default App;
