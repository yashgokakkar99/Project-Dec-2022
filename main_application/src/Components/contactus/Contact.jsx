import React from 'react'
import './Contact.css'

import {BsMailbox} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'
import {FaWhatsappSquare} from 'react-icons/fa'



import  { useRef } from 'react';
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_567zhwa', 'template_ro70rl4', form.current, '_3Ve1AmXpc3veNCIf')

    e.target.reset();
  };
  return (
    <section id='contact'>
    
    <h5>Get in touch</h5>
    <h2>Contact me</h2>

    <div className='container contact__container'>
      <div className='contact__options'>
        <article className='contact__option'>
          <BsMailbox/>
          <h4>Email</h4>
          <h4>ag2364443@gmail.com</h4>
          <a href='mailto:ag2364443@gmail.com'>Send a message</a>
        </article>
        <article className='contact__option'>
          <FaFacebookF/>
          <h4>FaceBook</h4>
          <a href='https://www.facebook.com/profile.php?id=100022615870474' target='_blank'>Send a message</a>
        </article>
        <article className='contact__option'>
          <FaWhatsappSquare/>
          <h4>WhatsApp</h4>
          <h4>+91-7666145992</h4>
          <a href='https://api.whatsapp.com/send?phone=7666145992' target='_blank'>Send a message</a>
        </article>
      </div>
      <form ref={form} onSubmit={sendEmail}>
      
        <input type='text' name='name' placeholder='your full name' required></input>
        <input type='text' name='email' placeholder='your email' required></input>
        <textarea name='message' rows='7' placeholder='your message' required></textarea>
        <button type='submit' className='btn btn-primary'>Send message</button>
      </form> 
    </div>
    </section>
  )
}

export default Contact