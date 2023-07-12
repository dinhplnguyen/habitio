import React, { useState, useEffect } from "react";

import "./UserNavBar.css";
import { Today } from "../";

import navData from "./UserNavData.js";

export default function UserNavBar() {

  const iconSize = 28;
  const [active, setActive] = useState(
    localStorage.getItem("active") || "today"
  );

  const handleClick = (tab) => {
    setActive(tab);
  };

  useEffect(() => {
    localStorage.setItem("active", active);
  }, [active]);

  return (
    <>
      <div className="tab__container">
        {active === "today" && <Today />}
      </div>
      <nav className="nav__container">
        <div className="nav__menu" id="nav__list">
          <ul className="nav__list">

            {navData.map((item, index) => (
              <li key={index} className="nav__item">
                <a href={`#${item.tab.toLowerCase()}`}
                  className={`nav__link ${active === item.tab.toLowerCase() ? "active" : ""}`}
                  id={item.tab.toLowerCase()}
                  onClick={() => handleClick(item.tab.toLowerCase())}
                >
                  <item.icon size={iconSize} className="nav__icon" />
                  <span className="nav__name"> {item.tab} </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

    </>
  );
}
