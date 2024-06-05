import "./App.css";
// import Footer from "./Footer";
import Header from "./components/Header";
import Footer from "./components/Footer";

// import Header from "./Header";
// import MakeReservation from "./pages/MakeReservation";
// import Homepage from "./pages/Homepage";

import GlobalStyles from "./styles/GlobalStyles";
import ConfirmReservation from "./pages/ConfirmReservation";

function App() {
  return (
    <>
      <GlobalStyles />
      {/* <Homepage /> */}
      <div>
        <Header />
        <ConfirmReservation />
        {/* <MakeReservation /> */}
        <Footer />
      </div>

      {/* <header>
        <nav></nav>
      </header>
      <main></main>
      <footer></footer>
      <h1>Little lemon</h1> */}
    </>
  );
}

export default App;
