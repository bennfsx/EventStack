import React, { useState } from "react";
import Header from "../partials/Header";
import { Calendar } from "primereact/calendar";
import axiosAPI from "../../axiosAPI";
import { format } from "date-fns";
import { PhotoIcon } from "@heroicons/react/24/solid";
import style from "./CreateEvent.module.css";
import SuccessScreen from "../partials/SuccessScreen";

function CreateEvent() {
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [datetime12h, setDateTime12h] = useState("");
  const [previewImage, setPreviewImage] = useState(null);
  const [eventSeat, setEventSeat] = useState("");
  const [launchDate, setLaunchDate] = useState("");
  const [eventVenue, setEventVenue] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [eventAddress, setEventAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [isEventCreated, setIsEventCreated] = useState(false);
  const [eventNameError, setEventNameError] = useState("");

  // const handleFileUpload = (event) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setPreviewImage(reader.result);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const dataBuffer = new Uint8Array(reader.result);
        const response = await uploadImageToBackend(dataBuffer, file.name);
        console.log("Uploaded image URL:", response.url);
        // You can handle the response URL as needed
      };
      reader.readAsArrayBuffer(file);
    }
  };

  const uploadImageToBackend = async (dataBuffer, filename) => {
    try {
      const formData = new FormData();
      formData.append("file", new Blob([dataBuffer]), filename);

      const response = await fetch("/upload-image", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to upload image");
      }

      return response.json();
    } catch (error) {
      console.error("Error uploading image to backend:", error);
      throw error;
    }
  };

  const clearPreviewImage = () => {
    setPreviewImage(null);
  };

  const handleEventCreation = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("eventname", eventName);
    formData.append("eventdescription", eventDescription);
    formData.append(
      "eventdatetime",
      format(datetime12h, "yyyy-MM-dd HH:mm:ss")
    );
    formData.append("imageurl", previewImage);
    formData.append("eventseatcapacity", eventSeat);
    formData.append("eventlaunchdate", format(launchDate, "yyyy-MM-dd"));
    formData.append("eventvenue", eventVenue);
    formData.append("eventaddress", eventAddress);
    formData.append("city", city);
    formData.append("state", state);
    formData.append("postalcode", postalCode);

    try {
      const response = await axiosAPI.post("/api/createevent", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setIsEventCreated(true);
      console.log(response);
    } catch (error) {
      if (error.response && error.response.status === 409) {
        setEventNameError("Event name already exists");
      } else {
        console.error("Error creating Event:", error.response);
      }
    }
  };

  if (isEventCreated) {
    return <SuccessScreen />;
  }

  return (
    <>
      <Header />
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="text-center pb-12 md:pb-16">
          <h1
            className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
            data-aos="zoom-y-out"
          >
            Let's Start Building
            <p
              className="text-xl text-gray-600 mb-8"
              data-aos="zoom-y-out"
              data-aos-delay="150"
            >
              Powering Your Events, Connecting Communities
            </p>
          </h1>
        </div>
        <div className={style.container}>
          <form onSubmit={handleEventCreation}>
            <div className="space-y-12 ">
              <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base font-semibold leading-7 text-gray-900 text-3xl">
                  Create And Host An Event
                </h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  This information will be displayed publicly so be careful what
                  you share.
                </p>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-4">
                    <label
                      htmlFor="eventName"
                      className="block text-xl font-medium leading-6 text-gray-900"
                    >
                      Event Name
                    </label>
                    <div className="mt-2">
                      <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <input
                          type="text"
                          name="eventName"
                          id="eventName"
                          autoComplete="eventName"
                          className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                          placeholder="Taylor Swift Era Tour"
                          style={{ fontSize: "17px" }}
                          value={eventName}
                          required
                          onChange={(e) => setEventName(e.target.value)}
                        />
                        {eventNameError && (
                          <div className="text-red-500">{eventNameError}</div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="about"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Event Description
                    </label>
                    <div className="mt-2">
                      <textarea
                        id="eventDescription"
                        name="eventDescription"
                        rows={3}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        defaultValue={""}
                        onChange={(e) => setEventDescription(e.target.value)}
                      />
                    </div>
                    <p className="mt-3 text-sm leading-6 text-gray-600">
                      Write a few sentences about the event.
                    </p>
                  </div>

                  <div className="sm:col-span-4">
                    <label
                      htmlFor="eventName"
                      className="block text-xl font-medium leading-6 text-gray-900"
                    >
                      Event Date Time
                    </label>
                    <div className="flex items-center mt-2">
                      <Calendar
                        className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md"
                        value={datetime12h}
                        onChange={(e) =>
                          setDateTime12h(format(e.value, "yyyy-MM-dd HH:mm:ss"))
                        }
                        showTime
                        hourFormat="12"
                        required
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 ml-2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="cover-photo"
                      className="block text-xl font-medium leading-6 text-gray-900"
                    >
                      Upload Image
                    </label>
                    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 relative">
                      {/* Preview the image if available */}
                      {previewImage && (
                        <>
                          <img
                            src={previewImage}
                            alt="Preview"
                            className="mx-auto h-auto max-w-full"
                          />
                          <button
                            type="button"
                            className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md hover:bg-gray-100 focus:outline-none"
                            onClick={clearPreviewImage}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-gray-600"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M14.293 5.293a1 1 0 1 0-1.414-1.414L10 8.586 6.121 4.707a1 1 0 0 0-1.414 1.414L8.586 10l-3.879 3.879a1 1 0 1 0 1.414 1.414L10 11.414l3.879 3.879a1 1 0 1 0 1.414-1.414L11.414 10l3.879-3.879z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>
                        </>
                      )}
                      {!previewImage && (
                        <div className="text-center">
                          <PhotoIcon
                            className="mx-auto h-12 w-12 text-gray-300"
                            aria-hidden="true"
                          />
                          <div className="mt-4 flex text-sm leading-6 text-gray-600">
                            <label
                              htmlFor="file-upload"
                              className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                            >
                              <span>Upload a file</span>
                              <input
                                id="file-upload"
                                name="file-upload"
                                type="file"
                                className="sr-only"
                                onChange={handleFileUpload} // Call handleFileUpload function on file change
                                required
                              />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          <p className="text-xs leading-5 text-gray-600">
                            PNG, JPG, GIF up to 10MB
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-4">
                    <label
                      htmlFor="eventCapacity"
                      className="block text-xl font-medium leading-6 text-gray-900"
                    >
                      Event Seat Capacity
                    </label>
                    <div className="mt-2">
                      <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <input
                          type="text"
                          name="eventCapacity"
                          id="eventCapacity"
                          className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                          placeholder="250"
                          style={{ fontSize: "17px" }}
                          value={eventSeat}
                          required
                          onChange={(e) => setEventSeat(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <div className="sm:col-span-4">
                  <label
                    htmlFor="eventName"
                    className="block text-xl font-medium leading-6 text-gray-900"
                  >
                    Event Launch Date
                  </label>
                  <div className="flex items-center mt-2">
                    <Calendar
                      value={launchDate}
                      onChange={(e) =>
                        setLaunchDate(format(e.value, "yyyy-MM-dd"))
                      }
                      dateFormat="dd/mm/yy"
                      required
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 ml-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base text-3xl font-semibold leading-7 text-gray-900">
                  Event Location
                </h2>
                <p className="mt-1 text-medium leading-6 text-gray-600">
                  Where will the event be hosted?
                </p>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="country"
                      className="block text-xl font-medium leading-6 text-gray-900"
                    >
                      Event Venue
                    </label>
                    <div className="mt-2">
                      <select
                        id="eventVenue"
                        name="eventVenue"
                        autoComplete="eventVenue-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        style={{ fontSize: "17px" }}
                        value={eventVenue}
                        onChange={(e) => setEventVenue(e.target.value)} // Update eventVenue state when an option is selected
                        required
                      >
                        <option value="">Select venue...</option>
                        <option value="Singapore Stadium">
                          Singapore Stadium
                        </option>
                        <option value="Kallang Indoor Statdium">
                          Kallang Indoor Stadium
                        </option>
                        <option value="Esplanade Concert Hall">
                          Esplanade Concert Hall
                        </option>
                        <option value="Marina Bay Sands">
                          Marina Bay Sands
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="street-address"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Event address
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="eventAddress"
                        id="eventAddress"
                        autoComplete="eventAddress"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        style={{ fontSize: "17px" }}
                        value={eventAddress}
                        required
                        onChange={(e) => setEventAddress(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2 sm:col-start-1">
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      City
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="city"
                        id="city"
                        autoComplete="address-level2"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        style={{ fontSize: "17px" }}
                        value={city}
                        required
                        onChange={(e) => setCity(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="region"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      State / Province
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="region"
                        id="region"
                        autoComplete="address-level1"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        style={{ fontSize: "17px" }}
                        value={state}
                        required
                        onChange={(e) => setState(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="postal-code"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      ZIP / Postal code
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="postal-code"
                        id="postal-code"
                        autoComplete="postal-code"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        style={{ fontSize: "17px" }}
                        value={postalCode}
                        required
                        onChange={(e) => setPostalCode(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-b border-gray-900/10 pb-12 ">
                <h2 className="text-base font-semibold leading-7 text-gray-900 text-xl">
                  Notifications
                </h2>
                <p className="mt-1 text-medium leading-6 text-gray-600">
                  We'll always let you know about important changes, but you
                  pick what else you want to hear about.
                </p>

                <div className="mt-10 space-y-10">
                  <fieldset>
                    <legend className="text-xl font-semibold leading-6 text-gray-900">
                      By Email
                    </legend>
                    <div className="mt-6 space-y-6">
                      <div className="relative flex gap-x-3">
                        <div className="flex h-6 items-center">
                          <input
                            id="comments"
                            name="comments"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                        </div>
                        <div className="text-sm leading-6">
                          <label
                            htmlFor="comments"
                            className="font-medium text-gray-900"
                          >
                            Seating Capacity
                          </label>
                          <p className="text-gray-500">
                            Get notified when seating capacity is at 75%.
                          </p>
                        </div>
                      </div>
                      <div className="relative flex gap-x-3">
                        <div className="flex h-6 items-center">
                          <input
                            id="candidates"
                            name="candidates"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                        </div>
                        <div className="text-sm leading-6">
                          <label
                            htmlFor="candidates"
                            className="font-medium text-gray-900"
                          >
                            Fully Booked
                          </label>
                          <p className="text-gray-500">
                            Get notified when event is fully booked.
                          </p>
                        </div>
                      </div>
                      <div className="relative flex gap-x-3">
                        <div className="flex h-6 items-center">
                          <input
                            id="offers"
                            name="offers"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                        </div>
                        <div className="text-sm leading-6">
                          <label
                            htmlFor="offers"
                            className="font-medium text-gray-900"
                          >
                            Others
                          </label>
                          <p className="text-gray-500">
                            Customized Event Notifications.
                          </p>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                  <fieldset>
                    <legend className="text-sm font-semibold leading-6 text-gray-900">
                      Push Notifications
                    </legend>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      These are delivered via SMS to your mobile phone.
                    </p>
                    <div className="mt-6 space-y-6">
                      <div className="flex items-center gap-x-3">
                        <input
                          id="push-everything"
                          name="push-notifications"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label
                          htmlFor="push-everything"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Everything
                        </label>
                      </div>
                      <div className="flex items-center gap-x-3">
                        <input
                          id="push-email"
                          name="push-notifications"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label
                          htmlFor="push-email"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Same as email
                        </label>
                      </div>
                      <div className="flex items-center gap-x-3">
                        <input
                          id="push-nothing"
                          name="push-notifications"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label
                          htmlFor="push-nothing"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          No push notifications
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button
                type="button"
                className="text-medium font-semibold leading-6 text-gray-900"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="text-medium rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateEvent;
