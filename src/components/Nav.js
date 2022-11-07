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
  const leftMenuList = ["men", "women", "cart"];
  const menu = useRef();
  const hamburger = useRef();
  const user = useRef();

  const onClickLeftMenu = (navName) => () => {
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
            <ul className={styles.left_menu} ref={menu}>
              {leftMenuList.map((leftMenuItem) => {
                return (
                  <li
                    key={(leftMenuItem)}
                    onClick={onClickLeftMenu(leftMenuItem)}
                    className={page === leftMenuItem ? `${styles.active}` : null}
                  >
                    {leftMenuItem}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={styles.nav__right}>
            <ul ref={user} className={(page === "main" || page === "") ? `${styles.black}` : `${styles.white}`}>
              <li>login</li>
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