import { useState } from 'react';
import React from "react";
import userLocationService from "../../services/userLocationService"
import { NavLink } from "react-router-dom";
import "./Update-location.scss";
 


const UpdateLocation = ({ location, locationsArray, setUserLocation }) => {


  //  const filterLocationArray = locationsArray.filter((value) => value._id !== location._id)


  console.log(locationsArray);

  function AccordionLocation({_id}) {
    const [selected, setSelected] = useState(null)
  
    /* const [data, setData] = useState()
 */
    const toggle = (_id) => {
      if (selected === _id) {
          return setSelected(null)
      }
  
      setSelected(_id)
  
    }

  return (
    <div className="wrapper">
      <div className="accordion">
        <div className="item">
          <div className="title" onClick={() => toggle(_id)}>
            <h2>{location.title}</h2>
            <span>{selected === IdleDeadline ? "-" : "+"}</span>
          </div>
          <div className={selected === _id ? "content show" : "content"}>

            <div className="accordion-item border-l-0 border-r-0 border-b-0 rounded-none bg-white border border-gray-200">
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
                  <i className="icon--size icon--space2 fas fa-swimmer"></i>{" "}
                  Trosa havsbad
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
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

}

export default UpdateLocation;
