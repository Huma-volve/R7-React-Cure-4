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
import SearchDoctor from "./pages/SearchDoctor/SearchDoctor";
import Chat from "./pages/Chat/Chat";
import DoctorProfile from "./pages/DoctorProfile/DoctorProfile";
import UserProfile from "./pages/UserProfile/UserProfile";
import Settings from "./pages/Settings/Settings";
import Favorites from "./pages/Favorites/Favorites";
import PaymentPage from "./pages/Payment/PaymentPage";
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
        <Route path="/search-doctor" element={<SearchDoctor />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/doctor/:id" element={<DoctorProfile />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
      {!hideNav && <Footer />}
    </>
  );
}
