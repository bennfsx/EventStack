import React from "react";

import Header from "./partials/Header";

function Home() {
  // Card data
  const cardList = [
    {
      img: "./src/images/plus.png",
      title: "Create Events",
      link: "./eventOrganizer/CreateEvent",
      // description:
      //   "Each event you participate in offers a chance for growth, insight, and reaching your objectives step by step. Register today to begin your path to achievement!",
    },
    {
      img: "./src/images/calendar.png",
      title: "My Events",
      link: "./eventOrganizer/MyEvents",
      // description:
      //   "With each function you host, you'll unlock new potentials for engagement, knowledge sharing, and goal attainment. Register today to elevate your events to new heights!",
    },
    {
      img: "./src/images/user.png",
      title: "My Account",
      link: "/userprofile",
      // description:
      //   "With each function you host, you'll unlock new potentials for engagement, knowledge sharing, and goal attainment. Register today to elevate your events to new heights!",
    },
  ];
  return (
    <>
      <Header />
      <div className="flex flex-col min-h-screen overflow-hidden">
        {/*  Site header */}
        <main className="flex-grow">
          <section className="bg-gradient-to-b from-gray-100 to-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                {/* Page header */}
                <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                  <h1 className="h1">Welcome!</h1>
                </div>
              </div>
              <>
                <div className="cards-container flex justify-center">
                  {cardList.map((card, id) => (
                    <a
                      href={card.link}
                      key={id}
                      className="card-link inline-block mx-4 mb-8"
                    >
                      <div
                        key={id}
                        className="flex flex-col cursor-pointer bg-white justify-center py-6 px-10 text-center items-center mt-12 rounded-tl-[35px] rounded-br-[35px] shadow-2xl md:min-h-[340px] w-full card-item-div max-w-screen-md min-h-[260px] hover:bg-gray-300 transition duration-300 ease-in-out"
                      >
                        <img
                          src={card.img}
                          alt="box_img"
                          className="w-[100px] mb-6"
                        />
                        <p className="text-[24px] font-bold uppercase mb-4">
                          {card.title}
                        </p>
                        <p className="text-[15px] font-medium leading-6">
                          {card.description}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
export default Home;
