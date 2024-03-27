import React from 'react'
import './services.css'
import {BsCheck2} from 'react-icons/bs'

const services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container service__container">
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Interaction Designer</p>
            </li>
             <li>
              <BsCheck2 className='service__list-icon' />
              <p>Expert in wireframes Prototypes and Design.</p>
            </li>
             <li>
              <BsCheck2 className='service__list-icon' />
              <p>Visual Designer.</p>
            </li>
             <li>
              <BsCheck2 className='service__list-icon' />
              <p>Expert in Graphics, Mockups and Layout.</p>
            </li>
          </ul>

        </article>

        {/* END OF UI/UX */}

        <article className='service'>
          <div className="service__head">
            <h3>WEB DEVELOPMENT</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Front-end Development.</p>
            </li>
             <li>
              <BsCheck2 className='service__list-icon' />
              <p>Back-end Development.</p>
            </li>
             <li>
              <BsCheck2 className='service__list-icon' />
              <p>Full Stack Develpoment.</p>
            </li>
             <li>
              <BsCheck2 className='service__list-icon' />
              <p>Website Development.</p>
            </li>
             <li>
              <BsCheck2 className='service__list-icon' />
              <p>Mobile App Development.</p>
            </li>
          </ul>

        </article>

        {/* END OF WEB DEVELOPMENT */}
        <article className='service'>
          <div className="service__head">
            <h3>CONTENT CREATION</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Blog post.</p>
            </li>
             <li>
              <BsCheck2 className='service__list-icon' />
              <p>Info Graphics.</p>
            </li>
             <li>
              <BsCheck2 className='service__list-icon' />
              <p>Videos.</p>
            </li>
             <li>
              <BsCheck2 className='service__list-icon' />
              <p>Podcast.</p>
            </li>
             <li>
              <BsCheck2 className='service__list-icon' />
              <p>Social Media Post.</p>
            </li>
          </ul>

        </article>

      </div>
    </section>
  )
}

export default services
