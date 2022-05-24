import { Navigate } from "react-router-dom";
import { UserProvider, useUser } from "../context/UserContext";

const Protected = ({ children, redirectTo }) => {
  // const {user} = useUser();
  const user = localStorage.getItem('user');
  console.log(user.isLoggedIn);
  if (user.isLoggedIn === true) {
    return children;
  } else if (user.isLoggedIn === false) {
    return <Navigate to={redirectTo} />;
  }
};

export default Protected;
