import { useState } from "react";
import styles from "./ProductCard.module.scss";
import cart from "../../../Assets/cart.png";
import coloredCart from "../../../Assets/cartcolor.png";

function ProductCard() {
    const [isHoveredImg, setHoveredImg] = useState(false);
    const [isHoveredCart, setHoveredCart] = useState(false);

    return(
        <div className={styles.productCard}>
            <div className={styles.img}>
            <img
                onMouseEnter={() => {setHoveredImg(true)}}
                onMouseLeave={() => {setHoveredImg(false)}}
                src={isHoveredImg ? require("../../../Assets/yellowhoodie2.jpg") : require("../../../Assets/yellowhoodie1.jpg")} alt="hoodie">
            </img>
            <div className={styles.text}>
                <div className={styles.price}>
                    <h1>Yellow Hoodie</h1>
                    <h2>Rp199.000,-</h2>
                </div>
                <img
                    onMouseEnter={() => {setHoveredCart(true)}}
                    onMouseLeave={() => {setHoveredCart(false)}}
                    src={isHoveredCart ? coloredCart : cart} alt="cart">
                </img>
            </div>
            </div>
        </div>
    )
}

export default ProductCard;