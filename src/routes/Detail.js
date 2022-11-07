import React, { useEffect, useRef, useState } from "react";
import styles from "./css/Detail.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Detail = ({ setPage }) => {
  const detailInfo = useSelector((state) => state.detailInfo);
  const [count, setCount] = useState(1);
  const [size, setSize] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (!detailInfo.title) {
      navigate(`/men`);
    }
  }, []);

  const increaseCount = () => () => {
    count ? setCount((prev) => parseInt(prev) + 1) : setCount(1);
  };
  const decreaseCount = () => () => {
    count > 1 && setCount((prev) => parseInt(prev) - 1);
  };

  const onSubmitBtn = (e) => {
    e.preventDefault();
    if (!size || count < 1) {
      alert("올바른 수량과 사이즈를 선택해주세요");
      return;
    }
    navigate("/cart");
  };

  return (
    <div className={styles.detail}>
      <div className={styles.detail__inner}>
        <section className={styles.detail__left}>
          <img src={detailInfo.url}></img>
        </section>
        <section className={styles.detail__right}>
          <form className={styles.order_form}>
            <h3>{detailInfo.title}</h3>
            {detailInfo.size && (
              <div className={`${styles.order_form__option} ${styles.size}`}>
                <h4>size</h4>
                <ul>
                  {detailInfo.size &&
                    detailInfo.size.map((sizeItem) => (
                      <li
                        onClick={() => setSize(sizeItem)}
                        className={size === sizeItem && styles.active}
                        key={sizeItem}
                      >
                        {sizeItem}
                      </li>
                    ))}
                </ul>
              </div>
            )}
            <div className={styles.order_form__option}>
              <h4>count</h4>
              <div className={styles.count_input}>
                <input
                  type="text"
                  value={count}
                  onChange={(e) => {
                    setCount(e.target.value);
                  }}
                />
                <div className={styles.count_input__btn}>
                  <div
                    onClick={increaseCount()}
                    className={styles.count_input__up}
                  ></div>
                  <div
                    onClick={decreaseCount()}
                    className={styles.count_input__down}
                  ></div>
                </div>
              </div>
            </div>
            <div className={`${styles.order_form__option} ${styles.price}`}>
              <h4>price</h4>
              <span>$ {count > 0 && detailInfo.price * count}</span>
            </div>
            <button
              type="submit"
              onClick={(e) => onSubmitBtn(e)}
              className={styles.order_form__submit_btn}
            >
              Add Cart
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Detail;
