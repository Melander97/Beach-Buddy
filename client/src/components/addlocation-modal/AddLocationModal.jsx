import React, { useEffect, useState } from "react";
import "./AddLocation-modal.scss";

const AddLocationModal = () => {
  const [title, setTitle] = useState("");
  const [adress, setAdress] = useState("");
  const [directions, setDirection] = useState("");

  return ( 
    <div className="addLocation-component w-full h-screen flex items-center justify-center my-3 bg-no-repeat bg-cover">
      {/* <div className="w-medium bg-white rounded shadow-lg p-8 m-4"> */}
      <form className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div>

        <h3
            htmlFor="title"
            className="text-lg font-bold text-gray-900 block mb-2 dark:text-black-300 py-1 text-center"
          >
            Lägg till en ny plats
          </h3>

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
            className="w-full h-10 rounded-lg bg-white text-gray-600  font-semibold hover:bg-gray-100 transition mb-4 p-2"
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
            className="w-full h-10 rounded-lg bg-white text-gray-600 font-semibold hover:bg-black-100 transition mb-4  p-2"
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
            className="w-full h-10 rounded-lg bg-white text-gray-600  font-semibold hover:bg-black-100 transition mb-4 p-2"
            placeholder="Ta höger..."
            required=""
          />
        </div>
              <button 
              type="submit"
              className="hover:bg-red-dark w-40 h-10 rounded-lg bg-gray-800 text-gray-200 uppercase font-semibold hover:bg-gray-900 transition mb-0 mt-4 p-2">Lägg till plats</button>

      </form>
      {/* </div> */}
    </div>
  );
};

export default AddLocationModal;
