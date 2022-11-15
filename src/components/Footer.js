import React, { useEffect, useState } from "react";
import styles from "./css/Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={styles.copyright}>
        <h2>© 2022 COZY</h2>
        <span>Site by Hong</span>
      </div>
      <div className={styles.contact}>
        <h3>instagram</h3>
        <h3>QnA</h3>
      </div>
    </footer>
  );
};

export default Footer;
