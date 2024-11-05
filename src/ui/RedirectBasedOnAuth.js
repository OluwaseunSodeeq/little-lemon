import React from "react";
import { Navigate } from "react-router-dom";
import useAuthContext from "../Contexts/Authenticate/useAuthContext";

function RedirectBasedOnAuth() {
  const { auth: isAuthenticated } = useAuthContext();

  console.log(isAuthenticated);

  return isAuthenticated ? (
    <Navigate replace to="/home" />
  ) : (
    <Navigate replace to="/login" />
  );
}

export default RedirectBasedOnAuth;
