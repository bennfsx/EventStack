CREATE TABLE Users (
    UserID SERIAL PRIMARY KEY,
    UserType VARCHAR(15),
    Email VARCHAR(50) UNIQUE,
    Password VARCHAR(255)
);

CREATE TABLE EventAttendee (
    AttendeeID SERIAL PRIMARY KEY,
    UserID INT,
    UserType VARCHAR(255),
    Email VARCHAR(255),
    FirstName VARCHAR(255),
    LastName VARCHAR(255),
    Mobile VARCHAR(255),
    FOREIGN KEY (UserID) REFERENCES Users(UserID),
    FOREIGN KEY (Email) REFERENCES Users(Email)
);

ERROR:  there is no unique constraint matching given keys for referenced table "users"


INSERT INTO Users (UserType, Email, Password) VALUES
('admin', 'admin@test.com', 'password'),
('eventattendee', 'attendee@test.com', 'password'),
('eventorganizer', 'organizer@test.com', 'password');


CREATE TABLE EventAttendee (
    AttendeeID SERIAL PRIMARY KEY,
    UserID INT,
    UserType VARCHAR(255),
    Email VARCHAR(255),
    FirstName VARCHAR(255),
    LastName VARCHAR(255),
    FOREIGN KEY (UserID) REFERENCES Users(UserID),
    FOREIGN KEY (UserType) REFERENCES Users(UserType)
);

CREATE TABLE EventAttendee (
    AttendeeID SERIAL PRIMARY KEY,
    UserID INT,
    UserType VARCHAR(255),
    Email VARCHAR(255),
    FirstName VARCHAR(255),
    LastName VARCHAR(255),
    DOB DATE,
    Phone VARCHAR(255),
    Country VARCHAR(255),
    Address VARCHAR(255),
    PostalCode VARCHAR(10),
    FOREIGN KEY (UserID) REFERENCES Users(UserID),
    FOREIGN KEY (UserType) REFERENCES Users(UserType),
    FOREIGN KEY (Email) REFERENCES Users(Email)
);



CREATE TABLE EventOrganizer(
    EventOrganizerID SERIAL PRIMARY KEY,
    UserID INT,
    UserType VARCHAR(255),
    Email VARCHAR(255),
    UENnumber VARCHAR(255),
    CompanyName VARCHAR(255),
    Status VARCHAR(10),
    Phone VARCHAR(255),
    Country VARCHAR(255),
    Address VARCHAR(255),
    PostalCode VARCHAR(10),
    FOREIGN KEY (UserID) REFERENCES Users(UserID),
    FOREIGN KEY (Email) REFERENCES Users(Email)
);

CREATE TABLE EVENT(
      EventID SERIAL PRIMARY KEY,
      EventOrganizerID INT,
      EventName VARCHAR(255),
      EventDescription VARCHAR(255),
      EventDateTime Timestamp,
      ImageURL VARCHAR(255),
      EventSeatCapacity INT,
      EventLaunchDate DATE,
      EventVenue VARCHAR(255),
      EventAddress VARCHAR(255),
      City VARCHAR(255),
      State VARCHAR(255),
      PostalCode VARCHAR(10),
      FOREIGN KEY (EventOrganizerID) REFERENCES EventOrganizer(EventOrganizerID)
      );

CREATE TABLE BOOKINGS(
  BookingID SERIAL PRIMARY KEY,
  EventID INT,
  VenueID INT,
  userid INT,
  SessionDetails VARCHAR(255),
  BookingsDetails VARCHAR(255),
  BookingDate DATE,
  BookingTime Timestamp,
  BookingStatus VARCHAR(255),
  FOREIGN KEY (EventID) REFERENCES EVENT(EventID),
  FOREIGN KEY (VenueID) REFERENCES VENUE(VenueID),
  FOREIGN KEY (SessionDetails) REFERENCES EVENTSESSION(SessionDetails)
);

CREATE TABLE VENUE(
  VenueID SERIAL PRIMARY KEY,
  VenueName VARCHAR(255),
  VenueCapacity INT,
  VenueImage VARCHAR(255)
);

