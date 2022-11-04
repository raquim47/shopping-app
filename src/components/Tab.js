import React, { useEffect, useState } from "react";
import styles from "./css/Tab.module.css";

const Tab = ({tabList, clickedTab, setClickedTab}) => {
  const onClickTab = (tabName) => () => {
    setClickedTab(tabName);
    // onClickOption("NEWEST");
  };
  return (
    <ul className={styles.tab}>
      {tabList.map((tabItem) => (
        <li
          onClick={onClickTab(tabItem)}
          className={clickedTab === tabItem ? styles.active : null}
          key={tabItem}
        >
          {tabItem}
        </li>
      ))}
    </ul>
  );
};

export default Tab;
