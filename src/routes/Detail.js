import React, { useEffect, useRef, useState } from "react";
import styles from "./css/Detail.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Detail = ({setPage}) => {
  const detailInfo = useSelector((state) => state.detailInfo);
  const navigate = useNavigate();
  useEffect(() => {
    if (!detailInfo.title) {
      navigate(`/men`);
    }
    setPage("");
  }, []);

  return (
    
    <div className={styles.detail}>
      <section className={styles.detail__left}>
        <img src={detailInfo.url}></img>
      </section>
      <section className={styles.detail__right}>
        <form className={styles.order_form}>
          <h3>{detailInfo.title}</h3>
          {/* <div className={styles.order_form__price}>
            <h4>price</h4>
            <span>$ {detailInfo.price}</span>
          </div> */}
          <div className={styles.order_form__option}>
            <h4>size</h4>
            <ul>
              {detailInfo.size && detailInfo.size.map(size => <li>{size}</li>)}
            </ul>
          </div>
          <div className={styles.order_form__option}>
            <h4>count</h4>
            <input className={styles.count_input} type="number" />
          </div>
          <div className={styles.order_form__option}>
            <h4>price</h4>
            <span>$ {detailInfo.price}</span>
          </div>
          <button type="submit" className={styles.order_form__submit_btn}>Add Cart</button>
        </form>
      </section>
    </div>
  );
};

export default Detail;
