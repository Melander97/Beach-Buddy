import React from "react";
import { Link } from "react-router-dom";

const Help = () => {
  return (
    <section className="text-black body-font bg-blue-900">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4 pr-10">
          <div className="p-4 md:w-1/3">
            <div className="h-full rounded-xl shadow-cla-blue bg-white overflow-hidden ">
              <img
                className="lg:h-48 md:h-36  w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100 max-h-36"
                src="https://media.istockphoto.com/photos/europe-and-north-africa-map-picture-id512810196?s=612x612"
                alt="blog"
              />
              <div className="p-5">
                <h1 className="title-font text-lg font-medium text-black mb-3">
                  Kartan
                </h1>
                <p className="leading-relaxed mb-3">
                  Via kartan kommer du kunna navigera runt och hitta de{" "}
                  <b>hetaste</b> badplatserna nära dig. De olika
                  pin-markeringarna representerar dina egna och andra
                  Beach-buddys sparade badplatser. <br /> Klicka på länken nedan
                  för att komma till vår startsida.
                </p>
                <div className="flex items-center flex-wrap ">
                  <Link to="/" data-testid="linkOne">
                    <button
                      data-testid="back-btn"
                      className="bg-gradient-to-r from-orange-300 to-amber-400 text-black hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg"
                    >
                      Startsida
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="h-full rounded-xl shadow-cla-violate bg-white overflow-hidden">
              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100 max-h-36"
                src="https://media.istockphoto.com/photos/winding-bath-pier-by-a-sand-beach-picture-id870528474?k=20&m=870528474&s=612x612&w=0&h=1AApfXMBb2qHooukuFc35t-aDxK-3-iq1YeG0rW9Sxo="
                alt="blog"
              />
              <div className="p-5">
                <h1 className="title-font text-lg font-medium text-black mb-3">
                  Snabbmeny ikoner
                </h1>
                <p className="leading-relaxed mb-3 p-2">
                  <i className="fa-solid fa-house fa-2xl pr-3"></i>
                  Huset kommer ta dig tillbaka till startsidan.
                </p>
                <p className="mb-2 p-2">
                  <i className="fa-solid fa-map fa-2xl pr-3"></i>
                  Kartan kommer ta dig som är inloggad till en karta där du kan
                  söka och lägga till dina egna favorit stränder.
                </p>

                <p className="mb-2 p-2">
                  <i className=" icon--space fa-solid fa-user fa-2xl pr-3"></i>
                  Användar ikonen kommer att ta dig till din privata profil sida
                  om du är inlggad.
                </p>

                <p className="mb-2 p-2">
                  <i className="fa-solid fa-circle-plus fa-2xl pr-3"></i>
                  Pluset kommer ta dig till <b>Logga in.</b>
                </p>
                <p className="mb-2 p-2">
                  <i className=" icon--space fa-solid fa-user-plus fa-2xl pr-3"></i>
                  Användarikonen med pluset kommer ta dig till{" "}
                  <b>Bli medlem.</b>
                </p>
                <div className="flex items-center flex-wrap "></div>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="h-full rounded-xl shadow-cla-pink bg-white overflow-hidden">
              <img
                className="lg:h-36 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                src="https://cdn.pixabay.com/photo/2014/12/16/22/25/sunset-570881_960_720.jpg"
                alt="blog"
              />
              <div className="p-5">
                <h1 className="title-font text-lg font-medium text-black mb-3">
                  FAQ
                </h1>
                <p className="leading-relaxed mb-3">
                  <b>Varför ska jag ha ett konto på Beach Buddy?</b>
                  När det blir 30 grader i sommar och din lokala badplats är
                  proppfull, så kommer Beach Buddy vara räddaren i nöden, du kan
                  snabbt och enkelt hitta en ny favorit strand.
                  <br />
                  <br />
                  <b>Kostar det något att använda sidan?</b>
                  Beach Buddy är helt gratis att använda.
                  <br />
                  <br />
                  <b>Fungerar sidan på min mobil?</b>
                  <br />
                  Självklart.
                </p>
                <div className="flex items-center flex-wrap "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Help;
