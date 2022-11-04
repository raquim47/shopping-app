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
      <section className={styles.detail_img}>
        <img src={detailInfo.url}></img>
      </section>
      <section className={styles.detail_order}>
        <form>
          <h3>{detailInfo.title}</h3>
          <strong>$ {detailInfo.price}</strong>
          <div className={styles.size}>
            <h4>Size</h4>
            <ul>
              {detailInfo.size && detailInfo.size.map(size => <li>{size}</li>)}
              <li></li>
            </ul>
          </div>
          <div className={styles.count}>
            <h4>COUNT</h4>
            <input type="number" />
          </div>
          <button>Add Cart</button>
        </form>
      </section>
    </div>
  );
};

export default Detail;
