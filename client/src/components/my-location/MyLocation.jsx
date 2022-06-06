import React from "react";
import { Link } from "react-router-dom";
import "./My-location.scss";
import locationService from "../../services/userLocationService";

const MyLocations = ({ selectedLocation, user }) => {

  
  const removeLocation = async (id) => {
    console.log(id);
    // locationService.deleteLocation()
  };
  return (
    <>
      <div class="info-window w-full md:w-1/3 mx-auto">
        {selectedLocation && (
          <div class="flex w-full flex-col p-5 rounded-lg shadow">
            <div class="flex flex-col items-center text-center">
              <h2 class="mt-2 font-semibold text-gray-800">
                {selectedLocation.title}
              </h2>
            </div>
            <div class="btn-wrapper flex items-center justify-center mt-3">
              <Link
                to={`/location/${selectedLocation._id}`}
                className="btn mx-1 items-center"
              >
                Se Plats
              </Link>
              {/* onCLick delete goes here */}
              <button
                className="btn mx-1 items-center"
                disabled={selectedLocation.userId !== user.user.id}
                onClick={removeLocation(selectedLocation._id)}
              >
                Remove
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MyLocations;
