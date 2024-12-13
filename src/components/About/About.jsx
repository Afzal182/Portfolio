import React from "react";
import "./about.css";
import { IoSchoolSharp } from "react-icons/io5";
import { TiFolder } from "react-icons/ti";

import AFZAL from "../../assets/a.png";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={AFZAL} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <IoSchoolSharp className="about__icon" />
              <h2>Radharaman Engineering College (Bhopal)</h2>
              <small>2020-2024</small>
            </article>

            <article className="about__card">
              <TiFolder className="about__icon" />
              <h2>12th SKBD COLLEGE (KucahiKote)</h2>
              <small>2017-2019</small>
            </article>
            <article className="about__card">
              <TiFolder className="about__icon" />
              <h2>10th MSHS RatanPura (RatanPura)</h2>
              <small>2016-2017</small>
            </article>
          </div>

          <p>
            🚀 Eager to kickstart my career as a Software Engineer, leveraging
            my skills and knowledge to contribute meaningfully to innovative
            projects. Ready to collaborate with diverse teams, embrace
            challenges, and continuously grow both personally and professionally
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Connect
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
