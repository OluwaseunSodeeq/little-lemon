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
        {/* <ReservationsContextProvider remount={remount} setremount={setremount}> */}
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
        {/* </ReservationsContextProvider> */}
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

// TWO++++++

// import React, { useState, Suspense } from "react";
// import GlobalStyles from "./styles/GlobalStyles";
// import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// import ProtectedRoute from "./components/ProtectedRoute";
// import { Toaster } from "react-hot-toast";
// import Loader from "./ui/Loader";
// import { CombinedContextsProvider } from "./Contexts/CombinedContexts/CombinedContexts";

// // LAZY LOADING COMPONENTS
// const AppLayout = React.lazy(() => import("./components/AppLayout"));
// const Homepage = React.lazy(() => import("./pages/Homepage"));
// const About = React.lazy(() => import("./pages/About"));
// const MakeReservation = React.lazy(() => import("./pages/MakeReservation"));
// const Login = React.lazy(() => import("./pages/Login"));
// const OrderOnline = React.lazy(() => import("./pages/Menu"));
// const PageNotFound = React.lazy(() => import("./components/PageNotFound"));

// function App() {
//   const [remount, setremount] = useState(0);

//   return (
//     <section>
//       <GlobalStyles />
//       <CombinedContextsProvider remount={remount} setremount={setremount}>
//         <BrowserRouter>
//           <Suspense fallback={<Loader />}>
//             <Routes>
//               <Route
//                 element={
//                   <ProtectedRoute>
//                     <AppLayout />
//                   </ProtectedRoute>
//                 }
//               >
//                 <Route index element={<Navigate replace to="/home" />} />
//                 <Route path="/home" element={<Homepage />} />
//                 <Route path="/about" element={<About />} />
//                 <Route path="/reservations" element={<MakeReservation />} />
//                 <Route path="/orderonline" element={<OrderOnline />} />
//               </Route>
//               <Route path="/login" element={<Login />} />
//               <Route path="*" element={<PageNotFound />} />
//             </Routes>
//           </Suspense>
//         </BrowserRouter>
//       </CombinedContextsProvider>
//       <Toaster
//         position="top center"
//         guttter={12}
//         containerStyles={{ margin: "50px" }}
//         toastOptions={{
//           success: { duration: 3000 },
//           error: { duration: 5000 },
//           style: {
//             fontSize: "16px",
//             maxWidth: "500px",
//             padding: "8px 12px",
//             backgroundColor: "#495E57",
//             color: "#ffffff",
//           },
//         }}
//       />
//     </section>
//   );
// }

// export default App;
// THREEE++++++
// =======================

// NOte:
// 1.
// 1.
// How React.lazy Works
// Normally, when you import a component like this:

// javascript
// Copy code
// import MyComponent from './MyComponent';
// The component is bundled into the main JavaScript file, and it gets loaded when the application starts, even if the component is not immediately visible to the user.

// When you use React.lazy:

// javascript
// Copy code
// const MyComponent = React.lazy(() => import('./MyComponent'));
// React will:

// Split the code for MyComponent into a separate chunk.
// Having multiple nested context providers increases rendering time. Consider combining related contexts or refactoring to avoid deeply nested providers.

// 2. Having multiple nested context providers increases rendering time. Consider combining related contexts or refactoring to avoid deeply nested providers.

// =======================
// import React, { useState } from "react";

// import GlobalStyles from "./styles/GlobalStyles";
// import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
// // import { Suspense } from "react";
// import { MenusContextProvider } from "./Contexts/Menu/MenusContext";
// import { ToggleContextProvider } from "./Contexts/ToggleContext/ToggleContext";
// import { AuthContextProvider } from "./Contexts/Authenticate/AuthContext";

// // import Loader from "./ui/Loader";
// import PageNotFound from "./components/PageNotFound";
// import AppLayout from "./components/AppLayout";
// // import HamburgerBg from "./components/HamburgerBg";
// // import RedirectBasedOnAuth from "./ui/RedirectBasedOnAuth";

// import Homepage from "./pages/Homepage";
// import About from "./pages/About";
// import MakeReservation from "./pages/MakeReservation";
// import Login from "./pages/Login";
// import OrderOnline from "./pages/Menu";
// import ProtectedRoute from "./components/ProtectedRoute";
// import { Toaster } from "react-hot-toast";
// import { ReservationsContextProvider } from "./Contexts/ReservationsContext/ReservationsContext";

