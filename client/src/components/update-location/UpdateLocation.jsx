import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import locationService from "../../services/userLocationService";
import "./Update-location.scss";
const UpdateLocation = ({ location, locationsArray, setUserLocation, i }) => {
  //  const filterLocationArray = locationsArray.filter((value) => value._id !== location._id)
  // console.log(location);
  // console.log(locationsArray);

  const [selected, setSelected] = useState(null)

  const toggle = (i) => {
    if (selected === i) {
        return setSelected(null)
    }

    setSelected(i)

  }

  return (
          <>
          <div className='item'>
            <div className='title' onClick={() => toggle(i)}>
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
                locationService.deleteLocation(location._id);
                const filterArray = locationsArray.filter(
                  (value) => value._id !== location._id
                );
                setUserLocation(filterArray);
              }}
            >
              Radera plats
            </button>

              </div>
            </div>
          </div>

    {/* <div className="accordion accordion-flush" id="accordionFlushExample">
      <div className="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
        <h2 className="accordion-header mb-0" id="flush-headingTwo">
          <button
            className="accordion-button
              collapsed
              relative
              flex
              items-center
              w-full
              py-4
              px-5
              text-base text-gray-800 text-left
              bg-white
              border-0
              rounded-none
              transition
              focus:outline-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseTwo"
            aria-expanded="false"
            aria-controls="flush-collapseTwo"
            // aria-controls="flush-collapseTwo"
          >
            <i className="icon--size icon--space2 fas fa-swimmer"></i>
            {location.title}
          </button>
        </h2>
        <div
          id="flush-collapseTwo"
          className="accordion-collapse border-0 collapse"
          aria-labelledby="flush-headingTwo"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body py-4 px-5">
            
            <Link
              to="/update-location"
              state={{ from: location }}
              className="button-31"
            >
              {" "}
              Ändra
            </Link>
            <NavLink to={`/location/${location._id}`} className="button-31">
              {" "}
              Se plats
            </NavLink>
            <button
              className="bg-red-400 text-white px-2 py-1"
              onClick={() => {
                locationService.deleteLocation(location._id);
                const filterArray = locationsArray.filter(
                  (value) => value._id !== location._id
                );
                setUserLocation(filterArray);
              }}
            >
              Radera plats
            </button>
            {console.log(location._id)}
          </div>
        </div>
      </div>
    </div> */}
    </>
  );
};

export default UpdateLocation;