import React, { useState } from "react";
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
    <div className="updateLocation-component w-full h-screen flex items-center justify-center my-3 bg-no-repeat bg-cover">
      <form className="update-location-form bg-white shadow-md border border-gray-200 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 dark:border-gray-700">
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
            className="w-full h-10 p-2 rounded-lg bg-white text-gray-600 font-semibold hover:bg-gray-100 transition mb-2 border"
            required={true}
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
            value={updatedLocation !== null ? updatedLocation.adress : adress}
            className="w-full h-10 p-2 rounded-lg bg-white text-gray-600 font-semibold hover:bg-black-100 transition mb-2 border"
            placeholder="T.ex. Klippan vid vattnet"
            required={true}
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
            value={
              updatedLocation !== null
                ? updatedLocation.description
                : directions
            }
            className="w-full h-10 p-2 rounded-lg bg-white text-gray-600 font-semibold hover:bg-black-100 transition mb-2 border"
            placeholder="Ta höger..."
            required={true}
          />
        </div>
        {!isUpdated ? (
          <button
            className="update-btn hover:bg-red-dark w-40 h-10 rounded-lg bg-gray-800 text-gray-200 uppercase font-semibold hover:bg-gray-900 transition mb-0 mt-4"
            onClick={(e) => {
              upDateLocation(e);
            }}
            disabled={isUpdated}
          >
            Ändra plats
          </button>
        ) : (
          <Link className="back-link" to="/profile">
            <button className="hover:bg-red-dark w-40 h-10 rounded-lg bg-green-800 text-gray-200 uppercase font-semibold hover:bg-gray-900 transition mb-0 mt-4">
              Till profil
            </button>
          </Link>
        )}
      </form>
    </div>
  );
};

export default UpdateLocationModal;
