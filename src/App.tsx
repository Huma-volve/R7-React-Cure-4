//import { useState } from "react";
// import SignIn from "./signIn";
import { Routes, Route } from "react-router-dom";

//import Footer from "./components/ui/footer";
import "./App.css";
import NavBar from "./components/ui/navBar";
// import About from "./components/About";
import ContactUs from "./pages/ContactUs/ContactUs.tsx";
import Booking from "./pages/Booking/Booking.tsx";
import Privacy from "./pages/Privacy/Privacy.tsx";

import Footer from "./components/ui/footer.tsx";
import SearchDoctor from "./pages/SearchDoctor/SearchDoctor.tsx";

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/contact" element={<ContactUs />} />
                {/* <Route path="/" element={<Home />} /> dont forget import the component */}
                <Route path="/booking" element={<Booking />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/Search-Doctor" element={<SearchDoctor />} />
            </Routes>
            {/* <SignIn /> */}
            <Footer />
        </>
    );
}

export default App;
