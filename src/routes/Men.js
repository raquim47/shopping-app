import React, { useEffect, useState } from "react";
import styles from "./css/Men.module.css";
import axios from "axios";
import { setDetailInfo } from "./../store";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Tab from "./../components/Tab";
import Arrange from "./../components/Arrange";
import List from "./../components/List";
const Men = ({ navIndex, setNavIndex }) => {
  const detailInfo = useSelector(state => state.detailInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [unmountTransition, setUnmountTransition] = useState("");
  const [products, setProducts] = useState([]);
  const tabList = ["top", "pants", "outwear"];
  const [clickedTab, setClickedTab] = useState(tabList[0]);
  useEffect(() => {
    if (navIndex !== 0) {
      setNavIndex(0);
    }
  }, []);

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

  useEffect(() => {
    if (navIndex === -1) {
      setUnmountTransition("white-cover");
    } else if (navIndex === 1) {
      setUnmountTransition("purple-cover")
    }
  }, [navIndex]);

  return (
    <div className={styles.men}>
      <div className={`${styles.men_cover} ${styles[unmountTransition]}`}></div>
      <div className={styles.container}>
        <h2>MEN</h2>
        <Tab tabList={tabList} clickedTab={clickedTab} setClickedTab={setClickedTab}/>
        <div className={styles.condition}>
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
