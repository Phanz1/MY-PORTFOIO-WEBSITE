import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/phanzz.png'
import HeaderSocials from './HeaderSocials'

const header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Nbaron Phanuel Jekeko</h1>
        <h5 className='text-light'>Frontend Develper</h5>
        <CTA />
        <HeaderSocials />

        <div className='me'>
          <img src={ME} alt='pic' />
        </div>

        <a href='#contact' className='scroll__down'>
          Scroll Down
        </a>
      </div>
    </header>
  )
}

export default header
