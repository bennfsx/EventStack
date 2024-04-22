// SuccessScreen.jsx
import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import Header from "../partials/Header";
function SuccessScreen() {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/eventorganizer"); // Navigate to the eventorganizer page
  };

  return (
    <>
      <Header></Header>
      <div className="flex justify-center items-center h-screen">
        <div className="text-center bg-white p-10 rounded-lg shadow-lg">
          <CheckCircleIcon className="w-16 h-16 mx-auto text-green-500" />
          <h2 className="text-2xl font-bold mt-4">Successfully Created!</h2>
          <p className="text-gray-600 mt-2">
            The event has been created successfully. Start spreading the word
            and let the excitement begin!
          </p>
          <button
            onClick={handleContinue} // Attach the navigation function to the button
            className="mt-4 bg-black text-white px-6 py-2 rounded shadow hover:bg-gray-800"
          >
            Continue
          </button>
        </div>
      </div>
    </>
  );
}

export default SuccessScreen;
