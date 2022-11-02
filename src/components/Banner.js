import React, { useEffect, useRef, useState } from "react";
import styles from "./css/Banner.module.css";

const Banner = (props) => {
  const [active, setActive] = useState("");
  const [unmountActive, setUnmountActive] = useState("");

  useEffect(() => {
    setActive("active");
    
    if (props.unmount) {
      setUnmountActive("unmount");
    }
  });
  

  return (
    <div className={styles.banner}>
      <div className={`${styles.banner_cover} ${styles[unmountActive]}`}></div>
      <div className={styles.banner_left}>
        <div
          className={`${styles.banner_left__bg} ${styles[active]}`}
        ></div>
        <div className={`${styles.banner_left__img} ${styles[active]}`}>
          <img src={process.env.PUBLIC_URL + "img/banner01.jpg"} />
        </div>
        <div className={`${styles.banner_left__textbox} ${styles[active]}`}>
          <h2>
            Actuality
            <br />
            Trends
            <br />
            <small>Cozy Fall 2022</small>
          </h2>
          <div className={styles.banner_left__desc}>
            <span>
              The Cozy Architectural collection is everything a businesswoman
              could wish for. It knows no trends or seasons, making it a sleek,
              refined.
            </span>
          </div>
        </div>
      </div>
      <div className={styles.banner_right}>
        <img
          src={process.env.PUBLIC_URL + "img/banner02.jpg"}
          className={`${styles[active]}`}
        />
        <img
          src={process.env.PUBLIC_URL + "img/banner03.jpg"}
          className={`${styles[active]}`}
        />
        <img
          src={process.env.PUBLIC_URL + "img/banner04.jpg"}
          className={`${styles[active]}`}
        />
      </div>
    </div>
  );
};
export default Banner;
