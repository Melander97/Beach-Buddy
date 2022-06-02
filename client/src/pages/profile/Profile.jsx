import React, { useState, useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import "./profile.scss";
import { useUser } from "../../components/context/UserContext";
import UpdateAccount from "../../components/update-account/UpdateAccount";
import UpdateLocation from "../../components/update-location/UpdateLocation";
import UserMenu from "../../components/user-menu/UserMenu";
import authService from "../../services/authService";
import { userLocations$ } from "../../services/authService";

const Profile = () => {
  const [userLocations, setUserLocation] = useState([]);
  const user = useUser();
  console.log(user);

  useEffect(() => {
    const res = authService.getUser(user.user.id);
    userLocations$.subscribe((data) => {
      if (data) {
        setUserLocation(data.data.user[0].locations);
      }
    });
  }, []);

  useEffect(() => {
    console.log(userLocations);
  }, [userLocations]);

  return (
    <div className="profile">
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
    </div>
  );
};

export default Profile;