CREATE TABLE EVENTSESSION(
  EventSessionID SERIAL PRIMARY KEY,
  EventID INT,
  VenueID INT,
  SessionDate Date,
  SessionTime Timestamp,
  SessionDetails VARCHAR(255) UNIQUE ,
  FOREIGN KEY (EventID) REFERENCES EVENT(EventID),
  FOREIGN KEY (VenueID) REFERENCES VENUE(VenueID)
);

CREATE TABLE EVENTATTENDANCE(
  EventAttendanceID SERIAL PRIMARY KEY,
  EventSessionID INT,
  UserID INT,
  NumOfTickets INT,
  Attendance INT,
  FOREIGN KEY (EventSessionID) REFERENCES EVENTSESSION(EventSessionID),
        FOREIGN KEY (UserID) REFERENCES Users(UserID)
);

--POPULATE Data
INSERT INTO event (eventorganizerid, eventname, eventdescription, eventdatetime, imageurl, eventseatcapacity, eventlaunchdate, eventvenue, eventaddress, city, state, postalcode)
VALUES 
  (1, 'Music Concert', 'Live performance by top artists', '2024-06-15T11:00:00.000Z', 'http://example.com/concert.jpg', 1000, '2024-06-09T16:00:00.000Z', 'City Stadium', '123 Main St', 'Cityville', 'Stateville', '12345'),
  (2, 'Art Exhibition', 'Exhibition showcasing contemporary art', '2024-07-20T10:00:00.000Z', 'http://example.com/art.jpg', 500, '2024-07-15T10:00:00.000Z', 'Art Gallery', '456 Elm St', 'Artville', 'Stateville', '54321'),
  (3, 'Food Festival', 'A celebration of culinary delights', '2024-08-25T09:00:00.000Z', 'http://example.com/food.jpg', 800, '2024-08-20T09:00:00.000Z', 'City Park', '789 Oak St', 'Foodtown', 'Stateville', '67890'),
  (4, 'Tech Conference', 'A gathering of tech enthusiasts', '2024-09-30T08:00:00.000Z', 'http://example.com/tech.jpg', 1200, '2024-09-25T08:00:00.000Z', 'Convention Center', '101 Pine St', 'Techville', 'Stateville', '13579'),
  (5, 'Fashion Show', 'Showcasing the latest fashion trends', '2024-10-15T13:00:00.000Z', 'http://example.com/fashion.jpg', 700, '2024-10-10T13:00:00.000Z', 'Fashion Hall', '202 Maple St', 'Fashionville', 'Stateville', '24680'),
  (6, 'Film Festival', 'Celebrating the art of cinema', '2024-11-20T12:00:00.000Z', 'http://example.com/film.jpg', 900, '2024-11-15T12:00:00.000Z', 'Film Center', '303 Cedar St', 'Filmville', 'Stateville', '98765'),
  (7, 'Sports Event', 'Exciting sports competition', '2024-12-25T15:00:00.000Z', 'http://example.com/sports.jpg', 1500, '2024-12-20T15:00:00.000Z', 'Sports Arena', '404 Oak St', 'Sportstown', 'Stateville', '56894'),
  (8, 'Book Fair', 'Celebrating literature and authors', '2025-01-30T14:00:00.000Z', 'http://example.com/books.jpg', 600, '2025-01-25T14:00:00.000Z', 'Bookstore', '505 Elm St', 'Booktown', 'Stateville', '14785'),
  (9, 'Cultural Festival', 'Showcasing diverse cultures', '2025-02-28T11:00:00.000Z', 'http://example.com/culture.jpg', 1100, '2025-02-23T11:00:00.000Z', 'Cultural Center', '606 Pine St', 'Cultureville', 'Stateville', '25896'),
  (10, 'Gaming Expo', 'A paradise for gamers', '2025-03-15T10:00:00.000Z', 'http://example.com/gaming.jpg', 1300, '2025-03-10T10:00:00.000Z', 'Gaming Hall', '707 Cedar St', 'Gameville', 'Stateville', '36981');