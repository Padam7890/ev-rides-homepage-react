import React from 'react'

import './Navbar.css'
const Navbar = () => {
  return (
    <div className='nav'>
    <div className="nav-logo">EV Rides</div>
    <ul className='nav-menu'>
        <li>Home</li>
        <li>Explore</li>
        <li>About</li>
        <li className='nav-contact'>Contact</li>
    </ul>
    <div className="mobile-menu">
    <i class="ri-menu-line"></i>
    </div>
    </div>
  )
}

export default Navbar