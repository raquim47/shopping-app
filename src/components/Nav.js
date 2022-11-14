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
  const leftMenuList = ["men", "women", "cart", "login"];
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
    setTimeout(() => {
      navigate(`/${navName}`);
    }, 500);
  };

  const onClickHamburger = (target) => {
    target.classList.toggle(`${styles.active}`);
    menu.current.classList.toggle(`${styles.active}`);
  };

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.nav__inner}>
          {/* 로고 */}
          <h1
            className={styles.logo}
            onClick={() => {
              setPage("main");
              setTimeout(() => {
                navigate(`/`);
              }, 400);
            }}
          >
            Cozy
          </h1>
          {/* 메뉴 */}
          <ul className={styles.nav__menu} ref={menu}>
            {leftMenuList.map((leftMenuItem) => {
              return (
                <li
                  key={leftMenuItem}
                  onClick={onClickLeftMenu(leftMenuItem)}
                  className={page === leftMenuItem ? `${styles.active}` : null}
                >
                  {leftMenuItem}
                </li>
              );
            })}
          </ul>
          {/* 햄버거 */}
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
