import React from "react";
import styles from "./Education.module.css";
import education from "../../data/education.json";
import { useLanguage } from '../../context/LanguageContext';

export const Education = () => {
  const { language } = useLanguage(); 

  return (
    <section className={styles.container} id="education">
      <h2 className={styles.title}>{language === 'english' ? 'Education' : 'Educación'}</h2>
      <div className={styles.content}>
        <ul className={styles.educationList}>
          {education.map((eduItem, id) => {
            return (
              <li key={id} className={styles.educationItem}>
                <div className={styles.educationItemDetails}>
                  <h3>{eduItem.title}</h3>
                  <p>{eduItem.study[language]}</p>
                  <p>{eduItem.time}</p>
                  <ul>
                    {eduItem.summary[language].map((summaryItem, summaryId) => {
                      return <li key={summaryId}>{summaryItem}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
