import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {BsMessenger} from 'react-icons/bs'
import {SiWhatsapp} from 'react-icons/si'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8i5mvwp', 'template_u5g4kbm', form.current, '5wAqLrsmy-tnNZIh_')
    e.target.reset()

      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
        <article className="contact__option">

          <AiOutlineMail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>nbaronjekeko33@gmail.com</h5>
          <a href="mailto:nbaronjekeko33@gmail.com" target="_blank">Send a Message</a>
        </article>
         <article className="contact__option">

          <BsMessenger className='contact__option-icon'/>
          <h4>Messanger</h4>
          <h5>Phanz Nbaron Jekeko</h5>
          <a href="https://m.me/phanz.jekeko" target="_blank">Send a Message</a>
        </article>
         <article className="contact__option">

          <SiWhatsapp className='contact__option-icon'/>
          <h4>WhatsApp</h4>
          <h5>+2348143964803 </h5>
          <a href="https://api.whatsapp.com/send?phone=+23470882905" target="_blank">Send a Message</a>
        </article>
        </div>

        {/* END OF CONTACT OPTION */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Email' required />
          <textarea name="message" id="" rows="7" placeholder='Your Message'></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
