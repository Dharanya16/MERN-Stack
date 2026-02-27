import styles from "../styles/Internships.module.css";
import common from "../styles/common.module.css";

const Internships = () => {
  return (
    <section id="internships" className={styles.internshipsSection}>
      <div className={styles.internshipsContainer}>

        <h2 className={common.sectionTitle}>Internships</h2>
        <p className={common.sectionSubtitle}>
          My Experience
        </p>

        <div className={styles.timelineContainer}>

          <div className={styles.timelineItem}>
            <div className={styles.timelineMarker}></div>
            <div className={`${styles.timelineContent} ${common.glass}`}>
              <h3>Web Development Intern</h3>
              <p className={styles.company}>Tech Innovators Inc.</p>
              <p className={styles.duration}>June 2025 - August 2025</p>
              <p>Worked on full-stack MERN applications, enhancing performance and implementing responsive UI components.</p>
            </div>
          </div>

          <div className={styles.timelineItem}>
            <div className={styles.timelineMarker}></div>
            <div className={`${styles.timelineContent} ${common.glass}`}>
              <h3>Frontend Trainee</h3>
              <p className={styles.company}>Creative Design Studio</p>
              <p className={styles.duration}>Jan 2025 - May 2025</p>
              <p>Developed interactive prototypes and honed my UI/UX skills by closely working with seniors to deliver high-quality web interfaces.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Internships;