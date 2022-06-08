// import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

const Protected = ({ redirectTo, children }) => {
  const { user } = useUser();

  if (user !== undefined) {
    if (user.isLoggedIn) {
      return children;
    }
  }
  if (user !== undefined) {
    if (user.isLoggedIn === false) {
      return <Navigate to={redirectTo} />;
    }
  }
};

export default Protected;
