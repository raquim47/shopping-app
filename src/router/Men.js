import React, { useEffect, useState } from "react";
import styles from "./css/Men.module.css";
import axios from "axios";

const Men = ({navIndex}) => {
  const [unmountTransition, setUnmountTransition] = useState("");
  const [products, setProducts] = useState();
  useEffect(() => {
    navIndex === "" && setUnmountTransition("unmount");
  }, [navIndex]);
  
  useEffect(() => {
    axios.get(`https://raquim47.github.io/data/cozy/json/m_top.json`).then(res => setProducts(res.data));
  }, [])
  
  return (
    <div className={styles.men}>
      <div className={`${styles.men_cover} ${styles[unmountTransition]}`}></div>
      <div className={styles.container}>
        <h2>MEN</h2>
        <ul className={styles.tab_menu}>
          <li className={styles.active}>TOP</li>
          <li>OUTER</li>
          <li>PANTS</li>
        </ul>
        <div className={styles.condition}>
          <div className={styles.total}>
            TOTAL <span>{products.length}</span>
          </div>
          <ul className={styles.option}>
            <li className={styles.active}>NEWEST</li>
            <li>LOW PRICE</li>
            <li>HIGH PRICE</li>
          </ul>
        </div>
        <ul className={styles.products}>
          <ul>
            {products &&
              products.map((item, index) => {
                return (
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
                );
              })}
          </ul>
        </ul>
      </div>
    </div>
  );
};
export default Men;
