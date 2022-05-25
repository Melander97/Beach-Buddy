import React, { useState, useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { useUser } from '../components/context/UserContext'

const UserProfile = () => {
  
  const user = useUser();
  console.log(user);
  return (
    <div>
      User profile
      <h1>{user.user.name}</h1>
      
    </div>
  )
}

export default UserProfile
