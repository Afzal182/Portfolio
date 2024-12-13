import React from "react";
import "./navbar.css";
import { RiHome2Line } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";
import { BsBook } from "react-icons/bs";
import { RiServiceLine } from "react-icons/ri";
import { TiMessages } from "react-icons/ti";
import { useState } from "react";
const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <RiHome2Line />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <FaRegUserCircle />
      </a>
      <a
        href="#mytech"
        onClick={() => setActiveNav("#mytech")}
        className={activeNav === "#mytech" ? "active" : ""}
      >
        <BsBook />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <TiMessages />
      </a>
    </nav>
  );
};

export default Navbar;
