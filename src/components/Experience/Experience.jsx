import React from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";
import { useLanguage } from '../../context/LanguageContext';

const translations = {
  english: {
    experience: 'Experience'
  },
  spanish: {
    experience: 'Experiencia'
  },
  catalan: {
    experience: 'Experiència'
  }
};

export const Experience = () => {
  const { language } = useLanguage();

  const t = translations[language];

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>{t.experience}</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          ))}
        </div>
        <ul className={styles.history}>
          {history.map((historyItem, id) => (
            <li key={id} className={styles.historyItem}>
              <div className={styles.historyItemDetails}>
                <h3>{`${historyItem.role[language]}, ${historyItem.organisation[language]}`}</h3>
                <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                <ul>
                  {historyItem.experiences[language].map((experience, expId) => (
                    <li key={expId}>{experience}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
