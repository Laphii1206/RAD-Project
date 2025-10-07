import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const location = useLocation();

  return (
    <nav>
      <ul>
        <li>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
        </li>
        <li>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
        </li>
        <li>
          <Link to="/products" className={location.pathname === '/products' ? 'active' : ''}>Products</Link>
        </li>
        <li>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact-Me</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar