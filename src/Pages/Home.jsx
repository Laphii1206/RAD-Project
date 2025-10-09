import React from 'react'
import Footer from '../Components/Footer/Footer.jsx'
import heroBg from '../assets/cabbage.jpg'

function Home() {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat min-h-screen flex flex-col items-center justify-center text-white p-8"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <br></br>
      <h1>Welcome to "name" Wholesale</h1>
      <h2>Your one-stop shop for quality wholesale products.</h2>
      <h2>Contact us today to learn more about our offerings!</h2>
      <h2>We look forward to serving you!</h2>
        <button type="button" className="learn-more-button" onClick={() => window.location.href='/about'}>Learn More</button>
    </div>
  )
}

export default Home
