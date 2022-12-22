import React from 'react'
import './Footer.css'
import {FaFacebookSquare} from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'
import {BsGithub} from 'react-icons/bs'


const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Project</a>

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