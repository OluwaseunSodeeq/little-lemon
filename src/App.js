// ONE
import React, { Suspense, useState } from "react";
import GlobalStyles from "./styles/GlobalStyles";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import { Toaster } from "react-hot-toast";
import Loader from "./ui/Loader";
import { CombinedContextsProvider } from "./Contexts/CombinedContexts/CombinedContexts";
// import { ReservationsContextProvider } from "./Contexts/ReservationsContext/ReservationsContext";

// LAZY LOADING COMPONENTS
const AppLayout = React.lazy(() => import("./components/AppLayout"));
const Homepage = React.lazy(() => import("./pages/Homepage"));
const About = React.lazy(() => import("./pages/About"));
const MakeReservation = React.lazy(() => import("./pages/MakeReservation"));
const Login = React.lazy(() => import("./pages/Login"));
const OrderOnline = React.lazy(() => import("./pages/Menu"));
const PageNotFound = React.lazy(() => import("./components/PageNotFound"));

function App() {
  const [remount, setremount] = useState(0);
  return (
    <section>
      <GlobalStyles />
      <CombinedContextsProvider remount={remount} setremount={setremount}>
        {/* <AuthContextProvider>
          <ToggleContextProvider>
             <MenusContextProvider> 
         <ReservationsContextProvider > */}
        <BrowserRouter>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Navigate to="/login" replace />} />
              <Route path="/login" element={<Login />} />
              <Route
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route path="/home" element={<Homepage />} />
                <Route path="/about" element={<About />} />
                <Route path="/reservations" element={<MakeReservation />} />
                <Route path="/orderonline" element={<OrderOnline />} />
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>

        {/* </ReservationsContextProvider> 
         </AuthContextProvider>
//           </ToggleContextProvider>
//             </MenusContextProvider> */}
      </CombinedContextsProvider>
      <Toaster
        position="top center"
        gutter={12}
        containerStyles={{ margin: "50px" }}
        toastOptions={{
          success: { duration: 3000 },
          error: { duration: 5000 },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "8px 12px",
            backgroundColor: "#495E57",
            color: "#ffffff",
          },
        }}
      />
    </section>
  );
}

export default App;

// C:\Windows\System32
// C:\Program Files\Git\cmd
