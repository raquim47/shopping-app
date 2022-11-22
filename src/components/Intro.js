import React, { useEffect, useState } from "react";
import styles from "./css/Intro.module.css";

const Intro = () => {
  const [mount, setMount] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setMount("mount");
    }, 50);
  }, [])
  return (
    <div className={`${styles.intro} ${styles[mount]}`}>
      <div className={`${styles.intro__center} ${styles[mount]}`}>
        <div className={styles.intro__img01}>
          <img src={process.env.PUBLIC_URL + "/img/intro01.jpeg"} />
        </div>
        <div className={styles.intro__img02}>
          <img src={process.env.PUBLIC_URL + "/img/intro02.jpeg"} />
        </div>
        <div className={styles.intro__img03}>
          <img src={process.env.PUBLIC_URL + "/img/intro03.jpeg"} />
        </div>
        <div className={styles.intro__img04}>
          <img src={process.env.PUBLIC_URL + "/img/intro04.png"} />
        </div>
        <div className={styles.intro__img05}>
          <img src={process.env.PUBLIC_URL + "/img/intro05.png"} />
        </div>
        <div className={styles.intro__img06}>
          <img src={process.env.PUBLIC_URL + "/img/intro06.png"} />
        </div>
      </div>
    </div>
  );
};

export default Intro;
