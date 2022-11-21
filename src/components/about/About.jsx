import React from 'react'
import "./about.css"
import AboutImg from "../../assets/about.jpg"
import CV from "../../assets/DucBinhCv.pdf"
import Info from './Info'

const About = () => {
  return (
    <section className='about section' id='about'>
        <h2 className='section__title'>About Me</h2>
        <span className='section__subtitle'>My introduction</span>

        <div className="about__container container grid">
            <img src={AboutImg} alt="" className='about__img'/>

            <div className="about__data">
                <Info />

                <p className="about__description">
                    Fontend developer, I create web pages with UI / UX user interface, 
                    I have years of experience and many clients are happy with the projects carried out.
                </p>

                <a download="" href={CV} className="button button--flex">
                    Download CV
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" 
                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
                        <path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
                        <path d="M14 3v5h5M16 13H8M16 17H8M10 9H8"/>
                    </svg>
                </a>
            </div>
        </div>

    </section>
  )
}

export default About