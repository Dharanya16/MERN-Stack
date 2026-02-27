import styles from "../styles/Projects.module.css";
import common from "../styles/common.module.css";

const Projects = () => {
  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.projectsContainer}>

        <h2 className={common.sectionTitle}>Projects</h2>
        <p className={common.sectionSubtitle}>
          My Recent Work
        </p>

        <div className={styles.projectsGrid}>

          <div className={`${styles.projectCard} ${common.glass} card-hover`}>
            <h3> Visual Detection And Alert System</h3>
            <p>An AI based visual detection and alert system for identifying and warning about potential hazards in real-time.</p>
          </div>

          <div className={`${styles.projectCard} ${common.glass} card-hover`}>
            <h3>Attendance Management System</h3>
            <p>Developed a web application for managing attendance records using Ai and ml algorithms to automate the process and improve accuracy.</p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Projects;