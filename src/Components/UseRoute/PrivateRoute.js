import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { userContext } from "../../Context/UserProvider";

const PrivateRoute = ({ children }) => {
  const [user, setUser] = useContext(userContext);
  const location = useLocation();
  return user && user.isAuthenticated ? (
    <>{children}</>
  ) : (
    <Navigate to={"/login"} state={{ from: location }} />
  );
};

export default PrivateRoute;
