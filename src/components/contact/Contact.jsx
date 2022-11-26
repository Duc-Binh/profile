import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import './contact.css'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm
      ('YOUR_SERVICE_ID',
       'YOUR_TEMPLATE_ID',
       form.current,
       'YOUR_PUBLIC_KEY'
      )
    e.target.reset();
  };

  return (
    <section className="contact section" id="contact">
      <h2 className='section__title'>Get in touch</h2>
      <span className='section__subtitle'>Contact Me</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className='contact__title'>Talk to me</h3>

          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>

              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">user@gmail.com</span>

              <a href="mailto:examplemail@gmail.com.com"
                className='contact__button'>
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-whatsapp contact__card-icon"></i>

              <h3 className="contact__card-title">Whatsapp</h3>
              <span className="contact__card-data">034 466 2285</span>

              <a href="http://api.whatsapp.com/send?phone=0344662285&text=Hello, more information!"
                className='contact__button'>
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-messenger contact__card-icon"></i>

              <h3 className="contact__card-title">Messenger</h3>
              <span className="contact__card-data">user.fb123</span>

              <a href="http://m.me/crypticalcoder"
                className='contact__button'>
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className='contact__title'>Write me your project</h3>

          <form ref={form} onSubmit={sendEmail} className="contact__form">
  
            <div className="contact__form-div">
              <label className="contact__form-tag">Name</label>
              <input
                type="text"
                name='name'
                className='contact__form-input'
                placeholder='Insert your name'
              />
            </div>

             <div className="contact__form-div">
              <label className="contact__form-tag">Mail</label>
              <input
                type="email"
                name='email'
                className='contact__form-input'
                placeholder='Insert your email'
              />
            </div>

            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Project</label>
              <textarea
                name="project"
                cols="30"
                rows="10"
                className='contact__form-input'
                placeholder='Write your project'
              ></textarea>
            </div>

            <button className="button button--flex">
              Send Message
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="30px" height="30px">
                <path fill="#bae0bd" d="M20,38.5C9.799,38.5,1.5,30.201,1.5,20S9.799,1.5,20,1.5S38.5,9.799,38.5,20S30.201,38.5,20,38.5z"/>
                <path fill="#5e9c76" d="M20,2c9.925,0,18,8.075,18,18s-8.075,18-18,18S2,29.925,2,20S10.075,2,20,2 
                            M20,1 C9.507,1,1,9.507,1,20s8.507,19,19,19s19-8.507,19-19S30.493,1,20,1L20,1z"/>
                <path fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="2" d="M11 20L17 26 30 13"/>
              </svg>
            </button>
          </form>
        </div>

      </div>
    </section>
  )
}

export default Contact