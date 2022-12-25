import styles from "./BlackSection.module.scss";

function BlackSection() {
  const text = () => {
    document.querySelector(".text");
  };

  // text.innerHTML = text.innerText.split("").map(
  //     (char, i) =>
  //       `<span style="transform:rotate(${i * 5}deg)">${char}</span>`
  //   ).join("");

  return (
    <section className={styles.blackSection}>
      <div className={styles.leftSide}>
        <div className={styles.circle}>
          <div className={styles.logo}>M</div>
          {/* <div className={styles.text}>SALE . SALE . SALE . SALE .</div> */}
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
