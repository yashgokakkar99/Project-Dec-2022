import React from 'react'
import './Navbar.css'
// import { useState } from "react";
import { createContext, useState } from "react";
import ReactSwitch from "react-switch";



export const ThemeContext = createContext(null);

const Navbar = () => {
  
  const [activeNav, setActiveNav] = useState("#");

  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };


  return (
    <section id="Navbar">

    <nav>
      <a href="#" 
      onClick={() => setActiveNav("#")}
      className={activeNav === "#" ? "active" : ""}>
        {/* <AiFillHome /> */}
        Home
      </a>
      <a
        href="#About"
        onClick={() => setActiveNav("#About")}
        className={activeNav === "#About" ? "active" : ""}
      >
        {/* <FcAbout /> */}
        About-us
      </a>
      
      <a href="#contact"
      onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}>
        {/* <IoIosContact /> */}
        Contact-us
      </a>
    </nav>

    
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        {/* <Form /> */}
        <div className="switch">
          <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
      </div>
    </ThemeContext.Provider>

    </section>
  );
};


export default Navbar
