import React from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";
import { useLanguage } from '../../context/LanguageContext';

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  const { language } = useLanguage();

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
        <a href={demo} className={styles.link} target="_blank" rel="noopener noreferrer">
          {language === 'english' ? 'Demo' : 'Demo'}
        </a>
        {source && (
          <a href={source} className={styles.link} target="_blank" rel="noopener noreferrer">
          {language === 'english' ? 'Source' : 'Código'}          
          </a>
        )}
      </div>
    </div>
  );
};
