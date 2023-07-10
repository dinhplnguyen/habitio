import React, { useState, useEffect } from "react";

import "./UserNavBar.css";
import { UilSun, UilMoon, UilCompass, UilUser } from '@iconscout/react-unicons'
import { Today } from "../";

export default function UserNavBar() {

  const iconSize = 28;
  const [active, setActive] = useState(
    localStorage.getItem("active") || "home"
  );

  const handleClick = (tab) => {
    setActive(tab);
  };

  useEffect(() => {
    localStorage.setItem("active", active);
  }, [active]);


  return (
    <>
      <div className="user__container">
        {active === "home" && <Today />}
      </div>
      <nav className="nav__container">
        <div className="nav__menu" id="nav__list">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#today"
                className={`nav__link ${active === "home" ? "active" : ""}`}
                id="today"
                onClick={() => handleClick("home")}
              >
                <UilSun size={iconSize} className="nav__icon" />
                <span className="nav__name"> Today </span>
              </a>
            </li>
            <li className="nav__item">
              <a href="#dream"
                className={`nav__link ${active === "dream" ? "active" : ""}`}
                id="dream"
                onClick={() => handleClick("dream")}
              >
                <UilMoon size={iconSize} className="nav__icon" />
                <span className="nav__name"> Dream </span>
              </a>
            </li>
            <li className="nav__item">
              <a href="#discover"
                className={`nav__link ${active === "discover" ? "active" : ""}`}
                id="discover"
                onClick={() => handleClick("discover")}
              >
                <UilCompass size={iconSize} className="nav__icon" />
                <span className="nav__name"> Discover </span>
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#profile"
                className={`nav__link ${active === "profile" ? "active" : ""}`}
                id="profile"
                onClick={() => handleClick("profile")}
              >
                <UilUser size={iconSize} className="nav__icon" />
                <span className="nav__name"> Profile </span>
              </a>
            </li>
          </ul>
        </div>
      </nav>

    </>
  );
}
