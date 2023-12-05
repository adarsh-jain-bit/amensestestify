import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element, ...rest }) => {
  console.log("private route");
  const loggedIn = localStorage.getItem("loggedIn");
  const token = localStorage.getItem("token");
  const checkToken = token !== null && token !== undefined;
  if (checkToken || loggedIn === true) {
    console.log("checked");
    return React.cloneElement(element);
  } else {
    console.log("not navigated");
    return <Navigate to="/login" replace />;
  }
};

export default PrivateRoute;
