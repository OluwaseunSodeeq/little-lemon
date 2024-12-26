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
              <ReservationsContextProvider >  */}
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
           </MenusContextProvider>
             </ToggleContextProvider>
                </AuthContextProvider> */}
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
// NOTE
/*
From Theory to Mastery
"You will never know the ins and outs of a concept until you use it to achieve something you weren’t taught in a course or read online."

This statement captures the essence of my journey throughout the development of Little lemon. Understanding a concept or tool is not just about knowing what it does but also about figuring out how and when to use it effectively. Let me share two instances from my projects that deepened my understanding of React and core web development principles.

In the Little Lemon project, I needed to create a fully customizable dropdown component for the app. At first, I opted for the traditional <select> and <option> elements. They seemed like a natural choice for dropdown functionality. However, I quickly ran into a significant limitation: styling constraints.

Here is the PROBLEM: The <option> tags in HTML are primarily designed for simple dropdown menus. While you can adjust basic properties like font, color, and padding, they cannot accommodate advanced customizations like: Setting specific widths and Adding icons or complex layouts.
To overcome this, I built a custom dropdown component from scratch. By scripting the dropdown’s logic, leveraging React state management, and Implementing advanced functionality like dynamic rendering.

This challenge pushed me to move beyond the basics and understand how dropdowns truly work under the hood. You can explore the code and implementation in my GitHub repo below

Another significant learning experience came when working with React’s Context API. I initially used it to manage global state across the app. Context API is excellent for broadcasting data without the need for prop drilling. It offers:

i. A lightweight alternative to Redux for managing global state.
ii. Cleaner, more readable codebases.
iii. Dynamic updates to state across the app.

However, I discovered a major limitation that affected my app’s user experience: "Context API does not persist state across pages or after a page reload by default."
Why Doesn’t Context API Persist State?

Context API stores data in memory, meaning it is tied to the React component tree. When navigating to a new page or refreshing the browser, the component tree remounts, and the previous context state is lost.

React components, including Context.Provider, are not inherently connected to storage mechanisms like local storage or cookies.
To address this, I explored persistence mechanisms (Local Storage Integration) to extend the Context API’s functionality.

Key Takeaways
1. Real-World Implementation Drives Understanding:
   It’s one thing to know a tool’s capabilities but another to adapt it to solve real problems. These challenges taught me to think critically and creatively.
2. Understanding Limitations Leads to Growth:
  Recognizing the limits of <option> tags and Context API pushed me to explore alternatives and expand my toolkit.
3. Combining Concepts Yields Better Results:
  The integration of Context API with local storage demonstrated how combining tools can overcome individual shortcomings. 

Working on real-world projects like Little Lemon has been transformative, bridging the gap between theoretical knowledge and practical application. I invite you to explore my code and see how I implemented these solutions:

GitHub Repository: https://github.com/OluwaseunSodeeq/little-lemon
Live Project URL: https://little-lemon-indol.vercel.app/

*/
