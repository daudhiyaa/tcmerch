import React from "react";
import styles from "./App.module.scss";
import Header from "./Components/Header/Header";
import Home from "./Components/Sections/Section_Home/Home";
import DivSection from "./Components/Sections/DivSection/DivSection";
import Contact from "./Components/Sections/Section_Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className={styles.App}>
      {/* <Header /> */}
      {/* <Home /> */}
      <DivSection />
      {/* <Contact /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
