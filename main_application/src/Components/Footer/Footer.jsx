import React from 'react'
import './Footer.css'
import {FaFacebookSquare} from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'
import {BsGithub} from 'react-icons/bs'
import IMG from '../../assets/logo.png'
import logo from '../../assets/logo/map2procoder_logo.png';

const Footer = () => {
  return (
    <footer id='foot'>
      <div className="logo_div">
      <img src={logo} className="logo_img"></img>
      </div>
      <a href='#' className='footer__logo'>
        map2proCoder
      </a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#About'>About</a></li>
        <li><a href='#Main'>main page</a></li>
        <li><a href='#Suggestion'>Suggestion</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href='' target='_blank'><FaFacebookSquare/></a>
        <a href='' target='_blank'><AiOutlineMail/></a>
        <a href='' target='_blank'><BsGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Application Made With Heart. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer