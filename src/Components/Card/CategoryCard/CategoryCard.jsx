import styles from "./CategoryCard.module.scss";
import hoodie from "../../../Assets/whitesweatshirt1.jpg";

function CategoryCard() {
  return (
    <a href="./CategoryCard.jsx" className={styles.CategoryCard}>
      <span>
        <img src={hoodie} alt="" />
        <p>SweatShirts</p>
      </span>
    </a>
  );
}

export default CategoryCard;
