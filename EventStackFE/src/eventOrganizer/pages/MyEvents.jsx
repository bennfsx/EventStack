import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../partials/Header";
import DeleteEventModal from "./DeleteEventModal";
import axiosAPI from "../../axiosAPI";
import { format, parseISO, isPast } from "date-fns";

import {
  AiOutlineQrcode,
  AiOutlineEye,
  AiOutlineEdit,
  AiOutlineDelete,
} from "react-icons/ai";

function MyEvents() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [eventID, setEventId] = useState("");
  const [eventName, setEventName] = useState("");
  const [launchDate, setLaunchDate] = useState("");
  const [events, setEvents] = useState([]);

  const navigate = useNavigate();

  // Refactor the fetching logic into a standalone function
  const fetchEvents = async () => {
    try {
      const response = await axiosAPI.post("/api/getallevent");
      // const filteredEvents = response.data.map((event) => ({
      //   eventID: event.eventID,
      //   eventDescription: event.eventDescription,
      //   eventName: event.eventName,
      //   launchDate: event.launchDate,
      // }));
      setEvents(response.data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  useEffect(() => {
    // Call fetchEvents when the component mounts
    fetchEvents();
  }, []);

  const handleDeleteEvent = async (eventID) => {
    try {
      const requestBody = { eventID: eventID };
      const response = await axiosAPI.delete("/deleteevent", {
        data: requestBody,
      });
      console.log("Event deleted successfully", response.data);
      // Refresh the events list or handle UI update
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  };

  const openModal = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const confirmDelete = async () => {
    // Ensure you have the event ID to delete
    if (selectedEvent?.eventID) {
      await handleDeleteEvent(selectedEvent.eventID);
      closeModal(); // Close the modal
    }
  };

  const handleGenerateQR = (eventId, eventName) => {
    console.log(
      `Navigating to QR code page for event ID: ${eventId}, name: ${eventName}`
    );
    navigate(`/eventorganizer/qr/${eventId}/${encodeURIComponent(eventName)}`);
  };

  const determineStatus = (launchDate) => {
    const eventDate = parseISO(launchDate);
    return isPast(eventDate) ? "Completed" : "Active";
  };

  const ActionIcons = ({ event }) => {
    return (
      <div className="flex items-center justify-center space-x-2">
        <AiOutlineQrcode
          className="cursor-pointer"
          title="Generate QR Code"
          size={30}
          color="#D882BC"
          onClick={() => handleGenerateQR(event.eventid, event.eventname)}
        />
        <AiOutlineEye
          className="cursor-pointer"
          title="View"
          size={30}
          color="#D882BC"
        />
        <AiOutlineEdit
          className="cursor-pointer"
          title="Edit"
          size={30}
          color="#D882BC"
        />
        <AiOutlineDelete
          className="cursor-pointer"
          title="Delete"
          size={30}
          color="#D882BC"
          onClick={() => openModal(event)}
        />
      </div>
    );
  };

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <br />
        <br />
        <br />
        <br />
        <div className="text-base font-semibold leading-7 text-gray-900 text-4xl">
          <h1>My Events</h1>
        </div>
        <div className="border-b border-gray-900/10 pb-12"></div>
        <br />

        <DeleteEventModal
          isOpen={isModalOpen}
          onClose={closeModal}
          onConfirm={confirmDelete}
        />
        <table className="w-full text-lg text-left text-gray-800 dark:text-gray-400">
          <thead className="text-lg text-gray-900 bg-gray-50 dark:bg-gray-700">
            <tr>
              <th scope="col" className="px-6 py-3">
                Event ID
              </th>
              <th scope="col" className="px-6 py-3">
                Event Name
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Event Launch Date
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {events.map((event, index) => (
              <tr
                key={event.eventID}
                className={`${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } border-b dark:border-gray-700`}
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-800 whitespace-nowrap dark:text-white"
                >
                  {event.eventid}
                </th>
                <td className="px-6 py-4">{event.eventname}</td>
                <td className="px-6 py-4">{event.eventdescription}</td>

                <td className="px-6 py-4">
                  {format(parseISO(event.eventlaunchdate), "dd-MM-yyyy")}
                </td>
                <td className="px-6 py-4">
                  {determineStatus(event.eventlaunchdate)}
                </td>
                {/* Assuming a default status */}
                <td className="px-6 py-4">
                  <ActionIcons event={event} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MyEvents;
