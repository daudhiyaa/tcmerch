import { useState } from "react";
import styles from "./ProductCard.module.scss";
import cart from "../../../Assets/cart.png";
import coloredCart from "../../../Assets/cartcolor.png";

function ProductCard(props) {
  const { cardsData } = props;
  const item = cardsData[0];
  // console.log(props);

  const productName = item === undefined ? "Our product" : item.productName;
  const price = item === undefined ? "Rp,-" : item.price;
  const image1 = item === undefined ? "yellowhoodie1.jpg" : item.image1;
  const image2 = item === undefined ? "yellowhoodie2.jpg" : item.image2;
  // console.log(image1);

  const [isHoveredImg, setHoveredImg] = useState(false);
  const [isHoveredCart, setHoveredCart] = useState(false);

  return (
    <div className={styles.productCard}>
      <div className={styles.img}>
        <img
          onMouseEnter={() => {
            setHoveredImg(true);
          }}
          onMouseLeave={() => {
            setHoveredImg(false);
          }}
          src={
            isHoveredImg
              ? require("../../../Assets/" + image1)
              : require("../../../Assets/" + image2)
          }
          alt="hoodie"
        ></img>
        <div className={styles.text}>
          <div className={styles.price}>
            <h1>{productName}</h1>
            <h2>{price}</h2>
          </div>
          <img
            onMouseEnter={() => {
              setHoveredCart(true);
            }}
            onMouseLeave={() => {
              setHoveredCart(false);
            }}
            src={isHoveredCart ? coloredCart : cart}
            alt="cart"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
