import React, { useState } from "react";
import { useUser } from "../context/UserContext";
import locationService from "../../services/userLocationService";
import "./AddLocation-modal.scss";
import { Navigate } from "react-router-dom";

const AddLocationModal = ({ coords }) => {
  const [title, setTitle] = useState("");
  const [adress, setAdress] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const user = useUser();

  const locationData = {
    userId: user.user.id,
    title: title,
    adress: adress,
    description: description,
    coordinates: [coords[0].lat, coords[0].lng],
  };

  const submitHandle = (e) => {
    e.preventDefault();

    if (title === "" || adress === "" || description === "") {
      setMessage("Fyll i alla fälten");
    } else {
      let res = locationService.addLocation(locationData);
      res.then((data) => {
        if (data.success) {
          setIsSuccess(true);
          setMessage("Plats tillagd!");
        } else {
          setIsSuccess(false);
          setMessage("Något gick fel, försök igen.");
        }
      });
    }
  };

  return (
    <div className="addLocation-component w-full h-screen flex items-center justify-center my-3 bg-no-repeat bg-cover">
      <form className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 dark:border-gray-700   ">
        <div>
          <h3
            htmlFor="title"
            className="text-lg font-bold text-white-900 block mb-2 text-white-300 py-1 text-center"
            data-testid="form-header"
          >
            Lägg till en ny plats
          </h3>
          {message && (
            <p style={{ color: isSuccess ? " green" : " red" }}>{message}</p>
          )}
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
            required
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
            required
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
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            className="w-full h-10 rounded-lg bg-white text-gray-600  font-semibold hover:bg-black-100 transition mb-4 p-2 border"
            placeholder="Beskriv din plats"
            required="">
          </textarea>
        </div>
        {isSuccess ? (
          <Navigate to="/locations" />
        ) : (
          <button
            type="submit"
            onClick={(e) => {
              submitHandle(e);
            }}
            className="w-max m-5 bg-gradient-to-r from-orange-300 to-amber-400 text-black hover:scale-105 drop-shadow-md shadow-cla-blue py-2 rounded-lg mb-0 mt-4 p-10"
          >
            Lägg till plats
          </button>
        )}
      </form>
    </div>
  );
};

export default AddLocationModal;
