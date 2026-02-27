import styles from "../styles/Skills.module.css";
import common from "../styles/common.module.css";

const Skills = () => {
  return (
    <section id="skills" className={styles.skillsSection}>
      <div className={styles.skillsContainer}>

        <h2 className={common.sectionTitle}>Skills</h2>
        <p className={common.sectionSubtitle}>
          Technologies I work with
        </p>

        <div className={styles.skillsGrid}>

          <div className={`${styles.skillCategory} ${common.glass}`}>
            <h3>Frontend</h3>
            <p>HTML5, CSS3, JavaScript (ES6+), React.js, TailwindCSS</p>
          </div>

          <div className={`${styles.skillCategory} ${common.glass}`}>
            <h3>Backend</h3>
            <p>Node.js, Express.js, RESTful APIs</p>
          </div>

          <div className={`${styles.skillCategory} ${common.glass}`}>
            <h3>Database & Tools</h3>
            <p>MongoDB, MySQL, Git, GitHub</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;