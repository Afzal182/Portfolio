import React from "react";
import "./header.css";
import CTA from "./CTA";
import AFZAL from "../../assets/Hashmi.png";
import HeaderScoial from "./HeaderScoial";
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h2>Hello I'M</h2>
        <h1>Afzal Hashmi</h1>
        <h5 className="text-light">Mern Stack Developer</h5>
        <CTA />
        <HeaderScoial />
        <div className="me">
          <img src={AFZAL} alt="" />
        </div>
        <a href="#contact" className="sroll__down">
          Sroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
