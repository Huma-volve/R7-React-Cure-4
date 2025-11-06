import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

import NavBar from "./components/ui/navBar";
import Footer from "./components/ui/footer";
import ContactUs from "./pages/ContactUs/ContactUs";
import Booking from "./pages/Booking/Booking";
import Privacy from "./pages/Privacy/Privacy";
import SignUp from "./Auth/signUp";
import SignIn from "./Auth/signIn";
import "./App.css";

export default function App() {
  // ✅ Refresh token logic
  useEffect(() => {
    const refreshTokenIfNewDay = () => {
      const today = new Date().toDateString();
      const lastVisit = localStorage.getItem("lastVisit");
      const refreshToken = localStorage.getItem("refreshToken");

      if (!lastVisit || lastVisit !== today) {
        console.log("🌅 يوم جديد - بنحدث التوكن...");

        if (!refreshToken) {
          console.warn("⚠️ مفيش refresh token محفوظ.");
          return;
        }

        axios
          .post("https://cure-doctor-booking.runasp.net/api/Identity/Accounts/refresh-token", { refreshToken })
          .then((res) => {
            const data = res.data;
            if (data.accessToken) localStorage.setItem("accessToken", data.accessToken);
            if (data.refreshToken) localStorage.setItem("refreshToken", data.refreshToken);
            localStorage.setItem("lastVisit", today);
            console.log("✅ تم تحديث التوكن بنجاح");
          })
          .catch((err) => console.error("❌ فشل في تحديث التوكن:", err));
      } else {
        console.log("🕛 نفس اليوم — مفيش تحديث للتوكن");
      }
    };

    refreshTokenIfNewDay();
  }, []);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
      <Footer />
    </>
  );
}
