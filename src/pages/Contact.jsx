import React from 'react';
import styles from './css2/Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contactBox}>

        <div className={styles.formSection}>
          <form className={styles.form}>
            <div className={styles.inputRow}>
              <input type="text" placeholder="Your Name *" />
              <input type="email" placeholder="Your Email *" />
              <input type="tel" placeholder="Your Phone *" />
            </div>

            <textarea placeholder="Your Message" rows="6" />

            <button type="submit" className={styles.sendButton}>
              Send Message
            </button>
          </form>
        </div>


        <div className={styles.infoSection}>
          <div className={styles.infoBlock}>
            <div className={styles.iconWrapper}>
              📞
            </div>
            <div>
              <h3>Call To Us</h3>
              <p>We are available 24/7, 7 days a week.</p>
              <p>Phone: +99999999</p>
            </div>
          </div>

          <hr className={styles.divider} />

          <div className={styles.infoBlock}>
            <div className={styles.iconWrapper}>
              ✉️
            </div>
            <div>
              <h3>Write To Us</h3>
              <p>Fill out our form and we will contact you within 24 hours.</p>
              <p>Emails: customer@name.com</p>
              <p>Emails: support@name.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
