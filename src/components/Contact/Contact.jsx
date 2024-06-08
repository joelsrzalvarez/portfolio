import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import { useLanguage } from '../../context/LanguageContext';

export const Contact = () => {
  const { language } = useLanguage();
  console.log(language)

  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        {language === 'english' ? (
          <>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
          </>
        ) : (
          <>
            <h2>Contacto</h2>
            <p>¡Siéntete libre de contactarme cuando desees!</p>
          </>
        )}
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt={language === 'english' ? "Email icon" : "Icono Correo"} />
          <a href="mailto:contactojoelsuarez@gmail.com">contactojoelsuarez@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/linkedinIcon.png")} alt={language === 'english' ? "LinkedIn icon" : "Icono LinkedIn"} />
          <a href="https://www.linkedin.com/in/joelsrzalvarez/" target="_blank" rel="noopener noreferrer">linkedin.com/in/joelsrzalvarez/</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt={language === 'english' ? "Github icon" : "Icono Github"} />
          <a href="https://github.com/joelsrzalvarez" target="_blank" rel="noopener noreferrer">github.com/joelsrzalvarez</a>
        </li>
      </ul>
    </footer>
  );
};
