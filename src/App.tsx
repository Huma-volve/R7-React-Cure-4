//import { useState } from "react";
//import SignIn from "./signIn";
import Footer from "./components/ui/footer";
import "./App.css";
import NavBar from "./components/ui/navBar";
import AppointmentPage from "./components/ui/AppointmentPage";
// import Payment from "./components/ui/Payment";
// import RatingPopup from "./components/ui/RatingPopup";
function App() {
  //   const [open, setOpen] = useState(false);
  // const handleSubmit = async ({ rating, review }: { rating: number; review: string }) => {
   
  //   console.log("submit", rating, review);
  //}
  return (
    <>
     {/* <button className="rounded bg-blue-600 px-4 py-2 text-white" onClick={() => setOpen(true)}>
        Rate Doctor
      </button> */}

      <NavBar />
      <AppointmentPage />
      {/* <Payment />
      <RatingPopup /> */}
      {/* <RatingPopup open={open} onClose={() => setOpen(false)} onSubmit={handleSubmit}  /> */}
      {/* <SignIn /> */}
      <Footer />
    </>
  );
}

export default App;
