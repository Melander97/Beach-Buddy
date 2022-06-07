import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { contextUser$ } from "../context/UserContext";

import "./navbar.scss";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const user = useUser();

  //kopiera detta 
  useEffect(() => {
    contextUser$.subscribe((data) => {
      console.log(data);
      setIsLoggedIn(data);
    });
  }, []);

  //slut på kompiera 

  useEffect(() => {
    console.log(isLoggedIn);
  }, [isLoggedIn]);

  const handleToggle = () => {
    setIsNavOpen((previsNavOpen) => !previsNavOpen);
  };

  const logoutToggle = () => {
    setIsNavOpen((previsNavOpen) => !previsNavOpen);
    window.localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <nav className="nav">
      <div className="navbar">
        <Link to="/">
          <img
            src={require("../../assets/bb-logo.png")}
            alt=""
            className="logo"
          />
        </Link>

        <div className="hamburger" onClick={handleToggle}>
          <span
            className={`hamburger__lines ${isNavOpen ? "open" : ""}`}
          ></span>
        </div>
      </div>

      <div className={`dropdown ${isNavOpen ? "open" : ""}`}>
        <div className="link-wrapper">
          <NavLink to="/" className="link-wrapper__link" onClick={handleToggle}>
            Startsida
          </NavLink>

         

          {isLoggedIn === null || isLoggedIn.isLoggedIn === false ? (
            <>
              <NavLink
                to="register"
                className="link-wrapper__link"
                onClick={handleToggle}
              >
                Bli medlem
              </NavLink>

              <NavLink
                to="login"
                className="link-wrapper__link"
                onClick={handleToggle}
              >
                Logga in
              </NavLink>

           
            </>
          ) : (
            <>
              <NavLink
                to="profile"
                className="link-wrapper__link"
                onClick={handleToggle}
              >
                Profil
              </NavLink>

              {/* log out */}
              <NavLink
                to="login"
                className="link-wrapper__link"
                onClick={logoutToggle}
              >
                Logga ut
              </NavLink>
            </>
          )}

              <NavLink
                to="Help"
                className="link-wrapper__link"
                onClick={handleToggle}
              >
                Om Beach Buddy
              </NavLink>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
