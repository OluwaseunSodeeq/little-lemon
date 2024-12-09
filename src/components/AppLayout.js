import React, { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";

const Header = React.lazy(() => import("./Header"));
const Footer = React.lazy(() => import("./Footer"));

const MainContainer = styled.section`
  padding: 0;
`;

const Main = styled.main`
  padding: 0;
`;

function AppLayout() {
  const currentLocation = useLocation();
  const isLoginPage = currentLocation.pathname === "/login";

  return (
    <MainContainer>
      {!isLoginPage && (
        <Suspense fallback={<div>Loading Header...</div>}>
          <Header />
        </Suspense>
      )}
      <Main>
        <Outlet />
      </Main>
      {!isLoginPage && (
        <Suspense fallback={<div>Loading Footer...</div>}>
          <Footer />
        </Suspense>
      )}
    </MainContainer>
  );
}

export default AppLayout;

// import React from "react";
// import { Outlet, useLocation } from "react-router-dom";
// import styled from "styled-components";
// import Header from "./Header";
// import Footer from "./Footer";

// const MainContainer = styled.section`
//   /* position: relative;
//   padding: 0;
//   display: flex;
//   flex-direction: column; */
// `;

// const Main = styled.main`
//   padding: 0;
// `;
// // function AppLayout() {
//   const currentLocation = useLocation();
//   const isLoginPage = currentLocation.pathname === "/login";

//   return (
//     <MainContainer>
//       {!isLoginPage && <Header />}
//       <Main>
//         <Outlet />
//       </Main>
//       {!isLoginPage && <Footer />}
//     </MainContainer>
//   );
// }

// export default AppLayout;
