import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import { useLanguage } from '../../context/LanguageContext';

const translations = {
  english: {
    about: 'About',
    frontendTitle: 'Frontend Developer',
    frontendDescription: "I'm a frontend developer with experience in building responsive and optimized sites",
    backendTitle: 'Backend Developer',
    backendDescription: "I have experience developing fast and optimised back-end systems and APIs",
    aboutImageAlt: "Me sitting with a laptop"
  },
  spanish: {
    about: 'Sobre mí',
    frontendTitle: 'Desarrollador Frontend',
    frontendDescription: "Soy un desarrollador frontend con experiencia en la creación de sitios adaptables a todos los dispositivos y optimizados",
    backendTitle: 'Desarrollador Backend',
    backendDescription: "Tengo experiencia en el desarrollo de sistemas backend rápidos, optimizados y APIs",
    aboutImageAlt: "Yo sentado con un portátil"
  },
  catalan: {
    about: 'Sobre mi',
    frontendTitle: 'Desenvolupador Frontend',
    frontendDescription: "Soc un desenvolupador frontend amb experiència en la creació de llocs web adaptables a tots els dispositius i optimitzats",
    backendTitle: 'Desenvolupador Backend',
    backendDescription: "Tinc experiència en el desenvolupament de sistemes backend ràpids, optimitzats i APIs",
    aboutImageAlt: "Jo assegut amb un portàtil"
  }
};

export const About = () => {
  const { language } = useLanguage();

  const t = translations[language];

  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>{t.about}</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt={t.aboutImageAlt}
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>{t.frontendTitle}</h3>
              <p>{t.frontendDescription}</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>{t.backendTitle}</h3>
              <p>{t.backendDescription}</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
