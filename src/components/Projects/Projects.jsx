import React from "react";
import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";
import { useLanguage } from '../../context/LanguageContext';

const translations = {
  english: {
    projects: 'Projects'
  },
  spanish: {
    projects: 'Proyectos'
  },
  catalan: {
    projects: 'Projectes'
  }
};

export const Projects = () => {
  const { language } = useLanguage();

  const t = translations[language];

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>{t.projects}</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};
