import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import { useLanguage } from '../../context/LanguageContext';

const translations = {
  english: {
    greeting: "Hi, I'm Joel",
    description: "I'm a full-stack developer with almost 2 years of experience using JavaScript. Reach out if you'd like to know more about me!",
    contactMe: "Contact Me",
    heroImageAlt: "Image of me"
  },
  spanish: {
    greeting: "Hola, soy Joel",
    description: "Soy un desarrollador full-stack con casi 2 años de experiencia utilizando JavaScript. ¡No dudes en contactarme si quieres saber más sobre mí!",
    contactMe: "Contáctame",
    heroImageAlt: "Imagen de mí"
  },
  catalan: {
    greeting: "Hola, sóc en Joel",
    description: "Soc un desenvolupador full-stack amb gairebé 2 anys d'experiència utilitzant JavaScript. No dubtis a contactar-me si vols saber més sobre mi!",
    contactMe: "Contacta'm",
    heroImageAlt: "Imatge meva"
  }
};

export const Hero = () => {
  const { language } = useLanguage();

  const t = translations[language];

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>{t.greeting}</h1>
        <p className={styles.description}>{t.description}</p>
        <a href="mailto:contactojoelsuarez@gmail.com" className={styles.contactBtn}>{t.contactMe}</a>
      </div>
      <img src={getImageUrl("hero/logoImage.png")} alt={t.heroImageAlt} className={styles.heroImg}/>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
