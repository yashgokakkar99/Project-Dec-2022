import React from "react";
import "./Contact.css";

import { BsMailbox } from "react-icons/bs";
import { FcIdea } from "react-icons/fc";
import { FaWhatsappSquare } from "react-icons/fa";

import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_xo5coum",
      "template_v9czkup",
      form.current,
      "RN9xZpvtOlTv2jnjB"
    );

    e.target.reset();
  };
  return (
    <section id="contact">
      <div className="container contact__container">
        <div className="contact__options">
          <h2>Contact us</h2>

          <article className="contact__option">
            <BsMailbox />
            <h4>Email</h4>
            <h4>map2proCoder@gmail.com</h4>
            <a href="mailto:map2procoder@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <FcIdea />
            <h4>Idea/Suggestion</h4>
            <a href="#Suggestion"> Send message</a>
          </article>
          <article className="contact__option">
            <FaWhatsappSquare />
            <h4>WhatsApp</h4>
            <h4>+91-9028405992</h4>
            <a
              href="https://api.whatsapp.com/send?phone=9028405992"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="your full name"
            required
          ></input>
          <input
            type="text"
            name="email"
            placeholder="your email"
            required
          ></input>
          <textarea
            name="message"
            rows="7"
            placeholder="your message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
