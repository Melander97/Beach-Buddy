import React, { useState } from 'react'
import {NavLink } from "react-router-dom";
import './navbar.scss';

const Navbar = () => {

  const [isNavOpen, setIsNavOpen] = useState(false)

  const handleToggle = () => {
    setIsNavOpen((previsNavOpen) => !previsNavOpen)
  }
  return (
    <nav className="nav">
      <div className="navbar">
        <i className="fas fa-location fa-2xl"></i>
        <img src={require("../../assets/bb-logo.png")} alt="" className="logo" />
        <div className="hamburger" onClick={handleToggle}>
            <span className={`hamburger__lines ${isNavOpen ? "open" : ''}`}></span>
        </div>

      </div>
        <div className={`dropdown ${isNavOpen ? "open" : ""}`}>
          <div className="link-wrapper">
            <NavLink to="/" className="link-wrapper__link"  onClick={handleToggle}>Home</NavLink>
            <NavLink to="register" className="link-wrapper__link" onClick={handleToggle}>Become a member</NavLink>
            <NavLink to="login" className="link-wrapper__link" onClick={handleToggle}>Login</NavLink>
            <NavLink to="profile" className="link-wrapper__link" onClick={handleToggle}>Profile</NavLink>
          </div>
        </div>
    </nav>
  )
}
export default Navbar;