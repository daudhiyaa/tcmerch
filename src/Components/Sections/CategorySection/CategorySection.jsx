import styles from "./CategorySection.module.scss";
import CategoryCard from "../../Card/CategoryCard/CategoryCard";

function CategorySection(props) {
  const { arrayOfCategory } = props;
  
  return (
    <section id={styles.CategorySection}>
      {Array(5).fill(null).map((_, i) => (
        <div className={styles.card}>
          <CategoryCard cardsData={arrayOfCategory.slice(i * 1, i + 1)} />
        </div>
      ))}
    </section>
  );
}

export default CategorySection;
