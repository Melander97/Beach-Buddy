import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

const Protected = ({ children, redirectTo }) => {

  const {user} = useUser();

    setTimeout(() => {
        console.log(user);
        //Check if user is something
          if (user !== undefined) {

            if(user.isLoggedIn) {

              return children;
            }
            
          } 
    }, 200);
    //Check if user is something
    if (user !== undefined ) {

      if(user.isLoggedIn === false) {

        return <Navigate to={redirectTo} />;
      }
      
  
    }

};

export default Protected;
