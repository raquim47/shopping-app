import React, { useEffect, useState } from "react";
import styles from "./css/Men.module.css";
import axios from "axios";
import { setDetailInfo } from "./../store";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Men = ({ navIndex, setNavIndex }) => {
  const detailInfo = useSelector(state => state.detailInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [unmountTransition, setUnmountTransition] = useState("");
  const [products, setProducts] = useState([]);
  const tab = ["top", "pants", "outwear"];
  const [clickedTab, setClickedTab] = useState("top");
  const option = ["NEWEST", "LOW PRICE", "HIGH PRICE"];
  const [clickedOption, setClickedOption] = useState("NEWEST");

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

  const onClickOption = (opName) => {
    setClickedOption(opName);
    const newProducts = [...products];
    if(opName === "NEWEST") {
      newProducts.sort((a, b) => (a.id > b.id ? -1 : 1));
    } else if (opName === "LOW PRICE") {
      newProducts.sort((a, b) => (a.price < b.price ? -1 : 1));
    } else if (opName === "HIGH PRICE") {
      newProducts.sort((a, b) => (a.price > b.price ? -1 : 1));
    }
    setProducts(newProducts);
  }

  const onClickTab = (tabName) => {
    setClickedTab(tabName);
    onClickOption("NEWEST");
  }
  return (
    <div className={styles.men}>
      <div className={`${styles.men_cover} ${styles[unmountTransition]}`}></div>
      <div className={styles.container}>
        <h2>MEN</h2>
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
              products.map((product) => (
                <li
                  key={product.id}
                  onClick={() => {
                    const data = {
                      title: product.title,
                      price: product.price,
                      url: product.url,
                      size: product.size,
                    }
                    dispatch(setDetailInfo(data));
                    console.log(detailInfo);
                    navigate(`/Detail`);
                  }}
                >
                  <div className={styles.product_img}>
                    <img src={product.url} alt="" />
                  </div>
                  <h3>{product.title}</h3>
                  <strong>$ {product.price}</strong>
                </li>
              ))}
          </ul>
        </ul>
      </div>
    </div>
  );
};
export default Men;
