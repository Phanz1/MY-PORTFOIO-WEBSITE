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
    review: 'Without doubt one of the most talented programmers out there.  I always go back to Jekeko when I'm out of my depth and he's never failed to deliver what I ask for.   Smart, trustworthy and professional.   You won't be disappointed..',
  },
  {
    avatar: AVTR2,
  name: 'Pascal Alhamdu',
    review: 'From the start of the project, through to completion, Nbaron supported us and exceeded our expectations in every way. Not only was our experience personal and friendly, his ability to identify and present our key messages in an imaginative and creative way gave us a huge amount of confidence in him. In many ways Warren understood our client's website needs better than we did and he complimented our vision perfectly. He's reliable, professional and easy to work with. I can’t recommend him highly enough and we look forward to continuing our working relationship together.'
  },
   {
    avatar: AVTR3,
  name: 'Pwano Zaki',
    review: 'Very helpful when building my website, I now have my ecommerce store built from scratch.'
  },
   {
    avatar: AVTR4,
  name: 'Aaron Barsisa',
    review: 'Warren is a great help managing a very out of date website. Everything we ask him to do is done quickly and efficiently, we would be lost without him.'
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
