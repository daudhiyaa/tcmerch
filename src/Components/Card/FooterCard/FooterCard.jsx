import styles from "./FooterCard.module.scss";

function FooterCard(props) {
  const { footerData } = props;
  const title = footerData[0].title;
  const text1 = footerData[0].text1;
  const text2 = footerData[0].text2;
  const text3 = footerData[0].text3;
  const text4 = footerData[0].text4;
  const text5 = footerData[0].text5;

  return (
    <div className={styles.footer__card}>
      <h5 className={styles.footer__cardTitle}>{title}</h5>
      <ul>
        <li>{text1}</li>
        <li>{text2}</li>
        <li>{text3}</li>
        <li>{text4}</li>
        <li>{text5}</li>
      </ul>
    </div>
  );
}

export default FooterCard;
