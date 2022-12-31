import React from "react";
import styles from "./App.module.scss";
import Header from "./Components/Header/Header";
import Home from "./Components/Sections/Section_Home/Home";
import Category from "./Components/Sections/CategorySection/CategorySection";
import DivSection from "./Components/Sections/DivSection/DivSection";
import BlackSection from "./Components/Sections/BlackSection/BlackSection";
import Contact from "./Components/Sections/Section_Contact/Contact";
import Footer from "./Components/Footer/Footer";
import SlidingText from "./Components/SlidingText/SlidingText";
import DummyData from "./DummyData/dummyData.json";
import AnimCursor from "./Components/AnimCursor/AnimCursor";

function App() {
  const categoryData = DummyData.categorySection;
  const newestProductData = DummyData.newestProducts;
  const featuredProductData = DummyData.featuredProducts;
  const footerCardData = DummyData.footer;

  return (
    <div className={styles.App}>
      <AnimCursor />
      <Header />
      <Home />
      <Category arrayOfCategory={categoryData} />
      <DivSection categorySection={newestProductData} />
      <BlackSection />
      <DivSection categorySection={featuredProductData} />
      <Contact />
      <SlidingText />
      <Footer arrayOfFooter={footerCardData} />
    </div>
  );
}

export default App;
