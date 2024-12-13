import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";

const HeaderScoial = () => {
  return (
    <div className="header__social">
      <a
        href="https://www.linkedin.com/in/afzal-hashmi/"
        rel="noreferrer"
        target="_blank"
      >
        <AiFillLinkedin />
      </a>
      <a href="https://github.com/Afzal182" rel="noreferrer" target="_blank">
        <FaGithub />
      </a>
      <a
        href="https://www.facebook.com/afjal.hashmi.14"
        rel="noreferrer"
        target="_blank"
      >
        <FaFacebook />
      </a>
      <a href="https://linktr.ee/Afzal.18" rel="noreferrer" target="_blank">
        <SiLinktree />
      </a>
    </div>
  );
};

export default HeaderScoial;
