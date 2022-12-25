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
    
    if (viewportWidth > 850) {
      setExpanded(false);
    }
  });

  const getClassnameNavmenu = () => {
    if (viewportWidth > 850) {
      return 'navmenu';
    } else {
      if (!isExpanded) {
        return 'navmenuhidden';
      } else {
        return 'navmenuExpanded';
      }
    }
  }

  return (
    <div className="header">
      <div className="title">TC MERCH</div>
      <div className={getClassnameNavmenu()}>
        <ul>
          <li>Home</li>
          <li>Category</li>
          <li>New Arrival</li>
          <li>Featured Products</li>
          <li>Contact</li>
        </ul>
      </div>
      <div
      className={`hamburger${viewportWidth > 850 ? "hidden" : "shown"}`}
      onClick={() => {
        setExpanded(true);
      }}
      >
        <UilBars />
      </div>
    </div>
  );
}

export default Header;
