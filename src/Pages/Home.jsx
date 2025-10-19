import React from 'react'
import Footer from '../Components/Footer/Footer.jsx'
import CoverBG from '../assets/coverBG.jpg'

function Home() {
  return (
    <div className="w-full">
      <div className="relative h-[100vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-xs"
          style={{ backgroundImage: `url(${CoverBG})` }}
        ></div>
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full p-8 text-white">
          <h1 className="font-bold text-[60px] text-shadow-lg/100">Welcome to "Wong Kok Seng" Wholesale</h1>  
          <h2 className="heading-2">Your one-stop shop for quality wholesale products.</h2>
          <h2 className="heading-2">Contact us today to learn more about our offerings!</h2>
          <h2 className="heading-2">We look forward to serving you!</h2>
          
          <div className="flex space-x-6 mt-8 ">
            <button 
              className="learn-more-button"
              onClick={() => window.location.href='/about'}
            >
              About Us
            </button>
            <button 
              type="button" 
              className="learn-more-button" 
              onClick={() => window.location.href='/contact'}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
      
      {/* About Us Section */}
      <div className="relative h-[60vh] py-16 px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-8 text-gray-800">About Us</h1>
          <div className="space-y-6 text-lg text-gray-600">
            <p>Wong Kok Seng Wholesale is a trusted supplier of fresh produce and grocery items in Malaysia, dedicated to providing high-quality products at competitive prices for local businesses.</p>
            <p>Established in 2005, our company is a small local supplier and has grown into a reliable wholesale distributor known for consistency and customer satisfaction.</p>
            <p>Our mission is to deliver fresh, affordable, and dependable wholesale products to become the most trusted wholesale partner in Malaysia.</p>
            <p>We take pride in offering a range of vegetables sourced from reputable farms and suppliers.</p>
            <p>With a focus on quality, punctual delivery, and long-term partnerships, Wong Kok Seng Wholesale strives to be the supplier businesses can always rely on.</p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}


export default Home


