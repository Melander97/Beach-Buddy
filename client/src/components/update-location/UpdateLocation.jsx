import React from "react";
import "./Update-location.scss";

const UpdateLocation = ({ location }) => {
  console.log(location);
  return (
    <div className="pageWrapper">
      {/* Component here */}

      <div className="tab w-full overflow-hidden border-t">
        <input
          className="absolute opacity-0"
          id="tab-single-two"
          type="radio"
          name="tabs2"
        />
        <label
          className="block p-5 leading-normal cursor-pointer"
          for="tab-single-two"
        >
          <i className="icon--size icon--space2 fas fa-swimmer"></i>{" "}
          {location && location.title}
        </label>
        <div className="tab-content overflow-hidden border-l-2 leading-normal">
          <button className="button-31"> Se plats</button>
          <button className="button-31"> Ta bort</button>
        </div>
      </div>
    </div>
  );
};

export default UpdateLocation;
