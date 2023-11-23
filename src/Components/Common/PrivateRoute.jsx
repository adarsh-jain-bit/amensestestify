import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ element, ...rest }) => {
  const { formData } = useSelector((state) => state.api);
  const accessToken = formData.access_token;
  const loggedIn = localStorage.getItem("loggedIn");
  return accessToken || loggedIn === true
    ? React.cloneElement(element)
    : // <Navigate to="/login" replace />
      "";
};

export default PrivateRoute;
