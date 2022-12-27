import React from "react";
import "./Suggestion.css";
import IMG from "../../assets/suggestion.png";

import { useRef } from "react";
import emailjs from "emailjs-com";

import Lottie from "lottie-react";
import sug1 from "../../assets/lotties/suggest.json";

/* Height auto */

const Suggestion = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_15grgu4",
      "template_f65pi6v",
      form.current,
      "RN9xZpvtOlTv2jnjB"
    );
    //emailjs.send("service_xo5coum","template_f65pi6v");
    e.target.reset();
  };
  return (
    <section id="Suggestion">
      {/* <h3>feedback and Suggestion are more important</h3>
    <h2>Suggestion form</h2> */}
      <div className="container suggestion__container" id="yash_div">
        <article className="suggestion__option">
          {/* <h3>feedback and Suggestion are more important</h3> */}
          <h3>Suggestion form</h3>
          <Lottie animationData={sug1}/>
        </article>

        <form ref={form} onSubmit={sendEmail}>
          <label name="Domains">Choose a Domain:</label>
          <select name="Domains" id="Domains">
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="dsa">DSA</option>
            <option value="android Dev">Android Dev</option>
            <option value="cloud computing">Cloud Computing</option>
            <option value="artificial intelligence">
              Artificial Intelligence
            </option>
            <option value="machine learning">Machine Learning</option>
            <option value="cyber security">Cyber Security</option>
            <option value="designing">Graphic design</option>
          </select>
          <input
            type="text"
            name="website"
            placeholder="recommended website"
            required
          ></input>
          <input
            type="text"
            name="youtube channels"
            placeholder="recommended youtube channels"
            required
          ></input>
          <input
            type="text"
            name="courses"
            placeholder="recommended Courses"
            required
          ></input>
          <input
            type="text"
            name="idea"
            placeholder="new project idea"
            required
          ></input>
          <textarea
            name="message"
            rows="4"
            placeholder="your feedback"
            required
          ></textarea>
          <div className="btn__container">
            <button type="submit" className="btn btn-primary">
              Send message
            </button>
            <button type="reset" className="btn btn-primary">
              Reset
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Suggestion;
