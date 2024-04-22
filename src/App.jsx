import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import { PrimeReactProvider, PrimeReactContext } from "primereact/api";

import "aos/dist/aos.css";
import "./css/style.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";

import AOS from "aos";

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUpUser from "./pages/SignUpUser";
import SignUpOrganizer from "./pages/SignUpOrganizer";
import ResetPassword from "./pages/ResetPassword";
import UserType from "./pages/UserType";
import EventOrgHome from "./eventOrganizer/Home";
import CreateEvent from "./eventOrganizer/pages/CreateEvent";
import MyEvents from "./eventOrganizer/pages/MyEvents";
import FindEvents from "./registeredUser/pages/FindEvents";
import IndividualEvent from "./registeredUser/pages/IndividualEvent";
import QRCodePage from "./eventOrganizer/components/QRCodePage";

function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  {
    /* for user type cards*/
  }
  <section className=" container mx-auto flex flex-col justify-between gap-2 pb-[20rem]">
    <div className="w-full  px-[2.5rem]">
      {/* about cards */}
      <div className="about-cards flex gap-10 flex-col md:flex-row">
        <UserType />
      </div>
    </div>
  </section>;

  return (
    <>
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signupuser" element={<SignUpUser />} />
        <Route path="/signuporganizer" element={<SignUpOrganizer />} />
        <Route path="/eventorganizer" element={<EventOrgHome />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/eventorganizer/createevent" element={<CreateEvent />} />
        <Route path="/eventorganizer/myevents" element={<MyEvents />} />
        <Route path="/usertype" element={<UserType />} />
        <Route path="/findevents" element={<FindEvents />} />
        <Route
          path="/eventorganizer/qr/:eventId/:eventName"
          element={<QRCodePage />}
        />
        <Route
          path="/findevents/individualevent"
          element={<IndividualEvent />}
        />
      </Routes>
    </>
  );
}

export default App;
