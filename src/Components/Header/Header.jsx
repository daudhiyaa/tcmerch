import React, { useState } from "react";
import { UilBars } from "@iconscout/react-unicons";
import "./Header.scss";

function Header() {
  const [isExpanded, setExpanded] = useState(false);
  const [viewportWidth, setWidth] = useState(window.visualViewport.width);
  const [height, setHeight] = useState(window.visualViewport.height);

  window.addEventListener('resize',(e)=>{
    setWidth(e.target.visualViewport.width);
    setHeight(e.target.visualViewport.height);
    console.log(viewportWidth);
    console.log(height);
  });

  return (
    <div className="header">
      <div className="title">TC MERCH</div>
      <div className={`navmenu${viewportWidth > 850 ? "" : "shrunk"}`}>
        <ul>
          <li>Home</li>
          <li>Category</li>
          <li>New Arrival</li>
          <li>Featured Products</li>
          <li>Contact</li>
        </ul>
        {/* <div
          className="hamburger"
          onClick={() => {
            setExpanded(!isExpanded);
          }}
        >
          <UilBars />
        </div> */}
      </div>
    </div>
  );
}

export default Header;
