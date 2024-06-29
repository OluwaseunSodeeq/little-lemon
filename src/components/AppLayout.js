import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";

const Main = styled.main`
  padding: 0;
`;

function AppLayout() {
  const location = useLocation();

  // Do not render Header and Footer for login and 404 pages
  const shouldRenderHeaderFooter = !["/", "/404"].includes(location.pathname);

  return (
    <>
      {shouldRenderHeaderFooter && <Header />}
      <Main>
        <Outlet />
      </Main>
      {shouldRenderHeaderFooter && <Footer />}
    </>
  );
}

export default AppLayout;
