import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import { Suspense, lazy, useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Loader from "./ui/Loader";
import styled from "styled-components";
import { MenusContextProvider } from "./Context/MenusContext";

// import MakeReservation from "./pages/MakeReservation";
// import Menu from "./pages/Menu";
// import About from "./components/About";
// import Login from "./components/Login";
// import Homepage from "./pages/Homepage";

const Homepage = lazy(() => import("./pages/Homepage"));
const About = lazy(() => import("./pages/About"));
const Menu = lazy(() => import("./pages/Menu"));
const MakeReservation = lazy(() => import("./pages/MakeReservation"));

// const OrderOnline = lazy(() => import("./pages/OrderOnline"))

const AppSection = styled.section`
  position: relative;
  width: 100%;
  /* height: 100vh; */
`;

export const HamburgerBg = styled.div`
  /* background-color: rgba(250, 250, 250, 0.9); */
  display: none;
  @media (max-width: 950px) {
    position: fixed;
    z-index: 80;
    height: 1rem;
    width: 1rem;
    background-color: rgba(0, 0, 0, 0.9);
    top: 2.5rem;
    right: 6%;
    display: block;
    transition: transform 0.8s cubic-bezier(0.86, 0, 0.07, 1);
    transform: ${({ hamburger }) => (hamburger ? "scale(200)" : "")};
    background-image: ${({ hamburger }) =>
      hamburger ? "radial-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.9))" : ""};
  }
`;
function App() {
  const [hamburger, setHamburger] = useState(false);

  return (
    <AppSection>
      <MenusContextProvider>
        <BrowserRouter>
          <Suspense fallback={<Loader />}>
            <HamburgerBg hamburger={hamburger} />

            <Header hamburger={hamburger} setHamburger={setHamburger} />
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/about" element={<About />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/reservations" element={<MakeReservation />} />
              <Route path="orderonline" element={<Menu />} />
              {/* <Route path="login" element={<Login />} /> */}
            </Routes>
            <Footer />
          </Suspense>
        </BrowserRouter>
      </MenusContextProvider>
      <GlobalStyles />
    </AppSection>
  );
}

export default App;
