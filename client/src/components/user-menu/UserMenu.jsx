import React from "react";
import { Link } from "react-router-dom";
import "./User-menu.scss";

const UserMenu = () => {
  return (
    <section className="user__menu">

      <Link to="">
        <i className=" icon--space fa-solid fa-house fa-2xl"></i>
      </Link>

      <Link to="/profile">
        {" "}
        <i
          className="icon--space fa-solid fa-user fa-2xl"
          aria-hidden="true"
        ></i>{" "}
      </Link>

     

      <Link to="/locations">
        {" "}
        <i
          className="icon--space fa-solid fa-map fa-2xl"
          aria-hidden="true"
        ></i>{" "}
      </Link>

      {/* <button > Log Out </button> */}
    </section>
  );
};

export default UserMenu;
