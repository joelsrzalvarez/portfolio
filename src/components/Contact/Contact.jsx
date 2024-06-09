import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import { useLanguage } from '../../context/LanguageContext';

const translations = {
  english: {
    contact: 'Contact',
    message: 'Feel free to reach out!',
    emailAlt: 'Email icon',
    linkedinAlt: 'LinkedIn icon',
    githubAlt: 'Github icon'
  },
  spanish: {
    contact: 'Contacto',
    message: '¡Siéntete libre de contactarme cuando desees!',
    emailAlt: 'Icono Correo',
    linkedinAlt: 'Icono LinkedIn',
    githubAlt: 'Icono Github'
  },
  catalan: {
    contact: 'Contacte',
    message: 'No dubtis a contactar-me quan vulguis!',
    emailAlt: 'Icona Correu',
    linkedinAlt: 'Icona LinkedIn',
    githubAlt: 'Icona Github'
  }
};

export const Contact = () => {
  const { language } = useLanguage();

  const t = translations[language];

  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>{t.contact}</h2>
        <p>{t.message}</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt={t.emailAlt} />
          <a href="mailto:contactojoelsuarez@gmail.com">contactojoelsuarez@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/linkedinIcon.png")} alt={t.linkedinAlt} />
          <a href="https://www.linkedin.com/in/joelsrzalvarez/" target="_blank" rel="noopener noreferrer">linkedin.com/in/joelsrzalvarez/</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt={t.githubAlt} />
          <a href="https://github.com/joelsrzalvarez" target="_blank" rel="noopener noreferrer">github.com/joelsrzalvarez</a>
        </li>
      </ul>
    </footer>
  );
};
