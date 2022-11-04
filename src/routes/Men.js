import React, { useEffect, useState } from "react";
import styles from "./css/MenWomen.module.css";
import axios from "axios";
import Tab from "./../components/Tab";
import Arrange from "./../components/Arrange";
import List from "./../components/List";
const Men = ({ page, setPage }) => {
  const [unmountTransition, setUnmountTransition] = useState("");
  const [products, setProducts] = useState([]);
  const tabList = ["top", "pants", "outwear"];
  const [clickedTab, setClickedTab] = useState(tabList[0]);
  
  useEffect(() => {
    if (page !== "men") {
      setPage("men");
    }
  }, []);

  useEffect(() => {
    if (page === "main") {
      setUnmountTransition("white-cover");
    } else if (page === "women") {
      setUnmountTransition("purple-cover")
    }
  }, [page]);

  useEffect(() => {
    if (clickedTab === "top") {
      axios
        .get(`https://raquim47.github.io/data/cozy/json/m_top.json`)
        .then((res) => setProducts(res.data));
    } else if (clickedTab === "pants") {
      axios
        .get(`https://raquim47.github.io/data/cozy/json/m_pants.json`)
        .then((res) => setProducts(res.data));
    } else if (clickedTab === "outwear") {
      axios
        .get(`https://raquim47.github.io/data/cozy/json/m_outwear.json`)
        .then((res) => setProducts(res.data));
    }
  }, [clickedTab]);

  return (
    <div className={styles.products}>
      <div className={`${styles.products__cover} ${styles[unmountTransition]}`}></div>
      <div className={styles.products__inner}>
        <h2>MEN</h2>
        <Tab tabList={tabList} clickedTab={clickedTab} setClickedTab={setClickedTab}/>
        <div className={styles.products__option}>
          <div className={styles.total}>
            TOTAL <span>{products.length}</span>
          </div>
          <Arrange products={products} setProducts={setProducts} clickedTab={clickedTab}/>
        </div>
        <List products={products}/>
      </div>
    </div>
  );
};
export default Men;
