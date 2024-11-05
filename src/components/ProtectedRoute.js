// import styled from "styled-components";
// import Loader from "./Loader";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useAuthContext from "../Contexts/Authenticate/useAuthContext";

// const FullPage = styled.div`
//   height: 100vh;
//   background-color: var(--color-grey-50);
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // 1. Load the authenticated user
  const { auth: isAuthenticated } = useAuthContext();
  console.log(isAuthenticated);
  // 2. If there is NO authenticated user, redirect to the /login
  useEffect(
    function () {
      if (!isAuthenticated) navigate("/login");
    },
    [isAuthenticated, navigate]
  );

  // 3. While loading, show a spinner
  //   if (isLoading)
  //     return (
  //       <FullPage>
  //         <Loader />
  //       </FullPage>
  //     );

  // 4. If there IS a user, render the app
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
