import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import { useLanguage } from '../../context/LanguageContext';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { language } = useLanguage(); 

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        {language === 'english' ? 'Portfolio' : 'Portafolio'}
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt={language === 'english' ? 'menu-button' : 'botón de menú'}
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">
              {language === 'english' ? 'About' : 'Acerca de'}
            </a>
          </li>
          <li>
            <a href="#experience">
              {language === 'english' ? 'Experience' : 'Experiencia'}
            </a>
          </li>
          <li>
            <a href="#projects">
              {language === 'english' ? 'Projects' : 'Proyectos'}
            </a>
          </li>
          <li>
            <a href="#contact">
              {language === 'english' ? 'Contact' : 'Contacto'}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
