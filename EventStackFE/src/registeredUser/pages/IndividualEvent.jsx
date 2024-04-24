import { useState } from "react";
import { InputNumber } from "@preline/input-number";

import Header from "../partials/Header";
// import SummaryModal from "./SummaryModal";

const product = {
  name: "IU H.E.R. WORLD TOUR CONCERT IN SINGAPORE",
  price: "$178",
  href: "#",
  // breadcrumbs: [
  //   { id: 1, name: "Men", href: "#" },
  //   { id: 2, name: "Clothing", href: "#" },
  // ],
  images: [
    {
      src: "https://static.ticketmaster.sg/images/activity/24sg_iu2024_ac516b9831976ec0b047eeaa54d4d86e.jpg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
  ],
  description:
    'IU is coming to our sunny island Singapore with her “2024 IU H.E.R. WORLD TOUR CONCERT" after a long time.',
  highlights: [
    "Ticket Pricing excludes Booking Fee. Booking Fee is as follows:",
    "$5 booking fee per ticket for tickets $50 and above",
    "$3 booking fee per ticket for tickets between $20 and $49.99",
    "$1 booking fee per ticket for tickets priced below $20.00",
  ],
  details:
    'IU is coming to our sunny island Singapore with her “2024 IU H.E.R. WORLD TOUR CONCERT" after a long time. Since her debut in 2008, IU has established herself as an unrivaled top artist in the Korean music industry based on her strong singing ability and creative activities. Since her debut, IU has continued to develop her music producing skills and has explored various possibilities. As a result, each song released received favorable reviews for being diverse and touching, topping the music charts in Korea. Her representative songs include <YOU & I>, <Blueming>, and <Good Day>. She always expresses her passion for music on stage, and each song exudes a different charm, capturing the hearts of her fans.',
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function IndividualEvent() {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [selectedEvent, setSelectedEvent] = useState(null);
  // const [selectedColor, setSelectedColor] = useState(product.colors[0])
  // const [selectedSize, setSelectedSize] = useState(product.sizes[2])
  const [quantity, setQuantity] = useState(0);

  // Handle changes to the input
  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  // const openModal = (event) => {
  //   setSelectedEvent(event);
  //   setIsModalOpen(true);
  // };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };

  // const confirmDelete = async () => {
  //   // Ensure you have the event ID to delete
  //   if (selectedEvent?.eventID) {
  //     await handleDeleteEvent(selectedEvent.eventID);
  //     closeModal(); // Close the modal
  //   }
  // };

  return (
    <><Header />
    <div className="bg-white">
      {/* Site header */}
      
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* <SummaryModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={confirmDelete}
      /> */}
      {/* Page content */}

      <div className="pt-6">
        <div className="flex justify-center items-center w-full">
          <div className="overflow-hidden rounded-lg">
            <img
              src={product.images[0].src}
              alt={product.images[0].alt}
              className="object-cover object-center"
              style={{ maxHeight: "80vh" }}
            />
          </div>
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {product.name}
            </h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">
              {product.price}
            </p>

            <form className="mt-10">
              {/* Quantity */}
              <div
                className="py-2 px-3 bg-white border border-gray-200 rounded-lg dark:bg-slate-900 dark:border-gray-700"
                data-hs-input-number
              >
                <div className="w-full flex justify-between items-center gap-x-3">
                  <div>
                    <span className="block font-medium text-lg text-gray-800 dark:text-white">
                      Quantity
                    </span>
                  </div>
                  <div className="flex items-center gap-x-1.5">
                    <button
                      type="button"
                      className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      data-hs-input-number-decrement
                    >
                      <svg
                        className="flex-shrink-0 size-3.5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                      </svg>
                    </button>
                    <input
                      className="p-0 w-6 bg-transparent border-0 text-gray-800 text-center focus:ring-0 dark:text-white"
                      type="text"
                      value={quantity}
                      onChange={handleQuantityChange} // Add the onChange handler
                      data-hs-input-number-input
                    />
                    <button
                      type="button"
                      className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      data-hs-input-number-increment
                    >
                      <svg
                        className="flex-shrink-0 size-3.5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5v14" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-gray-900 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Reserve
              </button>
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{product.description}</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-400">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{product.details}</p>
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
