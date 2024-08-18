import React from 'react'
import './about.css'
import ME from '../../assets/kika.png'
import {FaAward} from 'react-icons/fa'
import {AiOutlineUser} from 'react-icons/ai'
import {BsFolderCheck} from 'react-icons/bs'

const About = () => {
  return (
  <section id='about'>
    <h5>Get To Know</h5>
    <h2>About Me</h2>

    <div className="container about__container">
      <div className="about__me">
    <div className="about__me-image">
      <img src={ME} alt="about image" />
    </div>
      </div>

      <div className="about__content">
    <div className="about__cards">
      <article className='about__card'>
        <FaAward className='about__icon'/>
    <h5>Experience</h5>
    <small>7+ Years working</small>
      </article>
      <article className='about__card'>
        <AiOutlineUser className='about__icon'/>
    <h5>Clients</h5>
    <small>10+ Clients Worldwide</small>
      </article>
      <article className='about__card'>
        <BsFolderCheck className='about__icon'/>
    <h5>Projects</h5>
    <small>30+ Completed</small>
      </article>
    </div>
    <p>
      Please feel free to reach out to me if you require any additional information just click the button below to contact me
    </p>

    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>
  </section>
  )
}

export default About
