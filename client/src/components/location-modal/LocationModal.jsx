import React from "react";
import "./Location-modal.scss";

const LocationModal = ({ beach }) => {
  return (
    <section className="modalWrapper">
        {/* <div class="container animate__animated animate__fadeInUp">
            <div class="left"></div>
            <div class="right">

              {beach &&
               <div class="contentent">
                   <h1>{beach.locationName}</h1>
                   <p><b>Plats:</b> {beach.locationName}</p>
                   <p><b>Badinformation:</b> {beach.bathInfo}</p>
                   <p><b>info:</b> {beach.euMotive}</p>
                   <p><b>Kontakt:</b> {beach.contactMail}</p>
                   <p className='link-wrapper'><b>Hemsida:</b> <a href={`${beach.contactUrl}`} target="blank_" className='website'>{beach.contactUrl}</a></p>
               </div> 
              }
            </div> */}
      <div className="container animate__animated animate__fadeInUp">
        <div className="left"></div>
        <div className="right">
          <div className="contentent">
            <h1>saltsjöbaden</h1>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
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

  )
}
/*   );
}; */

export default LocationModal;
