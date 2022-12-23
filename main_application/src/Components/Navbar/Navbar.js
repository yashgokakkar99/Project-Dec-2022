import React from "react";
import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <section id="Navbar">
      <nav>
        <a
          href="#"
          onClick={() => setActiveNav("#")}
          className={activeNav === "#" ? "active" : ""}
        >
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

        <a
          href="#contact"
          onClick={() => setActiveNav("#contact")}
          className={activeNav === "#contact" ? "active" : ""}
        >
          {/* <IoIosContact /> */}
          Contact-us
        </a>
      </nav>
    </section>
  );
};

export default Navbar;
