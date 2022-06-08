import React, { useState, createContext, useContext, useEffect } from "react";
import { BehaviorSubject } from "rxjs";

import { user$ } from "../../services/authService";

export const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

export const contextUser$ = new BehaviorSubject();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    if (
      (user === undefined || user.isLoggedIn === false) &&
      user$._value === undefined
    ) {
      user$.subscribe((data) => {
        if (data) {
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
          });
        }
      });
    }

    const data = localStorage.getItem("user");
    let parsedData = JSON.parse(data);
    if (data !== null) {
      setUser(parsedData);
      contextUser$.next(parsedData);
    } else {
      setUser({ isLoggedIn: false });
      contextUser$.next({ isLoggedIn: false });
    }
  }, []);

  useEffect(() => {
    if (user !== undefined) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

// /* export const useUserUpdate = () => {
//         return useContext(UserUpdateContext);
//     } */
// export const contextUser$ = new BehaviorSubject();

// const UserProvider = ({ children }) => {
//   const [user, setUser] = useState();

//   // const [user2, setUser2] = useState ();
//   useEffect(() => {
//     //Only populate user-state on load
//     if (
//       (user === undefined || user.isLoggedIn === false) &&
//       user$._value === undefined
//     ) {
//       // console.log('hej');
//       user$.subscribe((data) => {
//         if (data) {
//           setUser({
//             name: data.data.name,
//             id: data.data.id,
//             email: data.data.email,
//             isLoggedIn: true,
//           });
//           contextUser$.next({
//             name: data.data.name,
//             id: data.data.id,
//             email: data.data.email,
//             isLoggedIn: true,
//           });
//         }
//       });
//     }

//     const data = localStorage.getItem("user");
//     let parsedData = JSON.parse(data);
//     if (data !== null) {
//       setUser(parsedData);
//       contextUser$.next(parsedData);
//       // console.log(contextUser$)
//     } else {
//       setUser({ isLoggedIn: false });
//       contextUser$.next({ isLoggedIn: false });
//       // console.log(contextUser$)
//     }
//   }, []);

//   useEffect(() => {
//     if (user !== undefined) {
//       localStorage.setItem("user", JSON.stringify(user));
//     }
//     // console.log(user);
//   }, [user]);

//   return (
//     //Pass user2 into value to be able to read it in other components. See comment in Home.jsx line 9.
//     <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
//   );
// };

export default UserProvider;
