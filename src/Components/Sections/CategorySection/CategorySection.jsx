import styles from "./CategorySection.module.scss";
import CategoryCard from "../../Card/CategoryCard/CategoryCard";

function CategorySection(props) {
  const { arrayOfCategory } = props;

  return (
    <section className={styles.categorySection}>
      {Array(5)
        .fill(null)
        .map((_, i) => (
          <CategoryCard cardsData={arrayOfCategory.slice(i * 1, i + 1)} />
        ))}
    </section>
  );
}

export default CategorySection;
