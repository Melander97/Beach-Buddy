import React, { useState, useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { useUser } from '../../components/context/UserContext'
import "../../styles.css";
import "../../media.css";
import "../../variables.css";
import "../../menu.css";
import "../../account.css";
import "../../helpers/toggle-accordion";
import UpdateAccount from '../../components/update-account/UpdateAccount';
import UpdateLocation from '../../components/update-location/UpdateLocation';
import UserMenu from '../../components/user-menu/UserMenu';


const Profile = () => {
  
  const user = useUser();
  console.log(user);
  return (
    <div className="pageWrapper">
      {/* Profile */}
      <div className="profile">
      <img className="inline-block h-10 w-10 rounded-full" src="user.png" alt="" />
      <h1>{user.user.name}</h1>
      </div>

    {/* Accordion */}
    <div className="w-full md:w-3/5 mx-auto p-8">
      <div className="shadow-md">
        {/* Update account */} 
        <UpdateAccount />
         {/* Location */} 
        <UpdateLocation /> 
      </div>
   </div>
    {/* Footer menu */}  
    <UserMenu />
</div>

  )
}

export default Profile
