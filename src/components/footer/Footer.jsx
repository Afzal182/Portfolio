import React from "react";
import "./footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <footer>
        <a href="#" className="footer__logo">
          Afzal
        </a>

        <ul className="permlinks">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#mytech">MyTech</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#testimonial">Testimonial</a>
          </li>
        </ul>

        <div className="footer__socials">
          <a href="https://www.facebook.com/afjal.hashmi.14">
            {" "}
            <FaFacebook />
          </a>
          <a href="https://instagram.com">
            <FaInstagram />
          </a>
          <a href="https://youtube.com">
            <FaYoutube />
          </a>
        </div>
        <div className="footer__copyright">
          <small>&copy; Afzal Hashmi. All rights reserved</small>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
