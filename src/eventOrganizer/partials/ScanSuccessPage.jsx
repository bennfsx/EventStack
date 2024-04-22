import React from "react";
import { useNavigate } from "react-router-dom"; // If you need to redirect after showing the message

const ScanSuccessPage = () => {
  const navigate = useNavigate();

  // Redirect to another page after showing the success message
  // For example, redirect to the event's main page after 2 seconds
  React.useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/event-main-page"); // Adjust the path as necessary
    }, 2000); // Adjust time as necessary

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <h1>Scan Successful!</h1>
      <p>Your attendance has been confirmed.</p>
      <p>Redirecting...</p>
    </div>
  );
};

export default ScanSuccessPage;
