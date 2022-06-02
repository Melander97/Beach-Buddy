<<<<<<< HEAD
import React, { useState, useContext } from "react";
=======
import React, { useState, useContext, useEffect } from "react";
>>>>>>> development
import { Navigate } from "react-router-dom";
import "./profile.scss";
import { useUser } from "../../components/context/UserContext";
import UpdateAccount from "../../components/update-account/UpdateAccount";
import UpdateLocation from "../../components/update-location/UpdateLocation";
import UserMenu from "../../components/user-menu/UserMenu";
<<<<<<< HEAD

const Profile = () => {
=======
import authService from "../../services/authService";
import { userLocations$ } from "../../services/authService";

const Profile = () => {
  const [userLocations, setUserLocation] = useState([]);
>>>>>>> development
  const user = useUser();
  console.log(user);

  useEffect(() => {
    const res = authService.getUser(user.user.id);
    userLocations$.subscribe((data) => {
      // console.log(data.data.location[0].locations);
      setUserLocation(data.data.location[0].locations);
    });
  }, []);

  useEffect(() => {
    console.log(userLocations);
  }, [userLocations]);

  return (
    <div className="profile">
<<<<<<< HEAD
      {/* <img
        className="inline-block h-10 w-10 rounded-full"
        src={require("../../assets/bb-logo.png")}
        alt=""
      /> */}
      <h1>{user.user.name}</h1>
      <div className="profile-inner w-full md:w-3/5 mx-auto p-8">
        <UpdateAccount />
        <div className="shadow-md"></div>
        <br />
        <UpdateLocation />
      </div>
      <UserMenu />
=======
      <img
        className="inline-block h-10 w-10 rounded-full"
        src={require("../../assets/bb-logo.png")}
        alt=""
      />
      <h1>{user.user.name}</h1>
      <div className="profile-inner w-full md:w-3/5 mx-auto p-8">
        <div className="shadow-md">
          <UpdateAccount />

          {userLocations?.map((location, index) => (
            <UpdateLocation key={index} location={location} />
          ))}
        </div>
      </div>
>>>>>>> development
    </div>
  );
};

export default Profile;
