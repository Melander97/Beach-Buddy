import React from "react";
import "./Location-modal.scss";
import { Link } from "react-router-dom";

const LocationModal = ({ beach }) => {
  return (
    <section className="modalWrapper">
      <div className="max-w-40 container animate__animated animate__fadeInUp p-4">
        <div className=" rounded-xl shadow-cla-blue bg-white overflow-hidden">
          <img
            className="max-h-96 w-full object-cover object-center scale-120 transition-all duration-400"
            src="https://www.mullsjo.se/images/18.737d400e171ac5296c85bb31/1589789558447/hopptornet-sol.jpg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="blog"
          />
          {beach && (
            <div className="p-5">
              <h1>{beach.locationName || beach.title}</h1>
              <div className="contentent flex">
                <div className="flex-1 md:w-1/3">
                  <p>
                    <b>Plats:</b> {beach.locationName || beach.adress}
                  </p>
                  <p>
                    <b>Info:</b> {beach.euMotive || beach.description}
                  </p>
                  <p>
                    <b>Kontakt:</b> {beach.contactMail}
                  </p>
                  <p className="link-wrapper">
                    <b>Hemsida:</b>{" "}
                    <a
                      href={`${beach.contactUrl}`}
                      target="blank_"
                      className="website"
                    >
                      {beach.contactUrl}
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-center flex-wrap">
                <Link to="/">
                  <button className="bg-gradient-to-r from-orange-300 to-amber-400 text-black hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">
                    Tillbaka
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LocationModal;
