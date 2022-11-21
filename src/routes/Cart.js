import styles from "./css/Cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseCount,
  decreaseCount,
  deleteCart,
  resetCart,
} from "./../store";
import Footer from "./../components/Footer";

const Cart = () => {
  const cartData = useSelector((state) => state.cartData);
  const dispatch = useDispatch();
  const totalPrice = cartData
    .map((item) => item.price * item.count)
    .reduce((prev, curr) => prev + curr, 0);
  const onClickOrder = () => {
    alert("Your order has been completed");
    dispatch(resetCart([]));
  };
  return (
    <div className={styles.cart}>
      <div className={styles.cart__inner}>
        <h2 className={styles.cart__title}>Cart</h2>
        <table className={styles.cart__list}>
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {cartData[0] ? (
              cartData.map((item) => (
                <tr className={styles.product} key={item.id + item.size}>
                  <td className={styles.product__desc}>
                    <img src={item.url} />
                    <div className={styles.product__option}>
                      <h3>{item.title}</h3>
                      <p>SIZE : {item.size}</p>
                      <span
                        className={styles.delete}
                        onClick={() => {
                          dispatch(deleteCart(item));
                        }}
                      >
                        DELETE
                      </span>
                    </div>
                  </td>
                  <td className={styles.product__quantity}>
                    <div className={styles.count}>
                      <small>{item.count}</small>
                      <div className={styles.count__btn}>
                        <div
                          className={styles.count__up}
                          onClick={() => dispatch(increaseCount(item))}
                        ></div>
                        <div
                          className={styles.count__down}
                          onClick={() => dispatch(decreaseCount(item))}
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td className={styles.product__price}>
                    $ {item.price * item.count}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td>
                  <strong className={styles.cart__empty}>
                    Your shopping cart is empty!
                  </strong>
                </td>
              </tr>
            )}
          </tbody>
        </table>
        {cartData[0] && (
          <>
            <ul className={styles.cart__total}>
              <li>
                <span>Sub Total</span>
                <span>$ {totalPrice}</span>
              </li>
              <li>
                <span>Shipping</span>
                <span>$ 10</span>
              </li>
              <li>
                <span>Shipping</span>
                <span>$ {totalPrice + 10}</span>
              </li>
            </ul>
            <button
              className={styles.cart__order}
              onClick={() => {
                onClickOrder();
              }}
            >
              order
            </button>
          </>
        )}
      </div>
      <div className={styles.footer_wrap}>
        <Footer />
      </div>
    </div>
  );
};

export default Cart;
