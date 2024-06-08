import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import { useLanguage } from '../../context/LanguageContext'; 

export const Hero = () => {
  const { language } = useLanguage(); 

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          {language === 'english' ? "Hi, I'm Joel" : "Hola, soy Joel"}
        </h1>
        <p className={styles.description}>
          {language === 'english' 
            ? "I'm a full-stack developer with almost 2 years of experience using JavaScript. Reach out if you'd like to know more about me!"
            : "Soy un desarrollador full-stack con casi 2 años de experiencia utilizando JavaScript. ¡No dudes en contactarme si quieres saber más sobre mí!"}
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          {language === 'english' ? "Contact Me" : "Contáctame"}
        </a>
      </div>
      <img src={getImageUrl("hero/logoImage.png")} alt={language === 'english' ? "Hero image of me" : "Imagen de héroe de mí"} className={styles.heroImg}/>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
