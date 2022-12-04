import React from "react";
import styles from "./DivSection.module.scss";

function DivSection() {
    return(
        <div className={styles.DivSection}>
            <div className={styles.left_aligned}>NEWEST</div>
            <div className={styles.right_aligned}>PRODUCT</div>
            <div className={styles.description_holder}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porta feugiat etiam aliquet aliquet tellus vel. Et maecenas id bibendum sit. Augue nulla tortor faucibus nunc. Urna massa mattis faucibus velit sed volutpat sodales. Quis at mi amet, ipsum.</div>
        </div>
    )
}

export default DivSection;
