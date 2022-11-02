import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  // faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./css/Nav.module.css";

const Nav = ({userMenuColor, navIndex, setNavIndex}) => {
  const navigate = useNavigate();
  const navItem = ["men", "women", "accessory"];

  const menu = useRef();
  const hamburger = useRef();
  const user = useRef();

  const onClickNav = (navName, i) => () => {
    setNavIndex(i);
    // 햄버거 접기
    hamburger.current.classList.remove(`${styles.active}`);
    // navigate(`/${navName}`);
  }
  // 햄버거열기
  function click(e) {
    e.classList.toggle(`${styles.active}`);
    menu.current.classList.toggle(`${styles.active}`);
  }
  // 햄버거 접기
  function close() {
    hamburger.current.classList.remove(`${styles.active}`);
    menu.current.classList.remove(`${styles.active}`);
  }
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.container}>
          <div className={styles.menu} ref={menu}>
            <h1
              className={styles.logo}
              onClick={() => {
                navigate("/");
                setNavIndex("");
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
            <ul ref={user} className={`${styles[userMenuColor]}`}>
              <li className={styles.login_btn}>Login</li>
              <li className={styles.cart_icon}>Cart</li>
              <li
                className={styles.hamburger}
                onClick={(e) => {
                  click(e.currentTarget);
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
