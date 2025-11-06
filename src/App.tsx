import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/ui/navBar";
import Footer from "./components/ui/footer";
import ContactUs from "./pages/ContactUs/ContactUs";
import Booking from "./pages/Booking/Booking";
import Privacy from "./pages/Privacy/Privacy";
import SignUp from "./Auth/signUp";
import SignIn from "./Auth/signIn";
import Home from "./pages/home/home";
import { useLocation } from "react-router-dom";
import RefrehToken from "./Auth/refrehToken";
import "./App.css";
export default function App() {
  const { pathname } = useLocation();
  const hideNav = ["/signin", "/signup"].includes(pathname);
  useEffect(() => {
    RefrehToken();
  }, []);
  return (
    <>
      {!hideNav && <NavBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
      {!hideNav && <Footer />}
    </>
  );
}
