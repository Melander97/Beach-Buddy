import React from "react";
import "./Location-modal.scss";

const LocationModal = ({ beach }) => {
  return (
    <section className="modalWrapper">
      <div className="container animate__animated animate__fadeInUp">
        <div className="left"></div>
        <div className="right">
          {beach && (
            <div class="contentent">
              <h1>{beach.locationName}</h1>
              <p>
                <b>Plats:</b> {beach.locationName}
              </p>
              <p>
                <b>Badinformation:</b> {beach.bathInfo}
              </p>
              <p>
                <b>info:</b> {beach.euMotive}
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
          )}
        </div>
      </div>
    </section>
  );
};

export default LocationModal;
