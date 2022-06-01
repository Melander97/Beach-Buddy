import React from "react";
import "./Menu.scss";
import "../update-account/Update-account.scss";

const Menu = () => {
  return (
    <section className="footer-public">
      <a href="/register">
        {" "}
        <i class=" icon--space fa-solid fa-user-plus fa-2xl"></i>{" "}
      </a>
      <i class="icon--space fa-solid fa-angle-up fa-2xl"></i>
      <a href="/add-location">
        {" "}
        <i
          class="icon--space fa-solid fa-circle-plus fa-2xl"
          aria-hidden="true"
        ></i>
      </a>
    </section>
  );
};

export default Menu;
