import React from 'react'
import './navbar.scss';
const Navbar = () => {
  return (
    <nav className="navbar">
            <i className="fas fa-location fa-2xl"></i>
            <img src={require("../../assets/bb-logo.png")} alt="" className="logo" />
            <div className="hamburger">
                <span className="hamburger__lines">
                <i className="fa fa-bars fa-2xl" aria-hidden="true"></i>
                </span>
            </div>
    </nav>
  )
}

export default Navbar