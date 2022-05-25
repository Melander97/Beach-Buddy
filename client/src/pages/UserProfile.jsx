import React, { useState, useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { useUser } from '../components/context/UserContext'

const UserProfile = () => {
  
  const user = useUser();

  return (
    <div>
      User profile
      {user.isLoggedIn ? <h1>{user.name}</h1> : ''}
      
    </div>
  )
}

export default UserProfile
