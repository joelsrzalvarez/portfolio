import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import { useLanguage } from '../../context/LanguageContext';

export const About = () => {
  const { language } = useLanguage(); 

  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>{language === 'english' ? 'About' : 'Sobre mi'}</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt={language === 'english' ? "Me sitting with a laptop" : "Yo sentado con un portátil"}
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>{language === 'english' ? 'Frontend Developer' : 'Desarrollador Frontend'}</h3>
              <p>
                {language === 'english' 
                  ? "I'm a frontend developer with experience in building responsive and optimized sites"
                  : "Soy un desarrollador frontend con experiencia en la creación de sitios adaptables a todos los dispositivos y optimizados"}
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>{language === 'english' ? 'Backend Developer' : 'Desarrollador Backend'}</h3>
              <p>
                {language === 'english' 
                  ? "I have experience developing fast and optimised back-end systems and APIs"
                  : "Tengo experiencia en el desarrollo de sistemas backend rápidos, optimizados y APIs"}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
