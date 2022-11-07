import styles from "./css/List.module.css";
import { useDispatch } from "react-redux";
import { setDetailInfo } from "./../store";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const List = ({ products }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [mountTransition, setMountTransition] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setMountTransition("mount");
    }, 100)
  }, [])
  return (
    <ul className={`${styles.list} ${styles[mountTransition]}`}>
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
              };
              dispatch(setDetailInfo(data));
              navigate(`/Detail`);
            }}
          >
            <div className={styles.list__img}>
              <img src={product.url} alt="" />
            </div>
            <div className={styles.list__desc}>
              <h3>{product.title}</h3>
              <small>$ {product.price}</small>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default List;
