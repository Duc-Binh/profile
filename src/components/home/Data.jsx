import React from 'react'

const Data = () => {
  return (
    <div className='home__data'>
        <h1 className='home__title'>Duc Binh
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" 
          stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
        </svg>
        </h1>

        <h3 className='home__subtitle'>Visual Designer</h3>

        <p className="home__description">
            I'm creative designer based in Ha Noi, and I'm very passionate and dedicated to my work.
        </p>

        <a href="#contact" className="button button--flex">
            Say Hello
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="30px" height="30px">
              <path fill="#bae0bd" d="M20,38.5C9.799,38.5,1.5,30.201,1.5,20S9.799,1.5,20,1.5S38.5,9.799,38.5,20S30.201,38.5,20,38.5z"/>
              <path fill="#5e9c76" d="M20,2c9.925,0,18,8.075,18,18s-8.075,18-18,18S2,29.925,2,20S10.075,2,20,2 
                          M20,1 C9.507,1,1,9.507,1,20s8.507,19,19,19s19-8.507,19-19S30.493,1,20,1L20,1z"/>
              <path fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="2" d="M11 20L17 26 30 13"/>
            </svg>
        </a>
        
    </div>
  )
}

export default Data