import  { useState } from 'react';
import "./Navbar.css";
import logo from '../../assets/logo.png';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="container">
      <img src={logo} alt="webpagetrading" className="logo"/>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
        <button className="close-btn" onClick={toggleMenu}>
          &times;
        </button>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#service">Service</a></li>
          <li><a href="#offer">Offer</a></li>
          <li><button className="btn">About Us</button></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
