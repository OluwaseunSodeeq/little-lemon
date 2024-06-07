import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import { Suspense, lazy } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Loader from "./ui/Loader";

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
function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Header />
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
      <GlobalStyles />
    </>
  );
}

export default App;
