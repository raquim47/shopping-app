import React, { useEffect, useState } from "react";
import styles from "./css/Detail.module.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { addCart } from "./../store";
import { useDispatch } from "react-redux";

const Detail = () => {
  const { gender, cate, id } = useParams();
  const [data, setData] = useState([]);
  const [count, setCount] = useState(1);
  const [size, setSize] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`https://raquim47.github.io/data/cozy/json/${gender}_${cate}.json`)
      .then((res) =>
        setData(res.data.find((item) => item.id === id))
      );
  }, []);

  const increaseCount = () => () => {
    count ? setCount((prev) => parseInt(prev) + 1) : setCount(1);
  };
  const decreaseCount = () => () => {
    count > 1 && setCount((prev) => parseInt(prev) - 1);
  };

  const onClickAddCart = (e) => {
    e.preventDefault();
    if (!size || count < 1) {
      alert("올바른 수량과 사이즈를 선택해주세요");
      return;
    }
    dispatch(
      addCart({
        id: data.id,
        gender: data.gender,
        cate: data.cate,
        title: data.title,
        count: count,
        size: size,
        price: data.price,
        url: data.url,
      })
    );
    navigate("/cart");
  };

  return (
    <div className={styles.detail}>
      {
        <div className={styles.detail__inner}>
          <section className={styles.detail__left}>
            <img src={data.url}></img>
          </section>
          <section className={styles.detail__right}>
            <form className={styles.order_form}>
              <h3>{data.title}</h3>
              {data.size && (
                <div className={`${styles.order_form__option} ${styles.size}`}>
                  <h4>size</h4>
                  <ul>
                    {data.size &&
                      data.size.map((sizeItem) => (
                        <li
                          onClick={() => setSize(sizeItem)}
                          className={size === sizeItem ? styles.active : null}
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
                <span>$ {count > 0 && data.price * count}</span>
              </div>
              <button
                onClick={(e) => onClickAddCart(e)}
                className={styles.order_form__submit_btn}
              >
                Add Cart
              </button>
              <div
                className={styles.detail__back}
                onClick={() => navigate(`/shop/${gender}`)}
              >
                ←
              </div>
            </form>
          </section>
        </div>
      }
    </div>
  );
};

export default Detail;
