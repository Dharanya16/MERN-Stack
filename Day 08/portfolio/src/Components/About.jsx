import styles from "../styles/About.module.css";
import common from "../styles/common.module.css";

const About = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.aboutContainer}>

        <h2 className={common.sectionTitle}>About Me</h2>
        <p className={common.sectionSubtitle}>Who I Am</p>

        <div className={styles.aboutContent}>
          <div className={`${styles.profileCard} ${common.glass}`}>
            <div className={styles.avatar} aria-hidden="true" />
            <h3 className="muted">Dharanya</h3>
            <p className="muted">Full Stack Developer • Problem Solver</p>
          </div>

          <div className={`${styles.aboutText} ${common.glass}`}>
            <p>
              I am a passionate Computer Science Engineering student focused on building
              performant web applications and delightful user experiences. I
              enjoy working across the stack — designing responsive interfaces
              with React, and creating robust backends with Node.js and
              Express.
            </p>
            <p>
              My goal is to constantly expand my knowledge and merge technical capability
              with visual excellence in order to create modern web interfaces that feel alive.
            </p>

            <div className={styles.aboutMeta}>
              <a className={`${common.btn} card-hover`} href="#projects">See Projects</a>
              <a className={`${common.btn} card-hover`} href="#contact">Contact Me</a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;