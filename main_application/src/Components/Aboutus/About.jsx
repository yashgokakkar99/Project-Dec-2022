import React from 'react'
import './About.css'
import IMG1 from '../../assets/yash_profile.jpg'
import IMG2 from '../../assets/Ashutosh_profile.jpg'


const About = () => {
  return (
    <section id='About'>
        <h2>About us</h2>
        <div className="about__text">
          <h3>VISION</h3>

          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Officiis repellat harum similique cumque, recusandae aut maxime
           facilis enim ex ea saepe neque quis quasi aliquid rem atque 
           praesentium optio illum?
           </p>

           <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis mollitia saepe <br></br>
            consequuntur nam itaque ex sequi omnis accusamus iure! Fugiat inventore nisi, <br></br>
            cum sint adipisci suscipit officiis perferendis debitis id!
           </p>
          
        </div>
        <div
        className="container portfolio__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
      
      >
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          
          
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          
          
        </article>
        
        
      </div>
        
    </section>
  )
}

export default About
