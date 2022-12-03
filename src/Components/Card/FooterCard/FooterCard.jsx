import styles from "./FooterCard.module.scss";

function FooterCard() {
  return (
    <div className={styles.footer__card}>
      <h5 className={styles.footer__cardTitle}>CATEGORIES</h5>
      <ul>
        <li>Hoodies</li>
        <li>Sweatshirts</li>
        <li>Shirts</li>
        <li>T-Shirts</li>
        <li>Jackets</li>
      </ul>
    </div>
  );
}

export default FooterCard;
