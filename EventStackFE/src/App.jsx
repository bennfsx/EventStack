import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
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

import { useUser } from "./hooks/useUser";
import { UserProvider } from "./context/UserContext";
import UserProfile from "./eventOrganizer/pages/UserProfile";

function App() {
  const location = useLocation();
  const { user, checkSession } = useUser(); // Provide a default value for user

  useEffect(() => {
    checkSession();
    console.log("user", user);
    console.log("Check SESSINON", checkSession);

    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []); // Include checkSession and user in the dependencies array

  useEffect(() => {
    checkSession();
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  if (user.usertype === "eventattendee") {
    return (
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route path="/signin" element={<SignIn />} /> */}
        {/* <Route path="/signupuser" element={<SignUpUser />} /> */}
        {/* <Route path="/signuporganizer" element={<SignUpOrganizer />} /> */}
        {/* <Route path="/reset-password" element={<ResetPassword />} /> */}
        <Route path="/usertype" element={<UserType />} />
        <Route path="/findevents" element={<FindEvents />} />
        {/* <Route
          path="/eventorganizer/qr/:eventId/:eventName"
          element={<QRCodePage />}
        /> */}
        <Route
          path="/findevents/individualevent"
          element={<IndividualEvent />}
        />
        <Route
          path="/findevents/individualevent/:eventId"
          element={<IndividualEvent />}
        />{" "}
        {/* Update the route path to include the parameter eventId */}
        {/* Routes for different user types */}
        {/* <Route path="/eventorganizer" element={<EventOrgHome />} />
        <Route path="/eventorganizer/createevent" element={<CreateEvent />} />
        <Route path="/eventorganizer/myevents" element={<MyEvents />} /> */}
        <Route path="/userprofile" element={<UserProfile />} />
      </Routes>
    );
  } else if (user.usertype === "eventorganizer") {
    return (
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/reset-password" element={<ResetPassword />} />
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
        <Route
          path="/findevents/individualevent/:eventId"
          element={<IndividualEvent />}
        />{" "}
        {/* Update the route path to include the parameter eventId */}
        {/* Routes for different user types */}
        <Route path="/eventorganizer" element={<EventOrgHome />} />
        <Route path="/eventorganizer/createevent" element={<CreateEvent />} />
        <Route path="/eventorganizer/myevents" element={<MyEvents />} />
        <Route path="/userprofile" element={<UserProfile />} />
      </Routes>
    );
  } else {
    return (
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signupuser" element={<SignUpUser />} />
        <Route path="/signuporganizer" element={<SignUpOrganizer />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/usertype" element={<UserType />} />
        <Route path="/findevents" element={<FindEvents />} />
        <Route
          path="/eventorganizer/qr/:eventId/:eventName"
          element={<QRCodePage />}
        />
        <Route
          path="/findevents/individualevent/:eventid"
          element={<IndividualEvent />}
        />

        {/* Routes for different user types */}
        {/* <Route path="/eventorganizer" element={<EventOrgHome />} />
        <Route path="/eventorganizer/createevent" element={<CreateEvent />} />
        <Route path="/eventorganizer/myevents" element={<MyEvents />} /> */}
      </Routes>
    );
  }
}

function AppWithProvider() {
  return (
    <UserProvider>
      <App />
    </UserProvider>
  );
}

export default AppWithProvider;
