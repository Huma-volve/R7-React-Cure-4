//import { useState } from "react";
import SignIn from "./signIn";
import { Routes, Route } from "react-router-dom";

//import Footer from "./components/ui/footer";
import "./App.css";
import NavBar from "./components/ui/navBar";
// import About from "./components/About";
import Contact from "./pages/contactUs/contactUs";
import Booking from "./pages/Booking/Booking.jsx";

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/contact" element={<Contact />} />
                {/* <Route path="/" element={<Home />} /> dont forget import the component */}
                <Route path="/booking" element={<Booking />} />
                {/* <Route path="/contact" element={<Contact />} /> */}
                {/* <Route path="/contact" element={<Contact />} /> */}
            </Routes>
            {/* <SignIn /> */}
            {/* <Footer /> */}
        </>
    );
}

export default App;
