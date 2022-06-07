import React from "react";
import "./Location-modal.scss";

const LocationModal = () => {
  return (
    <section className="modalWrapper">
      <div className="container animate__animated animate__fadeInUp">
        <div className="left"></div>
        <div className="right">
          <div className="contentent">
            <h1>saltsjöbaden</h1>

            <p>
              <b>Gatu-address:</b> Chasacademy-school
            </p>
            <p>
              <b>Toalett:</b> Nej
            </p>
            <p>
              <b>Kiosk:</b> Ja
            </p>
            <p>
              <b>Övrigt:</b> Parkera bilen framför bommen och följ grusvägen ca
              2km, så kommer du till en liten stuga på vänstersida och därefter
              ligger platsen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationModal;
