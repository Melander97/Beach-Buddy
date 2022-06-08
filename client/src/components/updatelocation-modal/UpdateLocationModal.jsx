import React, { useEffect, useState } from "react";
import "./UpdateLocationModal.scss";

const UpdateLocationModal = () => {
  const [title, setTitle] = useState("");
  const [adress, setAdress] = useState("");
  const [directions, setDirection] = useState("");

  return (
    <div className="updateLocation-component w-full h-screen flex items-center justify-center my-3 bg-no-repeat bg-cover">
      {/* <div className="w-medium bg-white rounded shadow-lg p-8 m-4"> */}
      <form className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 dark:border-gray-700">
        <h3 className="text-xl font-medium text-gray-900 dark:text-black text-center">
          Ändra plats
        </h3>
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
            className="w-full h-10 p-2 rounded-lg bg-white text-gray-600 font-semibold hover:bg-gray-100 transition mb-2 border"
            placeholder="T.ex Barnsjön"
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
            className="w-full h-10 p-2 rounded-lg bg-white text-gray-600 font-semibold hover:bg-black-100 transition mb-2 border"
            placeholder="T.ex. Klippan vid vattnet"
            required=""
          />
        </div>
        <div>
          <label
            htmlFor="title"
            className="text-sm font-medium text-black-900 block mb-2 dark:text-black-300 py-1"
          >
            Beskrivning
          </label>
          <textarea 
            type="direction"
            name="direction"
            id="direction"
            onChange={(e) => setDirection(e.target.value)}
            value={directions}
            className="w-full h-10 p-2 rounded-lg bg-white text-gray-600 font-semibold hover:bg-black-100 transition mb-2 border"
            placeholder="Beskriv din plats"
            required="" >
            </textarea>
        </div>
        <button className="w-max m-5 bg-gradient-to-r from-orange-300 to-amber-400 text-black hover:scale-105 drop-shadow-md shadow-cla-blue py-2 rounded-lg mb-0 mt-4 p-10">
          Ändra plats
        </button>
      </form>
      {/* </div> */}
    </div>
  );
};

export default UpdateLocationModal;
