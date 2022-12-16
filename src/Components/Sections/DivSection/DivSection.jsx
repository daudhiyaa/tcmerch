import React from "react";
import styles from "./DivSection.module.scss";
import ProductCard from "../../Card/ProductCard/ProductCard";
import { UilAngleDoubleRight } from "@iconscout/react-unicons";

function DivSection(props) {
  const {newProduct} = props;
  const left_title = (newProduct === undefined ? "Our" : newProduct.leftTitle);
  const right_title = (newProduct === undefined ? "Our" : newProduct.rightTitle);
  const description = (newProduct === undefined ? "Our" : newProduct.description);

  const arrayOfProducts = (newProduct === undefined ? [] : newProduct.contents);
  // console.log(arrayOfProducts);

  return (
    <div className={styles.DivSection}>
      <div className={styles.left_aligned}>{left_title}</div>
      <div className={styles.right_aligned}>{right_title}</div>
      <div className={styles.arrow}>
        VIEW ALL <UilAngleDoubleRight />
      </div>
      <div className={styles.description_holder}>{description}</div>
      <div className={styles.arrow_bottom}>
        VIEW ALL <UilAngleDoubleRight />
      </div>
      <div className={styles.productCards}>
        {Array(arrayOfProducts.length).fill(null).map((_, i) => (
            <ProductCard cardsData={arrayOfProducts === undefined ? {} : arrayOfProducts.slice(i*1, i + 1)} />
        ))}
      </div>
    </div>
  );
}

export default DivSection;
