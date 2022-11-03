import React, { useEffect, useState } from "react";
import styles from "./css/Men.module.css";
import axios from "axios";

const Women = ({ navIndex, setNavIndex }) => {
  const [unmountTransition, setUnmountTransition] = useState("");
  const [products, setProducts] = useState([]);
  const tab = ["top", "pants", "outwear", "accessory"];
  const [clickedTab, setClickedTab] = useState("top");
  const option = ["NEWEST", "LOW PRICE", "HIGH PRICE"];
  const [clickedOption, setClickedOption] = useState("NEWEST");

  useEffect(() => {
    if (navIndex === -1) {
      setUnmountTransition("white-cover");
    } else if (navIndex === 2) {
      
    }
  }, [navIndex]);
  
  useEffect(() => {
    if (clickedTab === "top") {
      axios
        .get(`https://raquim47.github.io/data/cozy/json/f_top.json`)
        .then((res) => setProducts(res.data));
    } else if (clickedTab === "pants") {
      axios
        .get(`https://raquim47.github.io/data/cozy/json/f_pants.json`)
        .then((res) => setProducts(res.data));
    } else if (clickedTab === "outwear") {
      axios
        .get(`https://raquim47.github.io/data/cozy/json/f_outwear.json`)
        .then((res) => setProducts(res.data));
    } else if (clickedTab === "accessory") {
      axios
        .get(`https://raquim47.github.io/data/cozy/json/f_accessory.json`)
        .then((res) => setProducts(res.data));
    }
  }, [clickedTab]);

  useEffect(() => {
    if (navIndex === -1) {
      setUnmountTransition("white-cover");
    } else if (navIndex === 0) {
      setUnmountTransition("purple-cover");
    }
  }, [navIndex]);

  const onClickOption = (opName) => {
    setClickedOption(opName);
    const newProducts = [...products];
    if (opName === "NEWEST") {
      newProducts.sort((a, b) => (a.id > b.id ? -1 : 1));
    } else if (opName === "LOW PRICE") {
      newProducts.sort((a, b) => (a.price < b.price ? -1 : 1));
    } else if (opName === "HIGH PRICE") {
      newProducts.sort((a, b) => (a.price > b.price ? -1 : 1));
    }
    setProducts(newProducts);
  };

  const onClickTab = (tabName) => {
    setClickedTab(tabName);
    onClickOption("NEWEST");
  };
  return (
    <div className={styles.men}>
      <div className={`${styles.men_cover} ${styles[unmountTransition]}`}></div>
      <div className={styles.container}>
        <h2>WOMEN</h2>
        <ul className={styles.tab_menu}>
          {tab.map((tabName, i) => {
            return (
              <li
                onClick={() => onClickTab(tabName)}
                className={clickedTab === tabName ? styles.active : null}
                key={tabName}
              >
                {tabName}
              </li>
            );
          })}
        </ul>
        <div className={styles.condition}>
          <div className={styles.total}>
            TOTAL <span>{products.length}</span>
          </div>
          <ul className={styles.option}>
            {option.map((opName) => (
              <li
                onClick={() => onClickOption(opName)}
                className={clickedOption === opName ? styles.active : null}
                key={opName}
              >
                {opName}
              </li>
            ))}
          </ul>
        </div>
        <ul className={styles.products}>
          <ul>
            {products &&
              products.map((item, index) => (
                <li
                  key={index}
                  onClick={() => {
                    // navigate(`/Detail/${item.id}`);
                    // dispatch(addDetailData(item));
                  }}
                >
                  <div className={styles.item_img}>
                    <img src={item.url} alt="" />
                  </div>
                  <h3>{item.title}</h3>
                  <strong>$ {item.price}</strong>
                </li>
              ))}
          </ul>
        </ul>
      </div>
    </div>
  );
};
export default Women;
