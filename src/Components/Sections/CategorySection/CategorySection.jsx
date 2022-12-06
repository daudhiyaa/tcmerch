import styles from "./CategorySection.module.scss";
import CategoryCard from "../../Card/CategoryCard/CategoryCard";

function CategorySection() {
  return (
    <section id="CategorySection">
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
    </section>
  );
}

export default CategorySection;
