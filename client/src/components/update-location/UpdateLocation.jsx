import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import locationService from "../../services/userLocationService";
import "./Update-location.scss";
const UpdateLocation = ({ location, locationsArray, setUserLocation, i }) => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <>
      <div className="item">
        <div className="title" onClick={() => toggle(i)}>
          <i class="fa-solid fa-person-swimming fa-1xl" aria-hidden="true"></i>
          <h2>{location.title}</h2>
          <span>{selected === i ? "-" : "+"}</span>
        </div>
        <div className={selected === i ? "content show" : "content"}>
          <div className="content__inner">
            <Link
              to="/update-location"
              state={{ from: location }}
              className="content__btn"
            >
              {" "}
              Ändra
            </Link>

            <NavLink to={`/location/${location._id}`} className="update__btn">
              {" "}
              Se plats
            </NavLink>

            <button
              className="update__btn"
              onClick={() => {
                const res = locationService
                  .deleteLocation(location._id)
                  .then((data) => {
                    if (data.data.success) {
                      const filterArray = locationsArray.filter(
                        (value) => value._id !== location._id
                      );
                      setUserLocation(filterArray);
                    }
                  });
              }}
            >
              Radera plats
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateLocation;
