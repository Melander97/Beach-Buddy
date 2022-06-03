import React from "react";
import "./Update-account.scss";
import authService from "../../services/authService";

const UpdateAccount = (userId) => {
  const handleDelete = () => {
    authService.deleteUser(userId.userId);
  };

  return (
    <div className="accordion accordion-flush" id="accordionFlushExample">
      <div className="accordion-item border-t-0 border-l-0 border-r-0 rounded-none bg-gray border border-gray-200">
        <h2 className="accordion-header mb-0" id="flush-headingOne bg-red">
          <button
            className="accordion-button 
              relative
              flex
              items-center
              w-full
              py-4
              px-5
              text-base text-gray-800 text-left
              bg-gray
              border-0
              rounded-none
              transition
              focus:outline-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            aria-expanded="false"
            aria-controls="flush-collapseOne"
          >
            <i className="icon--space2 fa fa-cog" aria-hidden="true"></i>{" "}
            Uppdatera konto
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          className="accordion-collapse border-0 collapse"
          aria-labelledby="flush-headingOne"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body py-4 px-5">
            <input
              type="text"
              className="profile__input block w-full px-3 py-1.5 transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleText0"
              placeholder="Användarnamn"
            />
            <input
              type="text"
              className="profile__input block w-full px-3 py-1.5 transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleText0"
              placeholder="E-mail"
            />
            <input
              type="text"
              className="profile__input block w-full px-3 py-1.5 transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleText0"
              placeholder="Lösenord"
            />
            <button className="button-31"> Uppdatera</button>
            <br></br>
            <button
              onClick={handleDelete}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2"
            >
              Radera konto
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateAccount;
