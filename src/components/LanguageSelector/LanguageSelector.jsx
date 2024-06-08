import React from 'react';
import styles from './LanguageSelector.module.css';
import { getImageUrl } from '../../utils';
import { useLanguage } from '../../context/LanguageContext';

export const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (language) => {
    setLanguage(language);
  };

  return (
    <div className={styles.languageSelector}>
      <div className={styles.languages}>
        <img
          src={getImageUrl('languages/english.png')}
          alt="English"
          onClick={() => handleLanguageChange('english')}
          className={language === 'english' ? styles.selected : ''}
        />
        <img
          src={getImageUrl('languages/spain.png')}
          alt="Spanish"
          onClick={() => handleLanguageChange('spanish')}
          className={language === 'spanish' ? styles.selected : ''}
        />
      </div>
    </div>
  );
};
