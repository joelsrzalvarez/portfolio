import React, { useState } from 'react';
import styles from './LanguageSelector.module.css';
import { getImageUrl } from '../../utils';
import { useLanguage } from '../../context/LanguageContext';

export const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLanguageChange = (language) => {
    setLanguage(language);
    setMenuOpen(false);
  };

  return (
    <div className={styles.languageSelector}>
      <button className={styles.dropdownBtn} onClick={() => setMenuOpen(!menuOpen)}>
        <img
          src={getImageUrl(`languages/${language}.png`)}
          alt={language}
          className={styles.selectedImage}
        />
      </button>
      {menuOpen && (
        <div className={styles.dropdownContent}>
          <img
            src={getImageUrl('languages/english.png')}
            alt="English"
            onClick={() => handleLanguageChange('english')}
            className={language === 'english' ? styles.selected : ''}
          />
          <img
            src={getImageUrl('languages/spanish.png')}
            alt="Spanish"
            onClick={() => handleLanguageChange('spanish')}
            className={language === 'spanish' ? styles.selected : ''}
          />
          <img
            src={getImageUrl('languages/catalan.png')}
            alt="Catalan"
            onClick={() => handleLanguageChange('catalan')}
            className={language === 'catalan' ? styles.selected : ''}
          />
        </div>
      )}
    </div>
  );
};
