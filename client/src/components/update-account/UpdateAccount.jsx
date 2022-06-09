import React, { useState } from "react";
import authService from "../../services/authService";
import { useUser } from "../context/UserContext";
import "./Update-account.scss";

const UpdateAccount = ({ userId }) => {
  const user = useUser();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isUpdated, setIsUpdated] = useState(false);

  const UpdateAccount = async (e) => {
    e.preventDefault();
    const updatedUserInfo = {
      name: name,
      email: email,
    };
    console.log(updatedUserInfo);

    const res = await authService
      .updateAccountFunction(updatedUserInfo, user.user.id)
      .then((data) => {
        console.log(data);
        if (data.success) {
          setMessage("Namn/email är nu uppdaterat");
          setIsUpdated(true);
        }
      });
  };

  const handleDelete = async () => {
    await authService.deleteUser(userId.userId).then(() => {
      localStorage.removeItem("user");
      window.location.reload();
    });
  };

  return (
    <div className="accordion accordion-flush" id="accordionFlushExample">
      <div className="accordion-item">
        <h2 className="accordion-header mb-0" id="flush-headingOne">
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
            <i className="fa fa-cog" aria-hidden="true"></i>{" "}
            <h2>Uppdatera konto</h2>
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          className="accordion-collapse border-0 collapse"
          aria-labelledby="flush-headingOne"
          data-bs-parent="#accordionFlushExample"
        >
          <form className="accordion-body py-4 px-5" onSubmit={UpdateAccount}>
            {isUpdated && (
              <p className={isUpdated ? "text-blue-400" : "text-red-400"}>
                {message}
              </p>
            )}

            <input
              type="text"
              className="profile__input block w-full px-3 py-1.5 transition ease-in-out text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleText0"
              placeholder="Användarnamn"
              value={isUpdated ? "" : name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              className="profile__input block w-full px-3 py-1.5 transition ease-in-out text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleText0"
              placeholder="E-mail"
              value={isUpdated ? "" : email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="button-31"
              disabled={name === "" && email === "" ? true : false}
            >
              {" "}
              Uppdatera
            </button>
            <button onClick={handleDelete} className="button-31">
              Radera konto
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateAccount;
