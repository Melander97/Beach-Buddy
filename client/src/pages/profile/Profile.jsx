import React, { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import "./profile.scss";
import { useUser } from "../../components/context/UserContext";
import UpdateAccount from "../../components/update-account/UpdateAccount";
import UpdateLocation from "../../components/update-location/UpdateLocation";
import UserMenu from "../../components/user-menu/UserMenu";

const Profile = () => {
  const user = useUser();
  console.log(user);
  return (
    <div className="profile">
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
    </div>
  );
};

export default Profile;
