import React from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";
import { useLanguage } from '../../context/LanguageContext';

const translations = {
  english: {
    demo: 'Demo',
    source: 'Source'
  },
  spanish: {
    demo: 'Demo',
    source: 'Código'
  },
  catalan: {
    demo: 'Demo',
    source: 'Codi'
  }
};

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  const { language } = useLanguage();

  const t = translations[language];

  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title[language]}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title[language]}</h3>
      <p className={styles.description}>{description[language]}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        <a href={demo} className={styles.link} target="_blank">
          {t.demo}
        </a>
        {source && (
          <a href={source} className={styles.link} target="_blank">
            {t.source}
          </a>
        )}
      </div>
    </div>
  );
};
