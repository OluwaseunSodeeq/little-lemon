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

// import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";
// import useCombinedContexts from "../Contexts/CombinedContexts/useCombinedContexts";
// // import useAuthContext from "../Contexts/Authenticate/useAuthContext";

// function ProtectedRoute({ children }) {
//   const navigate = useNavigate();

//   // 1. Load the authenticated user
//   const { auth: isAuthenticated } = useCombinedContexts();
//   // const { auth: isAuthenticated } = useAuthContext();
//   // 2. If there is NO authenticated user, redirect to the /login
//   useEffect(
//     function () {
//       if (!isAuthenticated) navigate("/login");
//     },
//     [isAuthenticated, navigate]
//   );

//   if (isAuthenticated) return children;
// }

// export default ProtectedRoute;
