import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'
import logo from '../../assets/company-logo.png'

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
       <div className="company-logo">
      <img src={logo} alt="Company Logo" className="logo-image" />
      </div>
      <ul>
        <li>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
        </li>
        <li>
          <Link to="/products" className={location.pathname === '/products' ? 'active' : ''}>Products</Link>
        </li>
        <li>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact-Us</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar