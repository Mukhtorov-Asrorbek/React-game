import React, { useState } from "react";

import "./header.scss";

import { logo } from "../../assets/images";

const Header = () => {
  const [active, setActive] = useState("header__nav");

  const [toggleIcon, setToggleIcon] = useState("nav__toggler");

  const navToggle = () => {
    active === "header__nav"
      ? setActive("header__nav nav__active")
      : setActive("header__nav");

    //   TogglerIcon
    toggleIcon === "nav__toggler"
      ? setToggleIcon("nav__toggler toggle")
      : setToggleIcon("nav__toggler");
  };
  return (
    <div className="header">
      <div className="header__inner container">
        <div className="header__logo">
          <img src={logo} alt="" />
        </div>
        <ul className={active}>
          <li>
            <a href="#">overview</a>
          </li>
          <li>
            <a href="#">news</a>
          </li>
          <li>
            <a href="#">champions</a>
          </li>
          <li>
            <a href="#">support</a>
          </li>
        </ul>
        <div onClick={navToggle} className={toggleIcon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
