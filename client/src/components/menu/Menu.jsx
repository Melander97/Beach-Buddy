import "./Menu.scss";
import "../update-account/Update-account.scss";
import { Link, NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <section className="footer-public">
      <NavLink to="/">
        <i className=" icon--space fa-solid fa-house fa-2xl"></i>
      </NavLink>

      <Link to="/register">
        <i className=" icon--space fa-solid fa-user-plus fa-2xl"></i>
      </Link>

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
