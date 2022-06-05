import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

const Protected = ({ redirectTo, children }) => {
  const { user } = useUser();

  // setTimeout(() => {
  // console.log(user);
  //Check if user is something
  if (user !== undefined) {
    if (user.isLoggedIn) {
      console.log("render children");
      return children;
    }
  }
  // }, 200);
  //Check if user is something
  if (user !== undefined) {
    if (user.isLoggedIn === false) {
      console.log("Not authorized");
      return <Navigate to={redirectTo} />;
    }
  }
};

export default Protected;
