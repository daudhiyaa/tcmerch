import React, { useState } from "react";
import { UilBars } from "@iconscout/react-unicons";
import "./Header.scss";

function Header() {
  const [isExpanded, setExpanded] = useState(false);
  const [viewportWidth, setWidth] = useState(window.visualViewport.width);

  window.addEventListener('resize',(e)=>{
    setWidth(e.target.visualViewport.width);
    
    if (viewportWidth > 768) {
      setExpanded(false);
    }
  });

  const getClassnameNavmenu = () => {
    if (viewportWidth > 768) {
      return 'navmenu';
    } else {
      if (!isExpanded) {
        return 'navmenuhidden';
      } else {
        return 'navmenuexpanded';
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
      className={`hamburger${viewportWidth > 768 ? "hidden" : "shown"}`}
      onClick={() => {
        setExpanded(!isExpanded);
      }}
      >
        <UilBars />
      </div>
    </div>
  );
}

export default Header;
