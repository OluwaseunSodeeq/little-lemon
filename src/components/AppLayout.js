import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import useAuthContext from "../Contexts/Authenticate/useAuthContext";

const MainContainer = styled.section`
  position: relative;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  padding: 0;
`;
function AppLayout() {
  const { auth: isAuthenticated } = useAuthContext();
  console.log(isAuthenticated);

  // const location = useLocation();
  // const loggedIn = !["/", "/404"].includes(location.pathname);

  // console.log(loggedIn);

  // const shouldRenderHeaderFooter = !["/", "/404"].includes(location.pathname);

  // Do not render Header and Footer for login and 404 pages

  // return (
  //   <MainContainer>
  //     {shouldRenderHeaderFooter && <Header />}
  //     <Main>
  //       <Outlet />
  //     </Main>
  //     {shouldRenderHeaderFooter && <Footer />}
  //   </MainContainer>
  // );

  return (
    <MainContainer>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </MainContainer>
  );
}

export default AppLayout;
