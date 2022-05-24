// import {createContext} from 'react'
import React, {useState, createContext, useContext, useEffect} from 'react';

export const UserContext = createContext();

export const UserUpdateContext = createContext();

    export const useUser = () => {
        return useContext(UserContext);
    }

   export const useUserUpdate = () => {
        return useContext(UserUpdateContext);
    }


    const UserProvider = ({children})  => {
  
    const [user, setUser] = useState (
        {
            id:'',
            email: '',
            name: 'jose',
            isLoggedIn: false,
        }
    );

    useEffect(() =>{
        console.log("user from context",user)
    },[user])

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