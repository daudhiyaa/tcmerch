import styles from "./CategoryCard.module.scss";

function CategoryCard(props) {
  const { cardsData } = props;
  const title = cardsData[0].title;
  const image = cardsData[0].background;

  return (
    <a href="" className={styles.categoryCard}>
      <img src={require("../../../Assets/" + image)} alt=""></img>
      <p>{title}</p>
    </a>
  );
}

export default CategoryCard;
