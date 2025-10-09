import React from 'react'
import Footer from '../Components/Footer/Footer.jsx'
import CoverBG from '../assets/coverBG.jpg'

function Home() {
  return (
    <div className="relative h-[70vh] h-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-xs"
        style={{ backgroundImage: `url(${CoverBG})` }}
      ></div>
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8 text-white">
        <br></br>
        <h1 className="font-bold text-[60px] text-shadow-lg/100">Welcome to "Wong Kok Seng" Wholesale</h1>  
        <h2 className="heading-2">Your one-stop shop for quality wholesale products.</h2>
        <h2 className="heading-2">Contact us today to learn more about our offerings!</h2>
        <h2 className="heading-2">We look forward to serving you!</h2>
        <button 
          type="button" 
          className="learn-more-button" 
          onClick={() => window.location.href='/about'}
        >
          Learn More
        </button>
      </div>
      
    </div>
  )
}


export default Home


