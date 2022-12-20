import React from 'react'
import './Navbar_style.css'


import { useState } from "react";
// const Navbar = () => {
//   return (
//     <section id="Navbar">
//       <div className="nav">
//         <ul className='nav_con'>
//           <li className='nav_items' id='nav1'>
//             <a href="#">Home</a>
//           </li>
//           <li className='nav_items' id='nav2'>
//             <a href="#About">About us</a>
//           </li>
//           <li className='nav_items' id='nav3'>
//             <a href="#contact">Contact us</a>
//           </li>
//         </ul>
//       </div>
//     </section>
//   )
// }

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#");
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
    </section>
  );
};


export default Navbar
