import React from "react";
import { Link } from "react-router-dom";
import locationService from "../../services/userLocationService";

const UpdateLocation = ({ location, locationsArray, setUserLocation }) => {
  //  const filterLocationArray = locationsArray.filter((value) => value._id !== location._id)
  console.log(location);
  // console.log(locationsArray);
  return (
    <div className="accordion accordion-flush" id="accordionFlushExample">
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
            <button className="button-31"> Se plats</button>
            <Link
              to="/update-location"
              state={{ from: location }}
              className="button-31"
            >
              {" "}
              Ändra
            </Link>
            {/* <button className="update-btn">Ändra</button> */}
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
            {/* {console.log(location._id)} */}
          </div>
        </div>
      </div>

      {/* <div className="accordion-item border-l-0 border-r-0 border-b-0 rounded-none bg-white border border-gray-200">
        <h2 className="accordion-header mb-0" id="flush-headingThree">
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
            data-bs-target="#flush-collapseThree"
            aria-expanded="false"
            aria-controls="flush-collapseThree"
          >
            <i className="icon--size icon--space2 fas fa-swimmer"></i> Trosa
            havsbad
          </button>
        </h2>
        <div
          id="flush-collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingThree"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body py-4 px-5">
            <button className="button-31"> Se plats</button>
            <button className="button-31"> Ta bort</button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default UpdateLocation;
