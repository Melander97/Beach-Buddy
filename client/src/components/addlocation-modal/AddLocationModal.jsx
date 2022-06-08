import React, { useEffect, useState } from "react";
import "./AddLocation-modal.scss";

const AddLocationModal = () => {
  const [title, setTitle] = useState("");
  const [adress, setAdress] = useState("");
  const [directions, setDirection] = useState("");

  return ( 
    <div className="addLocation-component w-full h-screen flex items-center justify-center my-3 bg-no-repeat bg-cover">
      {/* <div className="w-medium bg-white rounded shadow-lg p-8 m-4"> */}
      <form className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 dark:border-gray-700   ">
        <div>

        <h3
            htmlFor="title"
            className="text-lg font-bold text-white-900 block mb-2 text-white-300 py-1 text-center"
          >
            Lägg till en ny plats
          </h3>

          <label
            htmlFor="title"
            className="text-sm font-medium text-white-900 block mb-2 dark:text-black-300 py-1"
          >
            Namn
          </label>
          <input
            type="title"
            name="title"
            id="title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className="w-full h-10 rounded-lg bg-white text-gray-600  font-semibold hover:bg-gray-100 transition mb-4 p-2 border"
            placeholder="Namn"
            required=""
          />
        </div>

        <div>

          
          <label
            htmlFor="title"
            className="text-sm font-medium text-gray-900 block mb-2 dark:text-black-300 py-1"
          >
            Plats
          </label>
          <input
            type="adress"
            name="adress"
            id="adress"
            onChange={(e) => setAdress(e.target.value)}
            value={adress}
            className="w-full h-10 rounded-lg bg-white text-gray-600 font-semibold hover:bg-black-100 transition mb-4  p-2 border"
            placeholder="T.ex. Klippan vid vattnet"
            required=""
          />
        </div>

        <div>
          <label
            htmlFor="title"
            className="text-sm font-medium text-black-900 block mb-2 dark:text-black-300 py-1"
          >
            Vägbeskrivning
          </label>
          <input
            type="direction"
            name="direction"
            id="direction"
            onChange={(e) => setDirection(e.target.value)}
            value={directions}
            className="w-full h-10 rounded-lg bg-white text-gray-600  font-semibold hover:bg-black-100 transition mb-4 p-2 border"
            placeholder="Ta höger..."
            required=""
          />
        </div>
        <div>
              <button 
              type="submit"
              className="bg-gradient-to-r from-orange-300 to-amber-400 text-black hover:scale-105 drop-shadow-md  shadow-cla-blue py-1 rounded-lg mb-0 mt-4 p-10">Lägg till plats</button>
      
      </div>
      </form>
      {/* </div> */}
    </div>
  );
};

export default AddLocationModal;
