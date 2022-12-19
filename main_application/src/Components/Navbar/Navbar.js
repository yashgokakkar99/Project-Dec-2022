import React from 'react'
import './Navbar_style.css'

const Navbar = () => {
  return (
    <section id="Navbar">
      <div className="nav">
        <ul className='nav_con'>
          <li className='nav_items' id='nav1'>
            <a href="#">Home</a>
          </li>
          <li className='nav_items' id='nav2'>
            <a href="#About">About us</a>
          </li>
          <li className='nav_items' id='nav3'>
            <a href="#contact">Contact us</a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Navbar
