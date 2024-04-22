// import React, { useState, useEffect } from 'react';
// import { Container, Row, Col, Card } from 'react-bootstrap';

// const EventsPage = () => {
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     fetchEvents();
//   }, []);

//   const fetchEvents = async () => {
//     try {
//       const response = await fetch('https://api.example.com/events');
//       const data = await response.json();
//       setEvents(data);
//     } catch (error) {
//       console.error('Error fetching events:', error);
//     }
//   };

//   return (
//     <Container>
//       <h1 className="mt-4 mb-4">Events</h1>
//       <Row>
//         {events.map(event => (
//           <Col key={event.id} md={4} className="mb-4">
//             <Card>
//               <Card.Img variant="top" src={event.image} />
//               <Card.Body>
//                 <Card.Title>{event.title}</Card.Title>
//                 <Card.Text>{event.description}</Card.Text>
//                 <Card.Text>Date: {event.date}</Card.Text>
//                 <Card.Text>Location: {event.location}</Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default EventsPage;

//To do up the events page static first

import React from "react";

import Header from "../../partials/Header";

const posts = [
  {
    id: 1,
    title: "2024 IU H.E.R. WORLD TOUR CONCERT IN SINGAPORE",
    href: "./findevents/individualevent",
    description:
      "IU is coming to our sunny island Singapore with her “2024 IU H.E.R. WORLD TOUR CONCERT after a long time.",
    date: "Apr 20, 2024",
    datetime: "2024-04-20",
    category: { title: "Marketing", href: "./findevents/individualevent" },
    author: {
      // name: "Michael Foster",
      // role: "Co-Founder / CTO",
      href: "./findevents/individualevent",
      imageUrl: "./src/images/iu2.jpg",
    },
  },
  {
    id: 2,
    title: "Taylor Swift The Eras Tour",
    href: "./findevents/individualevent",
    description:
      "An Eras Tour show is over three hours and 15 minutes long, the longest of Swift's career. It consists of 44 songs grouped into 10 acts,[112][119] representing each musical era of her discography.",
    date: "Mar 16, 2024",
    datetime: "2024-03-16",
    category: { title: "Marketing", href: "./findevents/individualevent" },
    author: {
      // name: "Michael Foster",
      // role: "Co-Founder / CTO",
      href: "./findevents/individualevent",
      imageUrl: "./src/images/taylor.png",
    },
  },
  {
    id: 3,
    title: "Coldplay Music of the Spheres",
    href: "./findevents/individualevent",
    description:
      "The Music of the Spheres World Tour is the ongoing eighth concert tour undertaken by British rock band Coldplay. It is being staged in support of their ninth studio album, Music of the Spheres. ",
    date: "Jan 16, 2024",
    datetime: "2024-01-16",
    category: { title: "Marketing", href: "./findevents/individualevent" },
    author: {
      // name: "Michael Foster",
      // role: "Co-Founder / CTO",
      href: "./findevents/individualevent",
      imageUrl: "./src/images/coldplay.jpg",
    },
  },
  // More posts...
];

function FindEvents() {
  return (
    <><Header />
    <div className="container mx-auto px-4 py-8">
      {/* Site header */}
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* Page content */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Upcoming Event
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Explore upcoming events with EventStack!
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-4">
            {posts.map((post) => (
              <article
                key={post.id}
                className="relative overflow-hidden rounded-lg shadow-lg"
                style={{ height: "500px" }}
              >
                <img
                  src={post.author.imageUrl}
                  alt={post.title}
                  className="absolute inset-0 w-full h-full object-cover rounded-lg"
                />
                <div className="relative z-10 flex flex-col justify-end bg-black bg-opacity-50 text-white p-6 h-full">
                  <div className="text-sm">
                    <p className="text-gray-300 leading-none">
                      {post.author.name}
                    </p>
                    <p className="text-gray-300">{post.date}</p>
                  </div>
                  <a href={post.author.href} className="flex-shrink-0">
                    <img
                      className="w-10 h-10 rounded-full"
                      src={post.author.imageUrl}
                      alt={post.author.name}
                    />
                  </a>
                  <a href={post.href} className="block mt-4">
                    <h3 className="text-xl font-semibold">{post.title}</h3>
                    <p className="mt-2 text-base">{post.description}</p>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default FindEvents;
