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
import AnimatedCursor from "react-animated-cursor";

function App() {
  const categoryData = DummyData.categorySection;
  const newestProductData = DummyData.newestProducts;
  const featuredProductData = DummyData.featuredProducts;
  const footerCardData = DummyData.footer;

  return (
    <div className={styles.App}>
      <AnimatedCursor
        innerSize={0}
        outerSize={120}
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={1}
        // trailingSpeed={0.1}
        outerStyle={{
          backgroundColor: "#bf8c4e",
          filter: "blur(45px)",
        }}
        clickables={[
          "a",
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          ".link",
        ]}
      />
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
