import React from "react";
import styles from "./DivSection.module.scss";
import ProductCard from "../../Card/ProductCard/ProductCard";
import { UilAngleDoubleRight } from "@iconscout/react-unicons";

function DivSection(props) {
  const { categorySection } = props;
  const left_title =
    categorySection === undefined ? "FEATURED" : categorySection.leftTitle;
  const right_title =
    categorySection === undefined ? "PRODUCTS" : categorySection.rightTitle;
  const description =
    categorySection === undefined
      ? "Featured products description"
      : categorySection.description;

  const arrayOfProducts =
    categorySection === undefined ? [] : categorySection.contents;
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
        {Array(arrayOfProducts.length)
          .fill(null)
          .map((_, i) => (
            <ProductCard
              cardsData={
                arrayOfProducts === undefined
                  ? {}
                  : arrayOfProducts.slice(i * 1, i + 1)
              }
            />
          ))}
      </div>
    </div>
  );
}

export default DivSection;
