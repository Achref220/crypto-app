import React from "react";
import { Navigate, Outlet } from "react-router";

const PrivateRoute = () => {
  const token = localStorage.getItem("token");

  if (token) {
    return <Outlet />;
  }
  return <Navigate to="/Login" />;
};

export default PrivateRoute;