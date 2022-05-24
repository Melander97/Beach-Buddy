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
        console.log(user$._value);
        console.log(user$);
        // if(user$._value !== undefined) {
            // console.log('observable not empty');

            //Only populate user-state on load
            if(localStorage.getItem('user') === null && user$._value === undefined) {
                console.log('hej');
                user$.subscribe(data => {
                     if(data) {
                        //See console upon loggin in
                        // console.log(data.data);
                        //Set user2 to = data.data from response, see comment on line 50
                        setUser(data.data);
                     }
                })
            }
        // }
        const data = localStorage.getItem('user');
        let parsedData = JSON.parse(data);
        if(data !== null) setUser(parsedData);

        
    },[])
    // const user2 = useMemo(() => user, [user]);
    
    useEffect(() =>{
        if(user !== undefined) {

            localStorage.setItem('user', JSON.stringify(user));
        }
        console.log(user);
    },[user])

    /*  const updateUser = (id, email, name, isLoggedIn) => {
    setUser({   
    id: id,
    email: email,
    name: name,
    isLoggedIn: isLoggedIn
    })}; */

    return(
        //Pass user2 into value to be able to read it in other components. See comment in Home.jsx line 9.
        <UserContext.Provider value={{user}}>
            {/* <UserUpdateContext.Provider value={updateUser}> */}
            {children}
            {/* </UserUpdateContext.Provider> */}
        </UserContext.Provider>
    );
};

export default UserProvider;