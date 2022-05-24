// import {createContext} from 'react'
import React, {useState, createContext, useContext, useEffect, useMemo} from 'react';
import { Navigate } from 'react-router-dom';
import { user$ } from '../../services/authService';

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
    // const [user2, setUser2] = useState ();
    useEffect(() =>{
        // setUser(localStorage.getItem('user'))

        user$.subscribe(data => {
             if(data) {
                //See console upon loggin in
                console.log(data.data);
                //Set user2 to = data.data from response, see comment on line 50
                setUser(data.data);
             }
        })
    },[])
    const user2 = useMemo(() => user, [user]);
    
    useEffect(() =>{
        console.log("user from context",user2)
    },[user2])

     const updateUser = (id, email, name, isLoggedIn) => {
    setUser({   
    id: id,
    email: email,
    name: name,
    isLoggedIn: isLoggedIn
    })};

    return(
        //Pass user2 into value to be able to read it in other components. See comment in Home.jsx line 9.
        <UserContext.Provider value={{user2, updateUser}}>
            {/* <UserUpdateContext.Provider value={updateUser}> */}
            {children}
            {/* </UserUpdateContext.Provider> */}
        </UserContext.Provider>
    );
};

export default UserProvider;