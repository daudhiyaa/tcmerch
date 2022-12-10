import React from "react";
import styles from "./DivSection.module.scss";
import { UilAngleDoubleRight } from "@iconscout/react-unicons";

function DivSection() {
  return (
    <div className={styles.DivSection}>
      <div className={styles.left_aligned}>NEWEST</div>
      <div className={styles.right_aligned}>PRODUCTS</div>
      <div className={styles.arrow}>
        VIEW ALL <UilAngleDoubleRight />
      </div>
      <div className={styles.description_holder}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porta feugiat
        etiam aliquet aliquet tellus vel. Et maecenas id bibendum sit. Augue
        nulla tortor faucibus nunc. Urna massa mattis faucibus velit sed
        volutpat sodales. Quis at mi amet, ipsum.
      </div>
      <div className={styles.arrow_bottom}>
        VIEW ALL <UilAngleDoubleRight />
      </div>
    </div>
  );
}

export default DivSection;
