import React from "react";
import { Navigate } from "react-router-dom";
import useCombinedContexts from "../Contexts/CombinedContexts/useCombinedContexts";

function ProtectedRoute({ children }) {
  const { auth: isAuthenticated } = useCombinedContexts();

  // Redirect to /login if the user is not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Render protected content if authenticated
  return children;
}

export default ProtectedRoute;
