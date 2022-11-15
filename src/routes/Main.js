import React, { useEffect, useRef, useState } from "react";
import styles from "./css/Main.module.css";
import Intro from "./../components/Intro";
import Footer from "./../components/Footer";

const Main = ({ page, setPage }) => {
  const [mount, setMount] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setPage("main");
      // 메인 애니메이션 실행
      setMount("mount");
    }, 50); // 50ms 왜??
  }, []);

  // useEffect(() => {
  //   page !== "main" && page !== "" && setUnmountTransition("unmount");
  // }, [page]);

  return (
    <main>
      <Intro />
      <div className={styles.banner}>
        <div className={styles.banner__center}>
          <h2 className={`${styles.banner__text} ${styles[mount]}`}>
            <div>
              <span>we are building a center</span>
            </div>
            <div>
              <span>of excellence for every</span>
            </div>
            <div>
              <span>facet of denim design</span>
            </div>
            <div>
              <span>and production.</span>
            </div>
          </h2>
          <div
            className={`${styles.banner__img} ${styles.img01} ${styles[mount]}`}
          >
            <img src={process.env.PUBLIC_URL + "img/banner01.jpg"} />
          </div>
          <div
            className={`${styles.banner__img} ${styles.img02} ${styles[mount]}`}
          >
            <img src={process.env.PUBLIC_URL + "img/banner02.jpg"} />
          </div>
          <div
            className={`${styles.banner__img} ${styles.img03} ${styles[mount]}`}
          >
            <img src={process.env.PUBLIC_URL + "img/banner04.jpg"} />
          </div>
        </div>
      </div>
      <div className={styles.footer_wrap}>
        <Footer />
      </div>
    </main>
  );
};
export default Main;
