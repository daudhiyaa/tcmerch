import styles from "./CategoryCard.module.scss";
import hoodie from "../../../Assets/whitesweatshirt1.jpg";

function CategoryCard() {
  return (
    <a href="" className={styles.CategoryCard}>
      <span>
        {/* <img src={hoodie} alt="" /> */}
        SweatShirts
      </span>
    </a>
  );
}

export default CategoryCard;
