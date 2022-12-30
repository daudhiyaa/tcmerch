import styles from "./FooterCard.module.scss";

function FooterCard(props) {
  const { footerData } = props;
  const title = footerData[0].title;

  const text1 = footerData[0].text1;
  const text2 = footerData[0].text2;
  const text3 = footerData[0].text3;
  const text4 = footerData[0].text4;
  const text5 = footerData[0].text5;

  const link1 = footerData[0].link1;
  const link2 = footerData[0].link2;
  const link3 = footerData[0].link3;
  const link4 = footerData[0].link4;
  const link5 = footerData[0].link5;

  return (
    <div className={styles.footer__card}>
      <h5 className={styles.footer__cardTitle}>{title}</h5>
      <ul>
        <li>
          <a target="_blank" href={link1}>
            {text1}
          </a>
        </li>
        <li>
          <a target="_blank" href={link2}>
            {text2}
          </a>
        </li>
        <li>
          <a target="_blank" href={link3}>
            {text3}
          </a>
        </li>
        <li>
          <a target="_blank" href={link4}>
            {text4}
          </a>
        </li>
        <li>
          <a target="_blank" href={link5}>
            {text5}
          </a>
        </li>
      </ul>
    </div>
  );
}

export default FooterCard;
