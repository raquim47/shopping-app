import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  // faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./css/Nav.module.css";

const Nav = ({ userMenuColor, navIndex, setNavIndex }) => {
  const navigate = useNavigate();
  const navItem = ["men", "women", "accessory"];
  const menu = useRef();
  const hamburger = useRef();
  const user = useRef();

  const onClickNav = (navName, i) => () => {
    if (hamburger.current) {
      hamburger.current.classList.remove(`${styles.active}`);
      menu.current.classList.remove(`${styles.active}`);
    }
    setNavIndex(i);
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
        <div className={styles.container}>
          <div className={styles.menu} ref={menu}>
            <h1
              className={styles.logo}
              onClick={() => {
                setNavIndex("");
                // navigate(`/`);
                setTimeout(() => {navigate(`/`)}, 400);
              }}
            >
              Cozy
            </h1>
            <ul>
              {navItem.map((navName, i) => {
                return (
                  <li
                    key={(navName, i)}
                    onClick={onClickNav(navName, i)}
                    className={navIndex === i ? `${styles.active}` : null}
                  >
                    {navName}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={styles.user}>
            <ul ref={user} className={navIndex !== "" ? `${styles.white}` : `${styles.black}`}>
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
