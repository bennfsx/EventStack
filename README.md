# EventStack - A General Assembly Project

## Live demo


## Technologies Used
![image](https://github.com/bennfsx/EventStack/assets/44813216/455d21d9-8e46-4a9c-9611-13295646a915)



## Architecture Design
![image](https://github.com/bennfsx/EventStack/assets/44813216/896ce012-8937-4cfc-a806-bcc448c07230)

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
