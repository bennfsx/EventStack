# EventStack - A General Assembly Project

## Introduction 
EventStack is a comprehensive event management platform designed to revolutionize the way events are organized and attended. With a mission to eliminate ticket scalping, streamline event planning, and enhance attendee experiences, EventStack empowers organizers, vendors, and attendees alike.


## Technologies Used
- React
- Tailwind
- Material UI
- express
- Google Cloud Functions

## Tech Stack
![image](https://github.com/bennfsx/EventStack/assets/44813216/455d21d9-8e46-4a9c-9611-13295646a915)

## Architecture Design
![image](https://github.com/bennfsx/EventStack/assets/44813216/c89c7b8f-b20d-492f-9c1c-a34bfd593e28)

## Activity Diagram for Event-Organizer
![image](https://github.com/bennfsx/EventStack/assets/44813216/1126f9a1-e3e3-4e40-a3e2-9d1df20f4eaf)

## Activity Diagram For Event-Attendee
![image](https://github.com/bennfsx/EventStack/assets/44813216/be31b3df-95cf-4134-ac96-cca2b0772ceb)


## Features
- User Authentication: Secure user authentication system for organizers and attendees.
- Event Management: Organizers can create, update, and delete events.
- Booking System: Attendees can browse events and book tickets.
- Role-Based Access Control: Different access levels for organizers, attendees, and administrators.
- Responsive Design: Mobile-friendly interface for easy access on various devices.

## Frontend Directory Structure:
```shell
.
└── frontend
    ├── public
    │   ├── index.html
    │   ├── favicon.ico
    │   └── ...
    ├── src   
    │   ├── context
    │   ├── css
    │   ├── eventOrganizer
    │   │   ├── components
    │   │   ├── pages
    │   │   ├── events
    │   │   ├── layout
    │   │   └── user
    │   ├── hooks
    │   ├── images
    │   ├── pages
    │   │   ├── auth
    │   │   ├── events
    │   │   └── user
    │   └── utils
    ├── axiosAPI.js
    ├── .gitignore
    ├── package-lock.json
    ├── package.json 
    ├── postcss.config.js
    └── README.md

```
## Backend Directory Structure:
```shell
.
└── backend
    ├── controllers
    ├── middleware
    ├── routes
    ├── services
    ├── config
    ├── db
    ├── index.js
    ├── .env.example
    ├── .gitignore
    ├── package-lock.json
    ├── package.json
    └── README.md
```


## Getting Started
Before you begin, ensure you have met the following requirements:
- Node.js



## Frontend Installation:

1. **Clone the Repository:**
   ```shell
   git clone https://github.com/bennfsx/EventStack.git
   ```
2. **Navigate to the Frontend Directory:**
   ```shell
   cd EventStack/EventStackFE
   ```
4. **Install Dependencies:**
   ```shell
   npm install
   ```
5. **Start the Development Server:**
   ```shell
   npm run dev
   ```
6. **Access the Application:**
   ```shell
   Open your browser and visit http://localhost:5173
    ```
## Backend Installation:
1. **Clone the Repository:**
   ```shell
   git clone https://github.com/bennfsx/EventStack.git
   ```
2. **Navigate to the Frontend Directory:**
   ```shell
   cd EventStack/EventStackBE
   ```
3. **Create a .env file:**
   ```shell
   cp .env.example .env
   ```
4. ***Update the .env file with your environment variables.**
   
5. **Install Dependencies:**
   ```shell
   npm install
   ```
6. **Start the Development Server:**
   ```shell
   npm run dev
   ```
7. **Access the Application:**
   ```shell
   Open your browser and visit http://localhost:6001
    ```
8. **The backend server will be running on http://localhost:5000.**

## Screenshots
**Landing Page**
![image](https://github.com/bennfsx/EventStack/assets/44813216/56f9d265-75ff-489d-adcb-bbec0e859b44)

**Login Page**
![image](https://github.com/bennfsx/EventStack/assets/44813216/496dc185-5107-43ff-9684-7cd3146a86f4)

**User Selection**
![image](https://github.com/bennfsx/EventStack/assets/44813216/a5913877-ad81-4781-bae1-17c203dba992)

**Event-Organizer Registration Page**
![image](https://github.com/bennfsx/EventStack/assets/44813216/c68d98c9-42cf-45d5-a34d-fb58dc9a3866)

**Event-Organizer Dashboard Page**
![image](https://github.com/bennfsx/EventStack/assets/44813216/aec3ee37-7eee-4bcb-b42b-107db26bd3da)

**Event-Organizer Event Creation Page**
![image](https://github.com/bennfsx/EventStack/assets/44813216/8642be20-a0b5-46fb-a882-26a83f63dc56)

**Event-Organizer Event-Controller Page**
![image](https://github.com/bennfsx/EventStack/assets/44813216/5388158e-54bf-48a4-b260-ed9cff2e36a5)

**Individual Event Page**
![image](https://github.com/bennfsx/EventStack/assets/44813216/65439703-623b-4b48-a0c2-dde4b0c2ef0a)


**Generated QR Code Page**
![image](https://github.com/bennfsx/EventStack/assets/44813216/137dc810-2fb3-476d-9c06-42eda516415a)


## References
- [date-fns](https://date-fns.org/v3.6.0/docs/format)
- [Tailwind CSS](https://tailwindcss.com/docs/installation)
- [Material UI](https://mui.com/material-ui/getting-started/)

## Icebox
- To integrate and Authenticate a User with Face Recognition 

## .env variables
```
#GOOGLE_CLOUD_POSTGRES
PGDATABASE=
PGUSER=
PGPASSWORD=
PGHOST=
PGPORT=

#SERVER_INFO
PORT=6001

#SECRETS
ACCESS_SECRET=nbtF8GLi7nK5vSMtxrUOZDtXJwl8BHKCbol73thsvf8i1ti65pkRxdbiZDLuq0C3VPABvxWS9sSBUNEcac1Web3YHB2LPw9hbyVK
REFRESH_SECRET=y2ltkxcYFwqq4QIDEYXQ3sAhSzA9alOTtrimmuuZhmMjd6WBd1Rswy15CVo2n0as7YznUY26hRvNDLfGFudGGnqD8x8pjVQtRs4H

#GOOGLE_CLOUD_STORAGE
BUCKET_NAME=
PROJECT_ID=
GOOGLE_APPLICATION_CREDENTIALS=<Root JSON file>
IMAGE_BASE_URI=
```