// function App() {
//   const [remount, setremount] = useState(0);

//   return (
//     <section>
//       <div>
//         <GlobalStyles />

//         <AuthContextProvider>
//           <ToggleContextProvider>
//             <MenusContextProvider>
//               <ReservationsContextProvider
//                 remount={remount}
//                 setremount={setremount}
//               >
//                 <HashRouter>
//                   {/* <Suspense fallback={<Loader />}> */}
//                   {/* <HamburgerBg /> */}
//                   <Routes>
//                     <Route
//                       element={
//                         <ProtectedRoute>
//                           <AppLayout />
//                         </ProtectedRoute>
//                       }
//                     >
//                       {/* <Route index element={<RedirectBasedOnAuth />} /> */}
//                       <Route index element={<Navigate replace to="/home" />} />
//                       <Route path="/home" element={<Homepage />} />
//                       <Route path="/about" element={<About />} />
//                       <Route
//                         path="/reservations"
//                         element={<MakeReservation />}
//                       />
//                       <Route path="/orderonline" element={<OrderOnline />} />
//                     </Route>

//                     <Route path="/login" element={<Login />} />
//                     <Route path="*" element={<PageNotFound />} />
//                   </Routes>
//                   {/* </Suspense> */}
//                 </HashRouter>
//               </ReservationsContextProvider>
//             </MenusContextProvider>
//           </ToggleContextProvider>
//         </AuthContextProvider>
//       </div>
//       <Toaster
//         position="top center"
//         guttter={12}
//         containerStyles={{ margin: "50px" }}
//         toastOptions={{
//           success: {
//             duration: 3000,
//           },
//           error: {
//             duration: 5000,
//           },
//           style: {
//             fontSize: "16px",
//             maxWidth: "500px",
//             padding: "8px 12px",
//             backgroundColor: "#495E57",
//             // color: "#333437",
//             color: "#ffffff",
//           },
//         }}
//       />
//     </section>
//   );
// }

// export default App;
// C:\Program Files\Git\bin
//

// C:\Windows\System32
// C:\Program Files\Git\cmd
// import React from "react";

// import GlobalStyles from "./styles/GlobalStyles";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Suspense, lazy } from "react";
// import { MenusContextProvider } from "./Contexts/Menu/MenusContext";
// import { ToggleContextProvider } from "./Contexts/ToggleContext/ToggleContext";
// import { AuthContextProvider } from "./Contexts/Authenticate/AuthContext";

// import Loader from "./ui/Loader";
// import PageNotFound from "./components/PageNotFound";
// import AppLayout from "./components/AppLayout";
// import HamburgerBg from "./components/HamburgerBg";
// import RedirectBasedOnAuth from "./ui/RedirectBasedOnAuth";

// const Homepage from "./pages/Homepage"));
// const About = lazy(() => import("./pages/About"));
// const MakeReservation = lazy(() => import("./pages/MakeReservation"));
// const Login = lazy(() => import("./pages/Login"));
// const OrderOnline = lazy(() => import("./pages/Menu"));

// function App() {
//   return (
//     <section>
//       <GlobalStyles />

//       <AuthContextProvider>
//         <ToggleContextProvider>
//           <MenusContextProvider>
//             <BrowserRouter>
//               <Suspense fallback={<Loader />}>
//                 <HamburgerBg />
//                 <Routes>
//                   <Route element={<AppLayout />}>
//                     <Route index element={<RedirectBasedOnAuth />} />
//                     <Route path="/home" element={<Homepage />} />
//                     <Route path="/about" element={<About />} />
//                     <Route path="/reservations" element={<MakeReservation />} />
//                     <Route path="/orderonline" element={<OrderOnline />} />
//                   </Route>

//                   <Route path="/login" element={<Login />} />
//                   <Route path="*" element={<PageNotFound />} />
//                 </Routes>
//               </Suspense>
//             </BrowserRouter>
//           </MenusContextProvider>
//         </ToggleContextProvider>
//       </AuthContextProvider>
//     </section>
//   );
// }

// export default App;
