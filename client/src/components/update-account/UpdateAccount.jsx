import React, { useState } from "react";
import authService from "../../services/authService";
import "./Update-account.scss";
import { useUser } from "../../components/context/UserContext";

const UpdateAccount = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [updatedUserInfo, setUpdatedUserInfo] = useState({});

  const UpdateAccount = async (e) => {
    // // const user = useUser();
    // console.log(user);
    e.preventDefault();

    const updatedUserInfo = {
      name: name,
      email: email,
      password: password,
    };

    try {
      let response = await authService
        .updateAccountFunction(updatedUserInfo)
        .then.setUpdatedUserInfo(response);
    } catch (err) {
      console.log(err);
    }

    // console.log("LALA" + data);
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
          <form className="accordion-body py-4 px-5" onSubmit={UpdateAccount}>
            {updatedUserInfo && (
              <p className="text-red-400">{updatedUserInfo.message}</p>
            )}

            <input
              type="text"
              className="profile__input block w-full px-3 py-1.5 transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleText0"
              placeholder="Användarnamn"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              className="profile__input block w-full px-3 py-1.5 transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleText0"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              className="profile__input block w-full px-3 py-1.5 transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleText0"
              placeholder="Lösenord"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="button-31"> Uppdatera</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateAccount;
