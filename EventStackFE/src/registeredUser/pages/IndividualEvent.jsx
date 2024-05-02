import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Import useParams hook
import axiosAPI from "../../axiosAPI";
import Header from "../partials/Header";
import { useUser } from "../../hooks/useUser";

function IndividualEvent() {
  const [event, setEvent] = useState(null);
  const [quantity, setQuantity] = useState(1); // State for quantity of tickets
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal open/close
  const { eventId } = useParams(); // Extract eventId from URL params
  const { user } = useUser();

  useEffect(() => {
    console.log(user);
    const fetchEventById = async () => {
      try {
        const response = await axiosAPI.post(`/api/geteventbyid/${eventId}`);
        setEvent(response.data.event);
      } catch (error) {
        console.error("Error fetching event:", error);
      }
    };

    fetchEventById();
  }, [eventId]);

  const handleQuantityChange = (value) => {
    // Update quantity based on + and - button clicks
    const newQuantity = Math.min(Math.max(1, quantity + value), 4); // Ensure quantity is between 1 and 4
    setQuantity(newQuantity);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (!event) {
    return <div>Loading...</div>;
  }

  const confirmBooking = async () => {
    try {
      const response = await axiosAPI.put(`/api/reserveeventbyid/${eventId}`, {
        userId: user.userId,
        quantity: quantity,
        // venueId: event.venueId,
        // sessionDetails: event.sessionDetails,
        bookingDate: new Date(),
        bookingTime: new Date().toISOString(),
        bookingStatus: "Confirmed",
      });

      // Check if the booking was successful
      if (response.status === 200) {
        // Display a success message or take any other appropriate action
        console.log("Booking confirmed successfully");
      } else {
        // Display an error message or take any other appropriate action
        console.error("Error confirming booking:", response.data.error);
      }
    } catch (error) {
      // Handle any errors that occur during the request
      console.error("Error confirming booking:", error);
    } finally {
      closeModal(); // Close the modal regardless of the outcome
    }
  };

  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      <br />

      <div className="bg-white">
        {/* Page content */}
        <div className="pt-6">
          <div className="flex justify-center items-center w-full">
            <div className="overflow-hidden rounded-lg">
              <img
                src={event.imageurl}
                alt={event.eventname}
                className="object-cover object-center"
                style={{ maxHeight: "80vh" }}
              />
            </div>
          </div>

          {/* Event info */}
          <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {event.eventname}
              </h1>
            </div>

            {/* Event details */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Event information</h2>
              <div className="flex items-center">
                <p className="text-3xl tracking-tight text-gray-900 mr-4">
                  {event.eventseatcapacity} Seats Available
                </p>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md"
                  >
                    -
                  </button>
                  <span>{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md"
                  >
                    +
                  </button>
                </div>
              </div>

              <form className="mt-10">
                {/* Quantity */}
                <button
                  onClick={openModal}
                  type="button"
                  className="mt-4 flex w-full items-center justify-center rounded-md border border-transparent bg-gray-900 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Reserve
                </button>
              </form>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Event description and details */}
              <div>
                <h3 className="sr-only">Description</h3>
                <div className="space-y-6">
                  <p className="text-base text-gray-900">
                    {event.eventdescription}
                  </p>
                </div>
              </div>
              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">Details</h3>
                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">
                    Date: {new Date(event.eventdatetime).toLocaleDateString()}
                  </p>
                  <p className="text-sm text-gray-600">
                    Venue: {event.eventvenue}
                  </p>
                  <p className="text-sm text-gray-600">
                    Address: {event.eventaddress}
                  </p>
                  <p className="text-sm text-gray-600">City: {event.city}</p>
                  <p className="text-sm text-gray-600">State: {event.state}</p>
                  <p className="text-sm text-gray-600">
                    Postal Code: {event.postalcode}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                    {/* Heroicon name: outline/check */}
                    <svg
                      className="h-6 w-6 text-green-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      className="text-lg leading-6 font-medium text-gray-900"
                      id="modal-title"
                    >
                      Confirm Booking
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Are you sure you want to confirm the booking for{" "}
                        {quantity} ticket(s) for {event.eventname} on{" "}
                        {new Date(event.eventdatetime).toLocaleDateString()}?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  onClick={closeModal}
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmBooking}
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default IndividualEvent;
