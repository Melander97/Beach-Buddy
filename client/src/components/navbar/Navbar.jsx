import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { user$ } from '../../services/authService';

import './navbar.scss';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  // const [hideRegister, sethideRegister] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState();

  useEffect(() => {
     
      const data = localStorage.getItem("user");
      //here user has time to get undefined 
      console.log("user", user)
      let parsedData = JSON.parse(data);
      // if (data && data.includes("true")) 
      if((user === undefined || user.isLoggedIn === false)&& user$._value === undefined) 
      {
        // setIsLoggedIn(true);
        // console.log("JAA DET FUNKAR?");
      }

      if(user !== undefined){

        localStorage.setItem('user', JSON.stringify(user));

      }

    return () => {
      setIsLoggedIn(true);
      console.log("logged in");

    };
  }, []);

  const handleToggle = () => {
    setIsNavOpen((previsNavOpen) => !previsNavOpen);
  };

  return (
    <nav className="nav">
      <div className="navbar">
        <i className="fas fa-location fa-2xl"></i>
        <img
          src={require("../../assets/bb-logo.png")}
          alt=""
          className="logo"
        />

        <div className="hamburger" onClick={handleToggle}>
          <span
            className={`hamburger__lines ${isNavOpen ? "open" : ""}`}
          ></span>
        </div>
      </div>

      <div className={`dropdown ${isNavOpen ? "open" : ""}`}>
        <div className="link-wrapper">
          <NavLink to="/" className="link-wrapper__link" onClick={handleToggle}>
            Home
          </NavLink>

          {isLoggedIn && (
            <>
              <NavLink
                to="register"
                className="link-wrapper__link"
                onClick={handleToggle}
              >
                Become a member
              </NavLink>

              <NavLink
                to="login"
                className="link-wrapper__link"
                onClick={handleToggle}
              >
                Login
              </NavLink>
            </>
          )}

          <NavLink
            to="profile"
            className="link-wrapper__link"
            onClick={handleToggle}
          >
            Profile
          </NavLink>

          {isLoggedIn && (
            <NavLink
              to="logout"
              className="link-wrapper__link"
              onClick={handleToggle}
            >
              Logout
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
