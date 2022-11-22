import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./css/Nav.module.css";

const Nav = () => {
  const navigate = useNavigate();
  const navList = ["men", "women", "cart"];
  const menu = useRef();
  const hamburger = useRef();

  const onClickNav = (navName) => () => {
    if (hamburger.current) {
      hamburger.current.classList.remove(`${styles.active}`);
      menu.current.classList.remove(`${styles.active}`);
    }
    hamburger.current.classList.remove(`${styles.active}`);

    setTimeout(() => {
      if (navName !== "cart" && navName !== "login") {
        navigate(`shop/${navName}`);
      } else {
        navigate(`${navName}`);
      }
    }, 10);
  };

  const onClickHamburger = (target) => {
    target.classList.toggle(`${styles.active}`);
    menu.current.classList.toggle(`${styles.active}`);
  };

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.nav__inner}>
          <h1
            className={styles.logo}
            onClick={() => {
              navigate(`/`);
            }}
          >
            Cozy
          </h1>
          <ul className={styles.nav__menu} ref={menu}>
            {navList.map((navItem) => {
              return (
                <li key={navItem} onClick={onClickNav(navItem)}>
                  {navItem}
                </li>
              );
            })}
          </ul>
          <div
            className={styles.hamburger}
            onClick={(e) => {
              onClickHamburger(e.currentTarget);
            }}
            ref={hamburger}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Nav;
