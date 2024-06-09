import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import { useLanguage } from '../../context/LanguageContext';

const translations = {
  english: {
    portfolio: 'Portfolio',
    menuButton: 'menu-button',
    about: 'About',
    experience: 'Experience',
    education: 'Education',
    projects: 'Projects',
    contact: 'Contact',
  },
  spanish: {
    portfolio: 'Portafolio',
    menuButton: 'botón de menú',
    about: 'Acerca de',
    experience: 'Experiencia',
    education: 'Educación',
    projects: 'Proyectos',
    contact: 'Contacto',
  },
  catalan: {
    portfolio: 'Portafoli',
    menuButton: 'botó de menú',
    about: 'Sobre mi',
    experience: 'Experiència',
    education: 'Educació',
    projects: 'Projectes',
    contact: 'Contacte',
  },
};

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { language } = useLanguage();

  const t = translations[language];

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        {t.portfolio}
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt={t.menuButton}
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">
              {t.about}
            </a>
          </li>
          <li>
            <a href="#experience">
              {t.experience}
            </a>
          </li>
          <li>
            <a href="#education">
              {t.education}
            </a>
          </li>
          <li>
            <a href="#projects">
              {t.projects}
            </a>
          </li>
          <li>
            <a href="#contact">
              {t.contact}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
