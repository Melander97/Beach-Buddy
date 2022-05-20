import React from 'react'
import './navbar.scss';
const Navbar = () => {
  return (
    <nav class="navbar">
            <i className="fas fa-location fa-1xl"></i>
            <img src={require("../../assets/bb-logo.png")} alt="" className="logo" />
            <div className="hamburger">
                <span className="hamburger__lines"></span>
            </div>
    </nav>
  )
}

export default Navbar