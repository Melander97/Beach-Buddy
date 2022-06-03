import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { contextUser$ } from "../context/UserContext";

import "./navbar.scss";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const user = useUser();

  useEffect(() => {
    contextUser$.subscribe((data) => {
      console.log(data);
      setIsLoggedIn(data);
    });
  }, []);

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
        <i className="fas fa-location fa-2xl"></i>
        <NavLink to="/home">
          <img
            src={require("../../assets/bb-logo.png")}
            alt=""
            className="logo"
          />
        </NavLink>

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

          {isLoggedIn === null || isLoggedIn.isLoggedIn === false ? (
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
          ) : (
            <>
              <NavLink
                to="profile"
                className="link-wrapper__link"
                onClick={handleToggle}
              >
                Profile
              </NavLink>

              {/* log out */}
              <NavLink
                to="login"
                className="link-wrapper__link"
                onClick={logoutToggle}
              >
                Logout
              </NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
