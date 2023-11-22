import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ element, ...rest }) => {
  const { formData } = useSelector((state) => state.api);
  const accessToken = formData.access_token;
  return accessToken ? (
    React.cloneElement(element)
  ) : (
    <Navigate to="/" replace />
  );
};

export default PrivateRoute;
