import { Navigate } from "react-router-dom";
import { UserProvider, useUser } from "../context/UserContext";

const Protected = ({ children }) => {
  const user = useUser();

  
    return (
    <UserProvider>
        { children }
    </UserProvider>
    )

   
};

export default Protected;
