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
            <span>{text1}</span>
          </a>
        </li>
        <li>
          <a target="_blank" href={link2}>
            <span>{text2}</span>
          </a>
        </li>
        <li>
          <a target="_blank" href={link3}>
            <span>{text3}</span>
          </a>
        </li>
        <li>
          <a target="_blank" href={link4}>
            <span>{text4}</span>
          </a>
        </li>
        <li>
          <a target="_blank" href={link5}>
            <span>{text5}</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default FooterCard;
