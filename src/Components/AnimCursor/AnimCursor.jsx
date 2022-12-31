import React from "react";
import AnimatedCursor from "react-animated-cursor";

function AnimCursor() {
  return (
    <AnimatedCursor
      innerSize={0}
      outerSize={70}
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={1.5}
      outerStyle={{
        backgroundColor: "#bf8c4e",
        filter: "blur(29px)",
      }}
      // trailingSpeed={0.1}
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
  );
}

export default AnimCursor;
