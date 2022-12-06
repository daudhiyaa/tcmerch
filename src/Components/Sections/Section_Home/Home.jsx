import React from "react";
import styles from "./Home.module.scss";
import cover from "../../../Assets/yellowhoodie1.jpg";
import { UilAngleDoubleRight } from '@iconscout/react-unicons'

function Home() {
    return(
        <div className={styles.home}>
            <h1>GET</h1>
            <h1>YOURSELF</h1>
            <h2>INTO THE</h2>
            <h2>RIGHT GEAR</h2>
            <h3>VIEW SUMMER COLLECTION<UilAngleDoubleRight/></h3>
            <img src={cover} alt="Cover"></img>
        </div>
    )
}

export default Home;
