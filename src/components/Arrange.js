import styles from "./css/Arrange.module.css";
import React, { useEffect, useState } from "react";

const Arrange = ({clickedTab, products, setProducts}) => {
  const option = ["NEWEST", "LOW PRICE", "HIGH PRICE"];
  const [clickedOption, setClickedOption] = useState(option[0]);
  // 초기화
  useEffect(() => {
    setClickedOption(option[0]);
  }, [clickedTab]);

  const onClickOption = (opName) => () => {
    setClickedOption(opName);
    const newProducts = [...products];
    if(opName === "NEWEST") {
      newProducts.sort((a, b) => (a.id > b.id ? -1 : 1));
    } else if (opName === "LOW PRICE") {
      newProducts.sort((a, b) => (a.price < b.price ? -1 : 1));
    } else if (opName === "HIGH PRICE") {
      newProducts.sort((a, b) => (a.price > b.price ? -1 : 1));
    }
    setProducts(newProducts);
  }
  
  return (
    <ul className={styles.arrange}>
      {option.map((opItem) => (
        <li
          onClick={onClickOption(opItem)}
          className={clickedOption === opItem ? styles.active : null}
          key={opItem}
        >
          {opItem}
        </li>
      ))}
    </ul>
  )
}
export default Arrange;