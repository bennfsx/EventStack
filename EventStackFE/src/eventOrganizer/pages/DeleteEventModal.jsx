import React from "react";
import axiosAPI from "../../axiosAPI"; // Import your Axios instance

const DeleteEventModal = ({ isOpen, onClose, onConfirm, eventid }) => {
  if (!isOpen) return null;

  const handleConfirm = async () => {
    try {
      await axiosAPI.delete(`/api/deleteevent/${eventid}`); // Assuming your backend endpoint is /api/events/:eventId
      onConfirm(); // Call the onConfirm function provided by the parent component
    } catch (error) {
      console.error("Error deleting event:", error);
      // Handle error (e.g., show error message to the user)
    }
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-50"></div>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-8 z-50">
        <h1 className="text-lg font-bold mb-4 text-center">
          Are you sure you want to delete this event?
        </h1>
        <p className="mb-4 text-center">
          This action is permanent and cannot be undone.
        </p>
        <div className="flex justify-center">
          <button
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 mr-2"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            onClick={handleConfirm} // Call handleConfirm when the "Yes, I'm sure" button is clicked
          >
            Yes, I'm sure
          </button>
        </div>
      </div>
    </>
  );
};

export default DeleteEventModal;
