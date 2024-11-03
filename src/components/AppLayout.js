// import { useLocation } from "react-router-dom";
import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import useAuthContext from "../Contexts/Authenticate/useAuthContext";

const MainContainer = styled.section`
  position: relative;
  padding: 0;
  display: flex;
  flex-direction: column;
`;
// const MainContainer = styled.section`
//   position: relative;
//   padding: 0;
// `;
const Main = styled.main`
  padding: 0;
`;
function AppLayout({ LoggedIn }) {
  const { auth: isAuthenticated } = useAuthContext();
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
    <>
      {isAuthenticated && (
        <MainContainer>
          <Header />
          <Main>
            <Outlet />
          </Main>
          <Footer />
        </MainContainer>
      )}
    </>
  );
}

export default AppLayout;
