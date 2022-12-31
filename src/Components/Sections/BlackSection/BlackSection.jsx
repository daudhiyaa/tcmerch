import styles from "./BlackSection.module.scss";
import sale from "../../../Assets/sale.png";

function BlackSection() {
  return (
    <section className={styles.blackSection}>
      <div className={styles.leftSide}>
        <div className={styles.circle}>
          M<img src={sale} alt=""></img>
        </div>
      </div>
      <div className={styles.rightSide}>
        <p>Find out about the sales at your local shop</p>
        <a href="">
          <button>Find Shops Near You</button>
        </a>
      </div>
    </section>
  );
}

export default BlackSection;
