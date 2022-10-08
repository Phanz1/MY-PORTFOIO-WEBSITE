import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/av1.jpg'
import AVTR2 from '../../assets/av2.jpg'
import AVTR3 from '../../assets/av3.jpg'
import AVTR4 from '../../assets/av4.jpg'

// import Swiper core and required modules
import {Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
  avatar: AVTR1,
  name: 'Joy Bathram',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis eos facilis at? Eaque quia harum deserunt iure voluptas similique inventore quae magnam? Deserunt, placeat nisi.'
  },
  {
    avatar: AVTR2,
  name: 'Niddy Jekeko',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis eos facilis at? Eaque quia harum deserunt iure voluptas similique inventore quae magnam? Deserunt, placeat nisi.'
  },
   {
    avatar: AVTR3,
  name: 'Sadam Husseini',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis eos facilis at? Eaque quia harum deserunt iure voluptas similique inventore quae magnam? Deserunt, placeat nisi.'
  },
   {
    avatar: AVTR4,
  name: 'Gal Gadoth',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis eos facilis at? Eaque quia harum deserunt iure voluptas similique inventore quae magnam? Deserunt, placeat nisi.'
  },

]

const testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container" // install Swiper modules
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
      {
        data.map(({avatar,name,review}, index)=>{
          return(
              <SwiperSlide key={index} className='testimonial'>
          <div className="client__avatar">
            <img src={avatar} alt="Avatar One" />
            </div> 
            <h5 className='client__name'>{name}</h5>
            <small className='client__review'>{review}</small>
          
        </SwiperSlide>
          )
        })
      }
      </Swiper>
    </section>
  )
}

export default testimonials 