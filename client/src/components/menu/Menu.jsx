import React from "react";
import "./Menu.scss";
import "../update-account/Update-account.scss";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <section className="footer-public">
      <Link to="/register">
        <i className=" icon--space fa-solid fa-user-plus fa-2xl"></i>
      </Link>
      <i className="icon--space fa-solid fa-angle-up fa-2xl"></i>
      <Link to="/add-location">
        <i
          className="icon--space fa-solid fa-circle-plus fa-2xl"
          aria-hidden="true"
        ></i>
      </Link>
    </section>
  );
};

export default Menu;
