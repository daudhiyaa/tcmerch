import styles from "./CategoryCard.module.scss";

function CategoryCard(props) {
  const { cardsData } = props;
  const title = cardsData[0].title;
  const image = cardsData[0].background;

  return (
    <div>
      <a href="./CategoryCard.jsx" className={styles.CategoryCard}>
        <span>
          <img src={require("../../../Assets/" + image)} alt="" />
          <p>{title}</p>
        </span>
      </a>
    </div>
  );
}

export default CategoryCard;
