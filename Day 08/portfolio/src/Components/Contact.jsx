import styles from "../styles/Contact.module.css";
import common from "../styles/common.module.css";

const Contact = () => {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.contactContainer}>

        <h2 className={common.sectionTitle}>Contact</h2>
        <p className={common.sectionSubtitle}>
          Let’s Connect
        </p>

        <form className={`${styles.contactForm} ${common.glass}`}>
          <input type="text" placeholder="Your Name" required className="card-hover" />
          <input type="email" placeholder="Your Email" required className="card-hover" />
          <textarea placeholder="Your Message" required className="card-hover"></textarea>
          <button type="submit" className={`${common.btn} ${styles.submitBtn} card-hover`}>Send Message</button>
        </form>

      </div>
    </section>
  );
};

export default Contact;