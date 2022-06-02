import React from "react";
import { Link } from "react-router-dom";
import "./User-menu.scss";

const UserMenu = () => {
  return (
    <section className="user__menu">
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
          className="icon--space fa fa-map-marker fa-2xl"
          aria-hidden="true"
        ></i>{" "}
      </Link>
      <Link to="/add-location">
        {" "}
        <i
          className="icon--space fa-solid fa-circle-plus fa-2xl"
          aria-hidden="true"
        ></i>{" "}
      </Link>

      {/* <button > Log Out </button> */}
    </section>
  );
};

export default UserMenu;
