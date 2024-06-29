//============================First Approach ===================//

// import GlobalStyles from "./styles/GlobalStyles";
// import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
// import { Suspense, lazy, useState } from "react";

// import Loader from "./ui/Loader";
// import styled from "styled-components";
// import WholeApp from "./components/WholeApp";
// import PageNotFound from "./components/PageNotFound";
// import AppLayout from "./components/AppLayout";
// import { AuthContextProvider } from "./Contexts/Authenticate/AuthContext";
// import { MenusContextProvider } from "./Contexts/Menu/MenusContext";
// import useAuthContext from "./Contexts/Authenticate/useAuthContext";

// const Homepage = lazy(() => import("./pages/Homepage"));
// const About = lazy(() => import("./pages/About"));
// const Menu = lazy(() => import("./pages/Menu"));
// const MakeReservation = lazy(() => import("./pages/MakeReservation"));
// const Login = lazy(() => import("./pages/Login"));
// const OrderOnline = lazy(() => import("./pages/OrderOnline"));

// const AppSection = styled.section`
//   position: relative;
//   width: 100%;
// `;

// export const HamburgerBg = styled.div`
//   display: none;
//   @media (max-width: 950px) {
//     position: fixed;
//     z-index: 80;
//     height: 1rem;
//     width: 1rem;
//     background-color: rgba(0, 0, 0, 0.9);
//     top: 2.5rem;
//     right: 6%;
//     display: block;
//     transition: transform 0.8s cubic-bezier(0.86, 0, 0.07, 1);
//     transform: ${({ hamburger }) => (hamburger ? "scale(200)" : "")};
//     background-image: ${({ hamburger }) =>
//       hamburger ? "radial-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.9))" : ""};
//   }
// `;
// /*
// Context Error
// Uncaught Error: Auth context was used outside open context providerat useAuthContext
// */
// function App() {
//   const [hamburger] = useState(false);
//   const { auth: isAuthenticated } = useAuthContext();
//   return (
//     <AppSection>
//       <AuthContextProvider>
//         <MenusContextProvider>
//           <BrowserRouter>
//             <Suspense fallback={<Loader />}>
//               <HamburgerBg hamburger={hamburger} />

//               <Routes>
//                 {!isAuthenticated && <Route path="/" element={<Login />} />}
//                 {isAuthenticated && (
//                   <Route
//                     element={
//                       <WholeApp>
//                         <AppLayout />
//                       </WholeApp>
//                     }
//                   >
//                     <Route path="/home" element={<Homepage />} />
//                     <Route path="/about" element={<About />} />
//                     <Route path="/menu" element={<Menu />} />
//                     <Route path="/reservations" element={<MakeReservation />} />
//                     <Route path="/orderonline" element={<OrderOnline />} />
//                     <Route path="/" element={<Navigate to="/home" />} />
//                   </Route>
//                 )}
//                 <Route path="*" element={<PageNotFound />} />
//               </Routes>
//             </Suspense>
//           </BrowserRouter>
//         </MenusContextProvider>
//       </AuthContextProvider>

//       <GlobalStyles />
//     </AppSection>
//   );
// }

// export default App;

// =====================================Second Approach======================================

// import GlobalStyles from "./styles/GlobalStyles";
// import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
// import { Suspense, lazy, useState } from "react";

// import Loader from "./ui/Loader";
// import styled from "styled-components";
// import WholeApp from "./components/WholeApp";
// import PageNotFound from "./components/PageNotFound";
// import AppLayout from "./components/AppLayout";
// import { AuthContextProvider } from "./Contexts/Authenticate/AuthContext";
// import { MenusContextProvider } from "./Contexts/Menu/MenusContext";
// import useAuthContext from "./Contexts/Authenticate/useAuthContext";

// const Homepage = lazy(() => import("./pages/Homepage"));
// const About = lazy(() => import("./pages/About"));
// const Menu = lazy(() => import("./pages/Menu"));
// const MakeReservation = lazy(() => import("./pages/MakeReservation"));
// const Login = lazy(() => import("./pages/Login"));
// const OrderOnline = lazy(() => import("./pages/OrderOnline"));

// const AppSection = styled.section`
//   position: relative;
//   width: 100%;
// `;

// export const HamburgerBg = styled.div`
//   display: none;
//   @media (max-width: 950px) {
//     position: fixed;
//     z-index: 80;
//     height: 1rem;
//     width: 1rem;
//     background-color: rgba(0, 0, 0, 0.9);
//     top: 2.5rem;
//     right: 6%;
//     display: block;
//     transition: transform 0.8s cubic-bezier(0.86, 0, 0.07, 1);
//     transform: ${({ hamburger }) => (hamburger ? "scale(200)" : "")};
//     background-image: ${({ hamburger }) =>
//       hamburger ? "radial-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.9))" : ""};
//   }
// `;

// function App() {
//   const [hamburger] = useState(false);

//   return (
//     <AppSection>
//       <AuthContextProvider>
//         <MenusContextProvider>
//           <BrowserRouter>
//             <Suspense fallback={<Loader />}>
//               <HamburgerBg hamburger={hamburger} />
//               <Routes>
//                 <Route path="/*" element={<ProjectWrapper />} />
//               </Routes>
//             </Suspense>
//           </BrowserRouter>
//         </MenusContextProvider>
//       </AuthContextProvider>

//       <GlobalStyles />
//     </AppSection>
//   );
// }

// function ProjectWrapper() {
//   const { auth: isAuthenticated } = useAuthContext();

//   return (
//     <Routes>
//       {!isAuthenticated && <Route path="/" element={<Login />} />}
//       {isAuthenticated && (
//         <Route
//           element={
//             <WholeApp>
//               <AppLayout />
//             </WholeApp>
//           }
//         >
//           <Route path="/home" element={<Homepage />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/menu" element={<Menu />} />
//           <Route path="/reservations" element={<MakeReservation />} />
//           <Route path="/orderonline" element={<OrderOnline />} />
//           <Route path="/" element={<Navigate to="/home" />} />
//         </Route>
//       )}
//       <Route path="*" element={<PageNotFound />} />
//     </Routes>
//   );
// }
// export default App;

// // ==============================SPLITING THE TWO COMPONENTS IN TWO==============================================

import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { AuthContextProvider } from "./Contexts/Authenticate/AuthContext";
import { MenusContextProvider } from "./Contexts/Menu/MenusContext";
import { ToggleContextProvider } from "./Contexts/ToggleContext/ToggleContext";

import Loader from "./ui/Loader";
import HamburgerBg from "./components/HamburgerBg";
import ProjectWrapper from "./ProjectWrapper";

const AppSection = styled.section`
  position: relative;
  width: 100%;
`;

function App() {
  return (
    <AppSection>
      <AuthContextProvider>
        <MenusContextProvider>
          <ToggleContextProvider>
            <BrowserRouter>
              <Suspense fallback={<Loader />}>
                <HamburgerBg />
                <Routes>
                  <Route path="/*" element={<ProjectWrapper />} />
                </Routes>
              </Suspense>
            </BrowserRouter>
          </ToggleContextProvider>
        </MenusContextProvider>
      </AuthContextProvider>

      <GlobalStyles />
    </AppSection>
  );
}

export default App;
