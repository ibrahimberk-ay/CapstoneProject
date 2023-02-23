import "./App.css";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Reservations from "./pages/Reservations";
import Orderonline from "./pages/Orderonline";
import Login from "./pages/Login";
import Nav from "./components/Nav/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="app__main">
        <BrowserRouter>
          <nav>
            <Nav />
          </nav>

          <Routes>
            <Route index element={<Home />} />
            <Route path="menu" element={<Menu />} />
            <Route path="about" element={<About />} />
            <Route path="reservations" element={<Reservations />} />
            <Route path="orderonline" element={<Orderonline />} />
            <Route path="login" element={<Login />} />
          </Routes>
        </BrowserRouter>

        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;
