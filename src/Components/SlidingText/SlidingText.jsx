import styles from "./SlidingText.module.scss";

function SlidingText() {
    return(
        <section>
            <div>
            <section class={styles.news_message}>
                <p>TC MERCH * </p>
                <p>TC MERCH * </p>
                <p>TC MERCH * </p>
                <p>TC MERCH * </p>
                <p>TC MERCH * </p>
                <p>TC MERCH * </p>
                <p>TC MERCH * </p>
            </section>
            <section class={styles.news_message}>
                <p>TC MERCH * </p>
                <p>TC MERCH * </p>
                <p>TC MERCH * </p>
                <p>TC MERCH * </p>
                <p>TC MERCH * </p>
                <p>TC MERCH * </p>
                <p>TC MERCH * </p>
            </section>
            </div>
        </section>
    )
}

export default SlidingText;
