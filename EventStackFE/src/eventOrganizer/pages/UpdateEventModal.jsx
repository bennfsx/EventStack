import React, { useState } from "react";
import axiosAPI from "../../axiosAPI";

const UpdateEventModal = ({
  isOpen,
  onClose,
  event,
  selectedEventForUpdate,
  onUpdateSuccess, // Add onUpdateSuccess prop for data refresh
}) => {
  const [formData, setFormData] = useState({
    eventName: event?.eventname || "",
    eventDescription: event?.eventdescription || "",
    eventLaunchDate: event?.eventlaunchdate || "",
    status: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!selectedEventForUpdate) {
        console.error("No event selected for update");
        return;
      }

      const updatedEventData = {
        eventid: selectedEventForUpdate.eventid,
        eventname: formData.eventName,
        eventdescription: formData.eventDescription,
        eventlaunchdate: formData.eventLaunchDate,
      };

      const response = await axiosAPI.patch(
        `/api/updatebyid/${selectedEventForUpdate.eventid}`,
        updatedEventData
      );

      console.log("Event updated successfully:", response.data);

      // Call the onUpdateSuccess callback to trigger data refresh
      onUpdateSuccess();

      onClose();
    } catch (error) {
      console.error("Error updating event:", error);
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-50"></div>
      )}
      <div
        className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-8 z-50 ${
          isOpen ? "" : "hidden"
        }`}
      >
        <h1 className="text-lg font-bold mb-4 text-center">Update Event</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="eventName"
              className="block text-sm font-medium mb-1"
            >
              Event Name
            </label>
            <input
              type="text"
              id="eventName"
              name="eventName"
              value={formData.eventName}
              onChange={handleChange}
              className="w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="eventDescription"
              className="block text-sm font-medium mb-1"
            >
              Event Description
            </label>
            <textarea
              id="eventDescription"
              name="eventDescription"
              value={formData.eventDescription}
              onChange={handleChange}
              className="w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              htmlFor="eventLaunchDate"
              className="block text-sm font-medium mb-1"
            >
              Event Launch Date
            </label>
            <input
              type="date"
              id="eventLaunchDate"
              name="eventLaunchDate"
              value={formData.eventLaunchDate}
              onChange={handleChange}
              className="w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="status" className="block text-sm font-medium mb-1">
              Status
            </label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">Select Status</option>
              <option value="Active">Active</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 mr-2"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateEventModal;
