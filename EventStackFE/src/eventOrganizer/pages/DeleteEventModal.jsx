// DeleteEventModal.jsx

import React from "react";

const DeleteEventModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

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
            onClick={onClose} // This should close the modal without doing anything else
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            onClick={onConfirm} // This should trigger the deletion process
          >
            Yes, I'm sure
          </button>
        </div>
      </div>
    </>
  );
};

export default DeleteEventModal;
