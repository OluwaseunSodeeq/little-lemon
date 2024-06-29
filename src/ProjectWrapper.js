import { Route, Routes, Navigate } from "react-router-dom";
import { lazy } from "react";
import WholeApp from "./components/WholeApp";
import PageNotFound from "./components/PageNotFound";
import AppLayout from "./components/AppLayout";
import useAuthContext from "./Contexts/Authenticate/useAuthContext";

const Homepage = lazy(() => import("./pages/Homepage"));
const About = lazy(() => import("./pages/About"));
const Menu = lazy(() => import("./pages/Menu"));
const MakeReservation = lazy(() => import("./pages/MakeReservation"));
const Login = lazy(() => import("./pages/Login"));
const OrderOnline = lazy(() => import("./pages/OrderOnline"));

function ProjectWrapper() {
  const { auth: isAuthenticated } = useAuthContext();
  console.log(isAuthenticated);
  return (
    <Routes>
      {!isAuthenticated && <Route path="/" element={<Login />} />}
      {isAuthenticated && (
        <Route
          element={
            <WholeApp>
              <AppLayout />
            </WholeApp>
          }
        >
          <Route path="/home" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservations" element={<MakeReservation />} />
          <Route path="/orderonline" element={<OrderOnline />} />
          <Route path="/" element={<Navigate to="/home" />} />
        </Route>
      )}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default ProjectWrapper;
