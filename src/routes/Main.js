import React, { useEffect, useRef, useState } from "react";
import styles from "./css/Main.module.css";

const Main = ({ page }) => {
  const [mountTransition, setMountTransition] = useState("");
  const [unmountTransition, setUnmountTransition] = useState("");

  useEffect(() => {
    setTimeout(() => {
      // 메인 애니메이션 실행
      setMountTransition("active");
    }, 50)// 50ms 왜??
  }, []);

  useEffect(() => {
    (page !== "main") && setUnmountTransition("unmount");
  }, [page]);

  return (
    <div className={styles.banner}>
      <div
        className={`${styles.banner_cover} ${styles[unmountTransition]}`}
      ></div>
      <div className={styles.banner_left}>
        <div
          className={`${styles.banner_left__bg} ${styles[mountTransition]}`}
        ></div>
        <div
          className={`${styles.banner_left__img} ${styles[mountTransition]}`}
        >
          <img src={process.env.PUBLIC_URL + "img/banner01.jpg"} />
        </div>
        <div
          className={`${styles.banner_left__textbox} ${styles[mountTransition]}`}
        >
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
            </span><br/>
            <small>Copyright by Hong</small>
          </div>
        </div>
      </div>
      <div className={styles.banner_right}>
        <img
          src={process.env.PUBLIC_URL + "img/banner02.jpg"}
          className={`${styles[mountTransition]}`}
        />
        <img
          src={process.env.PUBLIC_URL + "img/banner03.jpg"}
          className={`${styles[mountTransition]}`}
        />
        <img
          src={process.env.PUBLIC_URL + "img/banner04.jpg"}
          className={`${styles[mountTransition]}`}
        />
      </div>
    </div>
  );
};
export default Main;
