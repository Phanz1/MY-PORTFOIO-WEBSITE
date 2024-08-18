import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/port8.jpeg'
import IMG2 from '../../assets/port12.jpeg'
import IMG3 from '../../assets/port9.jpeg'
import IMG4 from '../../assets/port10.jpeg'
import IMG5 from '../../assets/port5.jpg'
import IMG6 from '../../assets/port11.jpeg'




const data =[
  {
    id:1,
    image: IMG1,
    title:'REhub real estate web app built with react and django',
    github:'https://github.com/Phanz1/kohs-real-estate',
    demo: 'https://rehub-real-estate.vercel.app/'
  },
  {
    id:2,
    image: IMG2,
    title:' Hazilan-Football-academy web app',
    github:'https://github.com/Phanz1/Hazilan-Football-academy',
    demo: 'https://hazilan-football-academy.pages.dev/'
  },
  {
    id:3,
    image: IMG3,
    title:'Cutify Web App. Vue.js-based web application designed for service booking ',
    github:'https://github.com/Phanz1/cutify-web-app.git',
    demo: 'https://cutify-web-app-jade.vercel.app/'
  },
  {
    id:4,
    image: IMG4,
    title:'Tasky Web App. task management application  built with django',
    github:'https://github.com/Phanz1/tasky',
  
  },
  {
    id:5,
    image: IMG5,
    title:'C2C Ecommerce website',
    github:'https://github.com',
 
  },
  {
    id:6,
    image: IMG6,
    title:'zig-movie-app. Homepage that list popular movies from the API',
    github:'https://github.com/Phanz1/zig-movie-app',

  },
  
  
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