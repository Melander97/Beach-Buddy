import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import locationService from "../../services/userLocationService";
import { useUser } from "../context/UserContext";
import "./UpdateLocationModal.scss";

const UpdateLocationModal = ({ location }) => {
  const [title, setTitle] = useState(location.title);
  const [adress, setAdress] = useState(location.adress);
  const [directions, setDirection] = useState(location.description);
  const [updatedLocation, setUpdatedLocation] = useState(null);
  const [isUpdated, setIsUpdated] = useState(false);

  const user = useUser();
  const upDateLocation = async (e) => {
    e.preventDefault();
    const formData = {
      id: location._id,
      userId: user.user.id,
      title: title,
      adress: adress,
      directions: directions,
      coordinates: null,
    };

    const res = await locationService.updateLocation(formData).then((data) => {
      return data.data;
    });

    if (res.success) {
      setUpdatedLocation(res.data);
      setIsUpdated(true);
    }
  };

  return (
    <div className="updateLocation-component w-full h-screen flex items-center justify-center my-3">
      {/* <div className="w-medium bg-white rounded shadow-lg p-8 m-4"> */}
      <form className="updateForm bg-[#EDC891] w-80 h-auto rounded-lg pt-8 pb-8 px-6 flex flex-col items-center shadow-xl mb-2 md:flex md:flex-wrap md:justify-between">
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
            value={updatedLocation !== null ? updatedLocation.title : title}
            className="w-full h-10 p-2 rounded-lg bg-white text-gray-600 font-semibold hover:bg-gray-100 transition mb-2 "
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
            className="w-full h-10 p-2 rounded-lg bg-white text-gray-600 font-semibold hover:bg-black-100 transition mb-2"
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
            className="w-full h-10 p-2 rounded-lg bg-white text-gray-600 font-semibold hover:bg-black-100 transition mb-2"
            placeholder="Ta höger..."
            required=""
          />
        </div>
        {!isUpdated ? (
          <button
            className="hover:bg-red-dark w-40 h-10 rounded-lg bg-gray-800 text-gray-200 uppercase font-semibold hover:bg-gray-900 transition mb-0 mt-4"
            onClick={(e) => {
              upDateLocation(e);
            }}
            disabled={isUpdated}
          >
            Ändra plats
          </button>
        ) : (
          <Link to="/profile">
            <button className="hover:bg-red-dark w-40 h-10 rounded-lg bg-green-800 text-gray-200 uppercase font-semibold hover:bg-gray-900 transition mb-0 mt-4">
              Till profil
            </button>
          </Link>
        )}
      </form>
      {/* </div> */}
    </div>
  );
};

export default UpdateLocationModal;
