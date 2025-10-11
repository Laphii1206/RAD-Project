import React from 'react'
import Footer from '../Components/Footer/Footer.jsx'

function Contact() {
  return (
    <div className="form-basin mt-10 px-20 pb-20">
      <form action="" method="POST">
        <label for="name">Name*</label>
        <input type="text" id="name" name="name" required placeholder="Your Name" />
        <label for="email">Email*</label>
    <input type="email" id="email" name="email" required placeholder="Your Email" />
    <label for="message">Message*</label>
    <textarea id="message" name="message" required placeholder="Your Message"></textarea>
    <button type="submit">SEND</button>
  </form>
          <Footer/>

    </div>
  )
}

export default Contact
