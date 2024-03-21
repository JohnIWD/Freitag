import React from 'react'
// import logo from './images/freitag.png'
import logo from './images/freitag_lt.png'

const Navbar = () => {
  return (
    <header id="navbar">
      {/* <div><img id="logo" src={Icon} alt="logo" /></div> */}
      <img src={logo} alt="logo" />
      <h1 className="logo">Freitag Construction</h1>
      <input id="nav-toggle" class="nav-toggle" type="checkbox" />
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#samples">Our Work</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav><label className="nav-toggle-label" for="nav-toggle"> </label>
    </header>
  )
}

export default Navbar