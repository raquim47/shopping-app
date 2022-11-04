import styles from "./css/List.module.css";
import { useDispatch } from "react-redux";
import { setDetailInfo } from "./../store";
import { useNavigate } from "react-router-dom";

const List = ({ products }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <ul className={styles.list}>
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
            <h3>{product.title}</h3>
            <strong>$ {product.price}</strong>
          </li>
        ))}
    </ul>
  );
};

export default List;
