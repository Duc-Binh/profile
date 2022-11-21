import React from 'react'

const ScrollDown = () => {
  return (
    <div className='home__scroll'>
        <a href="#about" className='home__scroll-button button--flex'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
                viewBox="0 0 24 24" fill="none" stroke="#000000" 
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                <line x1="12" y1="18" x2="12.01" y2="18"></line>
            </svg>
            <span className="home__scroll-name">Scroll Down</span>
            <i class="uil uil-arrow-down home__scroll-arrow"></i>
        </a>
    </div>
  )
}

export default ScrollDown