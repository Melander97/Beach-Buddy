// import {createContext} from 'react'
import React, {useState, createContext, useContext} from 'react';

export const UserContext = createContext();

    export const useUser = () => {
        return useContext(UserContext);
    }

export const UserProvider = ({children})  => {
  
    const [user, setUser] = useState (

        {
            isLoggedIn: false,
            id:'',
            email: '',
            name: 'jose'
        }
    );

    return(
        <UserContext.Provider value={user}>
            {children}
            
        </UserContext.Provider>
    );
};