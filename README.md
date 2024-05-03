# EventStack - GA Project 4

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

## File
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

## Getting Started
Before you begin, ensure you have met the following requirements:
- Node.js
- 


## Screenshots


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
