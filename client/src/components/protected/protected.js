import { Navigate } from "react-router-dom";
import { UserProvider, useUser } from "../context/UserContext";

const Protected = ({ children, redirectTo }) => {

  //UNCOMMENT THESE TO READ CONTEXT WHEN PROTECTED IS HIT
  //comment out line 10 and 11 and change the if to read from user2 instead of user
  const {user2} = useUser();
  console.log(user2);
  // const user = JSON.parse(localStorage.getItem('user'));
  // console.log(user);
  setTimeout(() => {

      if (user2.isLoggedIn) {
        
        return children;
      } 
  }, 200);
  if (user2 === undefined) {
    return <Navigate to={redirectTo} />;

  }
};

export default Protected;
