import React, { useEffect, useState } from "react";
import styles from "./css/Shop.module.css";
import axios from "axios";
import Tab from "./../components/Tab";
import Arrange from "./../components/Arrange";
import List from "./../components/List";
import Footer from "./../components/Footer";
import { useParams } from "react-router-dom";

const Shop = () => {
  const { gender } = useParams();
  const [products, setProducts] = useState([]);

  let tabList;
  if (gender === "men") {
    tabList = ["top", "pants", "outwear"];
  } else if (gender === "women") {
    tabList = ["top", "pants", "outwear", "accessory"];
  }
  const [clickedTab, setClickedTab] = useState(tabList[0]);
  
  useEffect(() => {
    setClickedTab(tabList[0]);
  }, [gender]);

  useEffect(() => {
    axios
      .get(
        `https://raquim47.github.io/data/cozy/json/${gender}_${clickedTab}.json`
      )
      .then((res) => setProducts(res.data));
  }, [clickedTab, gender]);

  return (
    <div className={styles.products}>
      <div className={styles.products__inner}>
        <div className={styles.products__tab}>
          <span>{gender}</span>
          <span>&gt;</span>
          <Tab
            tabList={tabList}
            clickedTab={clickedTab}
            setClickedTab={setClickedTab}
          />
        </div>
        <div className={styles.products__option}>
          <div className={styles.total}>
            TOTAL <span>{products.length}</span>
          </div>
          <Arrange
            products={products}
            setProducts={setProducts}
            clickedTab={clickedTab}
          />
        </div>
        <List products={products} clickedTab={clickedTab} />
      </div>
      <Footer />
    </div>
  );
};
export default Shop;
