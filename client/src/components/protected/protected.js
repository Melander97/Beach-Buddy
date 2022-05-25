import { Navigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

const Protected = ({ children, redirectTo }) => {

  const {user} = useUser();

  setTimeout(() => {

        if (user.isLoggedIn) {
          
          return children;
        } 
  }, 200);
  if (localStorage.getItem('user') === null) {
    
    return <Navigate to={redirectTo} />;

  }
};

export default Protected;
