import styles from "../styles/Home.module.css";

function Home() {
  const handleScroll = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className={styles.heroSection}>
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <h1>
            Hi, I'm <span className={styles.highlight}>Dharanya</span>
          </h1>
          <h2 className={styles.heroSubtitle}>
            Full Stack Developer & UI/UX Enthusiast
          </h2>
          <p className={styles.heroDescription}>
            A passionate Computer Science Engineering student focused on building
            intuitive, user-centered digital experiences. Specializing in frontend
            development with a strong interest in creating premium, interactive designs.
          </p>
          <div className={styles.heroButtons}>
            <button className={`${styles.btnPrimary} card-hover`} onClick={handleScroll}>
              Explore Work
            </button>
            <a
              href="https://www.linkedin.com/in/dharanya-d-d5002"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.btnSecondary} card-hover`}
            >
              Connect
            </a>
          </div>
        </div>

        <div className={styles.heroVisual}>
          <div className={`${styles.floatingCard} ${styles.card1}`}>
            <span role="img" aria-label="code">💻</span> Web Developer
          </div>
          <div className={`${styles.floatingCard} ${styles.card2}`}>
            <span role="img" aria-label="art">🎨</span> UI/UX Designer
          </div>
          <div className={`${styles.floatingCard} ${styles.card3}`}>
            <span role="img" aria-label="rocket">🚀</span> Tech Enthusiast
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <span>Scroll Down</span>
        <div className={styles.mouse}>
          <div className={styles.wheel}></div>
        </div>
      </div>
    </section>
  );
}

export default Home;