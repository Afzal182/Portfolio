import React from "react";
import "./mytech.css";
import { BiSolidCheckShield } from "react-icons/bi";
const Mytech = () => {
  return (
    <section id="mytech">
      <h5>What Skills I Have</h5>
      <h2>My Tech Skills</h2>
      <div className="container mytech__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BiSolidCheckShield className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Advnced</small>
              </div>
            </article>
            <article className="experience__details">
              <BiSolidCheckShield className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BiSolidCheckShield className="experience__details-icon" />
              <div>
                <h4>JAVASCRIPT</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BiSolidCheckShield className="experience__details-icon" />
              <div>
                <h4>BOOTSTRAP</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BiSolidCheckShield className="experience__details-icon" />
              <div>
                <h4>REACT JS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        {/* FRONTEND END HERE */}
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BiSolidCheckShield className="experience__details-icon" />
              <div>
                <h4>NODE JS</h4>
                <small className="text-light">Advnced</small>
              </div>
            </article>
            <article className="experience__details">
              <BiSolidCheckShield className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BiSolidCheckShield className="experience__details-icon" />
              <div>
                <h4>JAVASCRIPT</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BiSolidCheckShield className="experience__details-icon" />
              <div>
                <h4>BOOTSTRAP</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BiSolidCheckShield className="experience__details-icon" />
              <div>
                <h4>REACT JS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mytech;
