import { Navigate } from "react-router-dom";
import { UserProvider, useUser } from "../context/UserContext";

const Protected = ({ children, redirectTo }) => {
  const user = useUser();

  if (user.isLoggedIn) {
    return children;
  } else {
    return <Navigate to={redirectTo} />;
  }
};

export default Protected;
