import styles from "./css/List.module.css";
import { useDispatch } from "react-redux";
import { setDetailInfo } from "./../store";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const List = ({ products }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [mount, setMount] = useState("");
  
  useEffect(() => {
    setTimeout(() => {
      setMount("mount");
    }, 100);
    return () => {
      setMount("");
    }
  }, [products]);

  return (
    <ul className={`${styles.list} ${styles[mount]}`}>
      {products &&
        products.map((product) => (
          <li
            key={product.id}
            onClick={() => {
              const data = {
                id: product.id,
                title: product.title,
                price: product.price,
                url: product.url,
                size: product.size,
                cate: product.cate,
                gender: product.gender,
              };
              dispatch(setDetailInfo(data));
              setTimeout(() => {
                navigate(`/detail/${data.gender}/${data.cate}/${data.id}`);
              }, 50)
              
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
