import React from "react";
import styles from "./App.module.scss";
import Header from "./Components/Header/Header";
import Home from "./Components/Sections/Section_Home/Home";
import Category from "./Components/Sections/CategorySection/CategorySection";
import DivSection from "./Components/Sections/DivSection/DivSection";
import Contact from "./Components/Sections/Section_Contact/Contact";
import Footer from "./Components/Footer/Footer";
import SlidingText from "./Components/SlidingText/SlidingText";

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Home />
      <SlidingText />
      <Category />
      <DivSection />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
