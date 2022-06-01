import React from 'react'
import './Location-modal.scss'; 



const LocationModal = () => {
  return (
<div className="pageWrapper">

	{/* Component here */}

    <section>
        <div class="container animate__animated animate__fadeInUp">
            <div class="left"></div>
            <div class="right">
               <div class="contentent">
                   <h1>saltsjöbaden</h1>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                   <p><b>Gatu-address:</b> Chasacademy-school</p>
                   <p><b>Toalett:</b> Nej</p>
                   <p><b>Kiosk</b> Ja</p>
                   <p><b>Övrigt:</b> Parkera bilen framför bommen och följ grusvägen ca 2km, så kommer du till en liten stuga på vänstersida och därefter ligger platsen.</p>
                   <a href="#" class="btn">Bild</a>
               </div> 
            </div>
        </div>
    </section>

</div>
  )
}

export default LocationModal;
