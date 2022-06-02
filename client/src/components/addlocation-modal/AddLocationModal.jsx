import React, { useEffect, useState } from "react";
import { useUser } from "../context/UserContext";
import locationService from "../../services/userLocationService";
import "./AddLocation-modal.scss";

const AddLocationModal = ({ coords }) => {
  const [title, setTitle] = useState("");
  const [adress, setAdress] = useState("");
  const [description, setDescription] = useState("");
  // const [coords, setCoords] = useState(coords);
  const user = useUser();
  console.log(coords[0]);

  const locationData = {
    userId: user.user.id,
    title: title,
    adress: adress,
    description: description,
    coordinates: [coords[0].lat, coords[0].lng],
  };

  const submitHandle = (e) => {
    e.preventDefault();
    console.log(locationData);
    locationService.addLocation(locationData);
  };

  return (
    <div className="addLocation-component w-full h-screen flex items-center justify-center my-3">
      {/* <div className="w-medium bg-white rounded shadow-lg p-8 m-4"> */}
      <form className=" addLocation bg-[#EDC891] w-80 h-auto rounded-lg pt-8 pb-8 px-6 flex flex-col items-center shadow-xl mb-4 md:flex md:flex-wrap md:justify-between">
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
            Beskrivning
          </label>
          <input
            type="direction"
            name="direction"
            id="direction"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            className="w-full h-10 rounded-lg bg-white text-gray-600  font-semibold hover:bg-black-100 transition mb-4 p-2"
            placeholder="Ta höger..."
            required=""
          />
        </div>
        <button
          type="submit"
          onClick={(e) => {
            submitHandle(e);
          }}
          className="hover:bg-red-dark w-40 h-10 rounded-lg bg-gray-800 text-gray-200 uppercase font-semibold hover:bg-gray-900 transition mb-0 mt-4 p-2"
        >
          Lägg till plats
        </button>
      </form>
      {/* </div> */}
    </div>
  );
};

export default AddLocationModal;
