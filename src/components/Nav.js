import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  // faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./css/Nav.module.css";

const Nav = ({ page, setPage }) => {
  const navigate = useNavigate();
  const mainMenuList = ["men", "women"];
  const menu = useRef();
  const hamburger = useRef();
  const user = useRef();

  const onClickMainMenu = (navName) => () => {
    if (hamburger.current) {
      hamburger.current.classList.remove(`${styles.active}`);
      menu.current.classList.remove(`${styles.active}`);
    }
    setPage(navName);
    hamburger.current.classList.remove(`${styles.active}`);
    setTimeout(() => {navigate(`/${navName}`)}, 500);
  };

  const onClickHamburger = (target) => {
    target.classList.toggle(`${styles.active}`);
    menu.current.classList.toggle(`${styles.active}`);
  };
  
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.nav__inner}>
          <div className={styles.nav__left}>
            <h1
              className={styles.logo}
              onClick={() => {
                setPage("main");
                setTimeout(() => {navigate(`/`)}, 400);
              }}
            >
              Cozy
            </h1>
            <ul className={styles.main_menu} ref={menu}>
              {mainMenuList.map((mainMenuItem) => {
                return (
                  <li
                    key={(mainMenuItem)}
                    onClick={onClickMainMenu(mainMenuItem)}
                    className={page === mainMenuItem ? `${styles.active}` : null}
                  >
                    {mainMenuItem}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={styles.user_menu}>
            <ul ref={user} className={page === "main" ? `${styles.black}` : `${styles.white}`}>
              <li>Login</li>
              <li>Cart</li>
              <li
                className={styles.hamburger}
                onClick={(e) => {
                  onClickHamburger(e.currentTarget);
                }}
                ref={hamburger}
              >
                <span></span>
                <span></span>
                <span></span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Nav;
