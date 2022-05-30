import React from "react";
import "./My-location.scss";

const MyLocations = () => {
  return (
    /*     <div class="Map-component w-full h-5/6 flex items-center justify-center my-3"> */
    <div class="info-window w-full md:w-1/3 mx-auto">
      <div class="flex w-full flex-col p-5 rounded-lg shadow">
        {/* bg-[#EDC891] */}
        <div class="flex flex-col items-center text-center">
          <h2 class="mt-2 font-semibold text-gray-800">Namn på platsen</h2>
        </div>
        <div class="btn-wrapper flex items-center justify-center mt-3">
          <button className="btn mx-1 items-center">View</button>
          <button className="btn mx-1 items-center">Remove</button>
        </div>
      </div>
    </div>
    /*     </div> */
  );
};

export default MyLocations;
