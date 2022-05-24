// import {createContext} from 'react'
import React, {useState, createContext, useContext, useEffect, useMemo} from 'react';
// import { Navigate } from 'react-router-dom';
// import { user$ } from '../../services/authService';

export const UserContext = createContext();

export const UserUpdateContext = createContext();

    export const useUser = () => {
        return useContext(UserContext);
    }

   export const useUserUpdate = () => {
        return useContext(UserUpdateContext);
    }


    const UserProvider = ({children})  => {
  
    const [user, setUser] = useState ();
    useEffect(() =>{
        setUser(localStorage.getItem('user'));
    },[])

     const updateUser = (id, email, name, isLoggedIn) => {
    setUser({   
    id: id,
    email: email,
    name: name,
    isLoggedIn: isLoggedIn
    })};

    return(
        <UserContext.Provider value={{user, updateUser}}>
            {/* <UserUpdateContext.Provider value={updateUser}> */}
            {children}
            {/* </UserUpdateContext.Provider> */}
        </UserContext.Provider>
    );
};

export default UserProvider;