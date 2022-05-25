// import {createContext} from 'react'
import React, {useState, createContext, useContext, useEffect} from 'react';

import { user$ } from '../../services/authService';

export const UserContext = createContext();

// export const UserUpdateContext = createContext();

    export const useUser = () => {
        return useContext(UserContext);
    }

    /* export const useUserUpdate = () => {
        return useContext(UserUpdateContext);
    } */

const UserProvider = ({children})  => {
  
    const [user, setUser] = useState ();
    // const [user2, setUser2] = useState ();
    useEffect(() =>{
        
            //Only populate user-state on load
            if((user === undefined || user.isLoggedIn === false)&& user$._value === undefined) {
                console.log('hej');
                user$.subscribe(data => {
                     if(data) {
                        setUser({
                            name: data.data.name,
                            id: data.data.id,
                            email: data.data.email,
                            isLoggedIn: true,
                        });
                     }
                })
            }

            const data = localStorage.getItem('user');
            let parsedData = JSON.parse(data);
            if(data !== null){ 
                setUser(parsedData)
            
            } else {
                setUser({isLoggedIn: false})
            }
        
    },[])
    
    useEffect(() =>{
        if(user !== undefined) {

            localStorage.setItem('user', JSON.stringify(user));
        }
        console.log(user);
    },[user])

    return(
        //Pass user2 into value to be able to read it in other components. See comment in Home.jsx line 9.
        <UserContext.Provider value={{user}}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;