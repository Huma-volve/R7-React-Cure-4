//import { useState } from "react";
import SignIn from "./Auth/signIn";
//import Footer from "./components/ui/footer";
import "./App.css";
import { useEffect } from "react";
import NavBar from "./components/ui/navBar";
import SignUp from "./Auth/signUp";
import axios from "axios";
function App() {
  /*refreesh token*/
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
          .post(
            "https://cure-doctor-booking.runasp.net/api/Identity/Accounts/refresh-token",
            { refreshToken }
          )
          .then((res) => {
            const data = res.data;
            if (data.accessToken) {
              localStorage.setItem("accessToken", data.accessToken);
            }
            if (data.refreshToken) {
              localStorage.setItem("refreshToken", data.refreshToken);
            }
            localStorage.setItem("lastVisit", today);
            console.log("✅ تم تحديث التوكن بنجاح");
          })
          .catch((err) => {
            console.error("❌ فشل في تحديث التوكن:", err);
          });
      } else {
        console.log("🕛 نفس اليوم — مفيش تحديث للتوكن");
      }
    };

    refreshTokenIfNewDay();
  }, []);
  return (
    <>
      {/* <NavBar /> */}
      <SignUp />
      {/* <SignIn /> */}
      {/* <Footer /> */}
    </>
  );
}
export default App;
