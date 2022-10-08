import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { FaFlickr } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href='https://likedin.com' target='_blank'>
        <BsLinkedin />
      </a>
      <a href='https://github.com' target='_blank'>
        <BsGithub />
      </a>
      <a href='https://flickr.com' target='_blank'>
        <FaFlickr />
      </a>
    </div>
  )
}

export default HeaderSocials
