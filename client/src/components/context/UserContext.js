// import {createContext} from 'react'
import React, {useState, createContext, useContext} from 'react';

export const UserContext = createContext();

    export const useUser = () => {
        return useContext(UserContext);
    }

    const UserProvider = ({children})  => {
  
    const [user, setUser] = useState (

        {
            id:'',
            email: '',
            name: '',
            isLoggedIn: false,
        }
    );

    return(
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;