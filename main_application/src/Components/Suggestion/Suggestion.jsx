import React from "react";
import "./Suggestion.css";
import IMG from '../../assets/suggestion.png'

const Suggestion = () => {
  return (
    <section id="Suggestion">
    <h3>feedback and Suggestion are more important</h3>
    <h2>Suggestion form</h2>
      <div className="container suggestion__container">
        
          <article className="suggestion__option">
            <img  className='suggestion-img'
            src={IMG} alt=''/>
          </article>
        

        <form action="">
          <label name="cars">Choose a Domain:</label>
          <select name="Domains" id="Domains">
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="dsa">DSA</option>
            <option value="android Dev">Android Dev</option>
            <option value="cloud computing">Cloud Computing</option>
            <option value="artificial intelligence">Artificial Intelligence</option>
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
          <button type="submit" className="btn btn-primary">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Suggestion;
