import React, { useEffect, useState } from "react";
import styles from "./css/Men.module.css";
import axios from "axios";

const Men = (props) => {
  const [products, setProducts] = useState();

  useEffect(() => {
    props.setNavIndex(0);
    getData();
  }, []);

  useEffect(() => {
    props.setUserColor("white");
  });

  // 데이터 받아오기
  function getData(index){
    fetch(`https://raquim47.github.io/data/cozy/json/men.json`)
      .then(res => res.json())
      .then(data => {
        setProducts(data);
      })
  }
  
  console.log(products);
  return (
    <div className={styles.men}>
      <div className={styles.men_cover}></div>
      <div className={styles.container}>
        <h2>MEN</h2>
        <ul className={styles.tab_menu}>
          <li className={styles.active}>TOP</li>
          <li>OUTER</li>
          <li>PANTS</li>
        </ul>
        <div className={styles.condition}>
          <div className={styles.total}>
            TOTAL <span>30</span>
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
                    <div className={styles.item}>
                      <div className={styles.item_img}>
                        <img src={item.url} alt="" />
                      </div>
                      <em>{item.filter}</em>
                      <h3>{item.title}</h3>
                      <strong>$ {item.price}</strong>
                    </div>
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
