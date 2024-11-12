import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import useAuthContext from "../Contexts/Authenticate/useAuthContext";

const MainContainer = styled.section`
  /* position: relative;
  padding: 0;
  display: flex;
  flex-direction: column; */
`;

const Main = styled.main`
  padding: 0;
`;

function AppLayout() {
  const { auth: isAuthenticated } = useAuthContext();
  const currentLocation = useLocation();
  const isLoginPage = currentLocation.pathname === "/login";
  console.log("Auth Status:", isAuthenticated);
  console.log(isLoginPage);

  return (
    <MainContainer>
      {!isLoginPage && <Header />}
      <Main>
        <Outlet />
      </Main>
      {!isLoginPage && <Footer />}
    </MainContainer>
  );
}

export default AppLayout;
