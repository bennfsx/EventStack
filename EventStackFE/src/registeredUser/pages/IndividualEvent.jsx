import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Import useParams hook
import axiosAPI from "../../axiosAPI";
import Header from "../partials/Header";

function IndividualEvent() {
  const [event, setEvent] = useState(null);
  const { eventId } = useParams(); // Extract eventId from URL params

  useEffect(() => {
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

  if (!event) {
    return <div>Loading...</div>;
  }

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
              <p className="text-3xl tracking-tight text-gray-900">
                {event.eventseatcapacity} Seats Available
              </p>

              <form className="mt-10">
                {/* Quantity */}
                <button
                  type="submit"
                  className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-gray-900 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
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
    </>
  );
}

export default IndividualEvent;
