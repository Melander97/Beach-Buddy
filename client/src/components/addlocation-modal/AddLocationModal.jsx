

import React, { useEffect, useState } from "react";
import "./AddLocation-modal.scss";

const AddLocationModal = () => {
  const [title, setTitle] = useState("");
  const [adress, setAdress] = useState("");
  const [directions, setDirection] = useState("");

  return (

    <div className="addLocation-component w-full h-screen flex items-center justify-center my-3">
      {/* <div className="w-medium bg-white rounded shadow-lg p-8 m-4"> */}
      <form className="bg-[#EDC891] w-80 h-auto rounded-lg pt-8 pb-8 px-6 flex flex-col items-center shadow-xl mb-4 md:flex md:flex-wrap md:justify-between">
        <div>
          <label
            htmlFor="title"
            className="text-sm font-medium text-gray-900 block mb-2 dark:text-black-300 py-1"
          >
            Namn
          </label>
          <input
            type="title"
            name="title"
            id="title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className="w-full h-12 rounded-lg bg-white text-gray-600 uppercase font-semibold hover:bg-gray-100 transition mb-4 "
            // placeholder="Namn"
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
            className="w-full h-12 rounded-lg bg-white text-gray-600 uppercase font-semibold hover:bg-black-100 transition mb-4"
            // placeholder="...."
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
            className="w-full h-12 rounded-lg bg-white text-gray-600 uppercase font-semibold hover:bg-black-100 transition mb-4"
            // placeholder="...."
            required=""
          />
        </div>

              <button className="hover:bg-red-dark w-40 h-12 rounded-lg bg-gray-800 text-gray-200 uppercase font-semibold hover:bg-gray-900 transition mb-0 mt-4">Lägg till plats</button>

      </form>
      {/* </div> */}
    </div>
  );
};

export default AddLocationModal;
