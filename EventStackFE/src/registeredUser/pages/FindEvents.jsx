import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axiosAPI from "../../axiosAPI";
import Header from "../../partials/Header";

function FindEvents() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axiosAPI.post("/api/getallevent");
      setEvents(response.data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Upcoming Events
              </h2>
              <p className="mt-2 text-lg leading-8 text-gray-600">
                Explore upcoming events with EventStack!
              </p>
            </div>
            <div className="mx-auto mt-10 grid max-w-lg grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-4">
              {events.map((event) => {
                console.log(event); // Log the event object for debugging
                return (
                  <article
                    key={event.eventname}
                    className="relative overflow-hidden rounded-lg shadow-lg"
                    style={{ height: "500px" }}
                  >
                    <img
                      src={event.imageurl}
                      alt={event.eventname}
                      className="absolute inset-0 w-full h-full object-cover rounded-lg"
                    />
                    <div className="relative z-10 flex flex-col justify-end bg-black bg-opacity-50 text-white p-6 h-full">
                      <div className="text-sm">
                        <p className="text-gray-300 leading-none">
                          {event.eventdatetime}
                        </p>
                      </div>
                      <Link
                        to={`/findevents/individualevent/${event.eventid}`}
                        className="flex-shrink-0"
                      >
                        <img
                          className="w-10 h-10 rounded-full"
                          src={event.imageurl}
                          alt={event.eventname}
                        />
                      </Link>
                      <Link
                        to={`/findevents/individualevent/${event.eventid}`}
                        className="block mt-4"
                      >
                        <h3 className="text-xl font-semibold">
                          {event.eventname}
                        </h3>
                        <p className="mt-2 text-base">
                          {event.eventdescription}
                        </p>
                        <p className="mt-2 text-base">
                          Date: {event.eventdatetime}
                        </p>
                        <p className="mt-2 text-base">
                          Venue: {event.eventvenue}
                        </p>
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FindEvents;
