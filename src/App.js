import React from "react";

import GlobalStyles from "./styles/GlobalStyles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { MenusContextProvider } from "./Contexts/Menu/MenusContext";
import { ToggleContextProvider } from "./Contexts/ToggleContext/ToggleContext";
import { AuthContextProvider } from "./Contexts/Authenticate/AuthContext";

import Loader from "./ui/Loader";
import PageNotFound from "./components/PageNotFound";
import AppLayout from "./components/AppLayout";
import HamburgerBg from "./components/HamburgerBg";
import RedirectBasedOnAuth from "./ui/RedirectBasedOnAuth";

const Homepage = lazy(() => import("./pages/Homepage"));
const About = lazy(() => import("./pages/About"));
const MakeReservation = lazy(() => import("./pages/MakeReservation"));
const Login = lazy(() => import("./pages/Login"));
const OrderOnline = lazy(() => import("./pages/Menu"));

function App() {
  return (
    <>
      <ToggleContextProvider>
        <AuthContextProvider>
          <MenusContextProvider>
            <BrowserRouter>
              <Suspense fallback={<Loader />}>
                <HamburgerBg />
                <Routes>
                  <Route element={<AppLayout />}>
                    <Route index element={<RedirectBasedOnAuth />} />
                    <Route path="/home" element={<Homepage />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/reservations" element={<MakeReservation />} />
                    <Route path="/orderonline" element={<OrderOnline />} />
                  </Route>

                  <Route path="/login" element={<Login />} />
                  <Route path="*" element={<PageNotFound />} />
                </Routes>
              </Suspense>
            </BrowserRouter>
          </MenusContextProvider>
        </AuthContextProvider>
      </ToggleContextProvider>
      <GlobalStyles />
    </>
  );
}

// function App() {
//   return (
//     <div>
//       <h1>Hello</h1>
//       <h2>My Name is Oluwaaseun</h2>
//     </div>
//   );
// }
export default App;
