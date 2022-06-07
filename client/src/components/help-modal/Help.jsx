import React from "react";
import { Link } from "react-router-dom";

const Help = () => {
  return (
    <section className="text-black body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/3">
            <div className="h-full rounded-xl shadow-cla-blue bg-white overflow-hidden">
              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                src="https://i.stack.imgur.com/KOICW.png"
                alt="blog"
              />
              <div className="p-5">
                <h1 className="title-font text-lg font-medium text-black mb-3">
                  Kartan
                </h1>
                <p className="leading-relaxed mb-3">
                  Via kartan kommer du kunna navigera runt och hitta de{" "}
                  <b>hetaste</b> badplatserna nära dig. De olika
                  pin-markeringarna representerar våra egna och användarnas
                  sparade badplatser. <br /> Klicka på länken nedan för att
                  komma till vår startsida
                </p>
                <div className="flex items-center flex-wrap ">
                  <Link to="/">
                    <button className="bg-gradient-to-r from-orange-300 to-amber-400 text-black hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">
                      Home
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="h-full rounded-xl shadow-cla-violate bg-white overflow-hidden">
              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                src="https://images.unsplash.com/photo-1624628639856-100bf817fd35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8M2QlMjBpbWFnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
                alt="blog"
              />
              <div className="p-5">
                <h1 className="title-font text-lg font-medium text-black mb-3">
                  Information Footer
                </h1>
                <p className="leading-relaxed mb-3 p-2">
                  <i className="fa-solid fa-house fa-2xl"></i>
                  Huset kommer ta dig tillbaka till startsidan
                  <br />
                  <br />
                  <i className="fa-solid fa-map fa-2xl"></i>
                  Kartan kommer ta dig som inloggad till locations
                  <br />
                  <br />
                  <i className="fa-solid fa-circle-plus fa-2xl"></i>
                  Pluset kommer ta dig till "Add-Location" där du kommer kunna
                  lägga till egna badplatser
                </p>
                <div className="flex items-center flex-wrap "></div>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="h-full rounded-xl shadow-cla-pink bg-white overflow-hidden">
              <img
                className="lg:h-36 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                src="https://images.unsplash.com/photo-1631700611307-37dbcb89ef7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60"
                alt="blog"
              />
              <div className="p-5">
                <h1 className="title-font text-lg font-medium text-black mb-3">
                  FAQ
                </h1>
                <p className="leading-relaxed mb-3">
                  <b>Varför ska jag ha ett konto på Beach Buddy?</b>
                  När det blir 30 grader i sommar och din lokala badplats är
                  proppfull, så kommer Beach Buddy vara räddaren i nöden.
                  <br />
                  <br />
                  <b>Kostar det något att använda sidan?</b>
                  Beach Buddy är helt gratis att använda.
                  <br />
                  <br />
                  <b>Fungerar sidan på min mobil?</b>
                  <br />
                  Svar ja.
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
