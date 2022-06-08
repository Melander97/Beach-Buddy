import React from "react";
import "./Location-modal.scss";
import { Link } from "react-router-dom";

const LocationModal = () => {
  return (
    <section className="modalWrapper">
      {/* <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star"></span>
        <span className="fa fa-star"></span> */}

      <div className="max-w-40 container animate__animated animate__fadeInUp p-4">
        <div className=" rounded-xl shadow-cla-blue bg-white overflow-hidden">
          <img
            className="max-h-96 w-full object-cover object-center scale-120 transition-all duration-400"
            src="https://www.mullsjo.se/images/18.737d400e171ac5296c85bb31/1589789558447/hopptornet-sol.jpg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="blog"
          />
          <div className="p-5">
            <h1>Saltsjöbaden</h1>
            <div className="contentent flex">
              <div className="flex-1 md:w-1/3">
                <p>
                  <b>Plats:</b> Chasacademy-school
                </p>
                <p>
                  <b>Info:</b> Nej
                </p>
                <p>
                  <b>Kontakt:</b> Nej
                </p>
                <p>
                  <b>Hemsida:</b> Nej
                </p>
              </div>
              <p div className="flex-1 md:w-1/2">
                <b>Hitta hit:</b> Parkera bilen framför bommen och följ
                grusvägen ca 2km, så kommer du till en liten stuga på
                vänstersida och därefter ligger platsen.
              </p>
            </div>
            <div className="flex items-center flex-wrap">
              <Link to="/">
                <button className="bg-gradient-to-r from-orange-300 to-amber-400 text-black hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">
                  Tillbaka
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationModal;
