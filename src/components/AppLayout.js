import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

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
  const currentLocation = useLocation();
  const isLoginPage = currentLocation.pathname === "/login";

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
