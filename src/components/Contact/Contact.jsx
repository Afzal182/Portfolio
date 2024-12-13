import React from "react";
import "./contact.css";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdMessage } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_esq3bj1",
        "template_dyrag44",
        form.current,
        { publicKey: "U4zDtDA4KVTU5JhIY" },
        e.target.reset()
      )

      .then(
        () => {
          console.log("SUCCESS!",);
         
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Connect Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMailOutline className="contact__option-icon" />
            <h4>Email</h4>
            <h5>afzalhashmi652@gmail.com</h5>
            <a href="Email to: afzalhashmi652@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <MdMessage className="contact__option-icon" />
            <h4>Messanger</h4>
            <h5>afzalhashmi652@gmail.com</h5>
            <a href="https://m.me" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <FaWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>7463913948</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+917463913948"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        {/* END OF THE CONTACT */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="meassage"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
