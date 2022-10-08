import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/port1.jpg'
import IMG2 from '../../assets/port2.jpg'
import IMG3 from '../../assets/port3.jpg'
import IMG4 from '../../assets/port4.jpg'
import IMG5 from '../../assets/port5.jpg'
import IMG6 from '../../assets/port6.jpg'
import IMG7 from '../../assets/port7.jpg'



const data =[
  {
    id:1,
    image: IMG1,
    title:'INEC digital votng system app',
    github:'https://github.com',
    demo: 'https://dribbble.com/shots'
  },
  {
    id:2,
    image: IMG2,
    title:' SportBettng website',
    github:'https://github.com',
    demo: 'https://dribbble.com/shots'
  },
  {
    id:3,
    image: IMG3,
    title:'Tribute Landing page for Queen Elizabeth II',
    github:'https://github.com',
    demo: 'https://dribbble.com/shots'
  },
  {
    id:4,
    image: IMG4,
    title:'Digital welbeing Website',
    github:'https://github.com',
    demo: 'https://dribbble.com/shots'
  },
  {
    id:5,
    image: IMG5,
    title:'C2C Ecommerce website',
    github:'https://github.com',
    demo: 'https://dribbble.com/shots'
  },
  {
    id:6,
    image: IMG6,
    title:'E-commerce Bookstore',
    github:'https://github.com',
    demo: 'https://dribbble.com/shots'
  },
  {
    id:7,
    image: IMG7,
    title:'online payment API',
    github:'https://github.com',
    demo: 'https://dribbble.com/shots'
  }
  
]



const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
         data.map(({id,image,title,github,demo})=>{
          return(
             <article key={id} className='portfolio__item'>
        <div className="portfolio__item-image">
        <img src={image} alt={title} />
        </div>
        <h3>{title}</h3>
        <div className="portfolio__item-cta">
        <a href={github} className='btn' target='_blank'>Github</a>
        <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
        </article>
          )
         })
        }
      </div>
    </section>
  )
}

export default portfolio