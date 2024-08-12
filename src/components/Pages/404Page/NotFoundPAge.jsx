import React from "react";
import styles from "./NotFoundPAge.module.css";

const NotFoundPage = () => {
  return (
    <div className={styles.test}>
      <div id="particles" className={styles.particles}></div>
      <main className={styles.mainSection}>
        <section>
          <h1 className={styles.header}>Page Not Found!</h1>
          <div>
            <span>4</span>
            <span className={styles.circle}></span>
            <span>4</span>
          </div>
          <p className={styles.message}>
            We are unable to find the page
            <br />
            you're looking for.
          </p>
        </section>
      </main>
    </div>
  );
};

export default NotFoundPage;
