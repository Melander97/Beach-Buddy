import React, {useState, createContext, useContext, useEffect,} from 'react';
import { BehaviorSubject } from "rxjs";

import { user$ } from '../../services/authService';

export const UserContext = createContext();



    export const useUser = () => {
        return useContext(UserContext);
    }

    export const contextUser$ = new BehaviorSubject();


const UserProvider = ({children})  => {
  
    const [user, setUser] = useState ();
    

    useEffect(() =>{
        
            if((user === undefined || user.isLoggedIn === false)&& user$._value === undefined) {
                user$.subscribe(data => {
                     if(data) {
                        setUser({

                            name: data.data.name,
                            id: data.data.id,
                            email: data.data.email,
                            isLoggedIn: true,
                        });
                        contextUser$.next({

                            name: data.data.name,
                            id: data.data.id,
                            email: data.data.email,
                            isLoggedIn: true,
                        })
                     }
                })
            }

            const data = localStorage.getItem('user');
            let parsedData = JSON.parse(data);
            if(data !== null){ 
                setUser(parsedData)
                contextUser$.next(parsedData)

            } else {
                setUser({isLoggedIn: false})
                contextUser$.next({isLoggedIn: false})

            }
            
        
    },[])
    
    useEffect(() =>{
        if(user !== undefined) {

            localStorage.setItem('user', JSON.stringify(user));
        }
    },[user])

    return(
        <UserContext.Provider value={{user}}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;