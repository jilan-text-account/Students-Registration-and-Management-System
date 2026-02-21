🎓 Student Registration and Management System

A full-stack web application designed to efficiently manage student records using modern web technologies. The system enables users to perform complete CRUD (Create, Read, Update, Delete) operations with real-time database updates through RESTful APIs.

This project demonstrates practical implementation of frontend-backend integration, API handling, and relational database management.

📌 Overview

The Student Registration and Management System allows users to:

- Register new students

- View all student records

- Update existing student information

- Delete student details

- Maintain synchronized data between frontend and backend

- All student data is securely stored and managed using PostgreSQL.

🛠️ Tech Stack
Frontend

- React.js

- JavaScript (ES6+)

- HTML5

- CSS3

- Axios (for API communication)

Backend

- Node.js

- Express.js

- RESTful API architecture

- Database

- PostgreSQL

⚙️ Architecture

Client (React.js)
⬇
Axios HTTP Requests
⬇
Express.js REST API
⬇
PostgreSQL Database

The frontend communicates with the backend using Axios to send HTTP requests. The Express server processes the requests and performs database operations using PostgreSQL.

🚀 Key Features

Full CRUD functionality

Structured REST API implementation

Modular backend architecture

Client-server communication using Axios

Real-time data synchronization

Clean and responsive user interface

Proper error handling for API requests

📂 Project Structure
student-registration-system
│
├── client/ # React frontend
│ ├── src/
│ └── package.json
│
├── server/ # Node.js + Express backend
│ ├── routes/
│ ├── controllers/
│ └── package.json
│
└── README.md

▶️ Installation & Setup

1️⃣ Clone the Repository
git clone https://github.com/jilan-text-account/Students-Registration-and-Management-System.git
2️⃣ Setup Frontend
cd client
npm install
npm start
3️⃣ Setup Backend
cd server
npm install
npm start
4️⃣ Database Configuration

Install PostgreSQL

Create a new database

Create required student table

Update database credentials in your backend configuration file

📊 CRUD Functionalities Implemented

Operation Description
Create Add new student records
Read Retrieve and display all students
Update Modify existing student details
Delete Remove student records from database

🎯 Learning Outcomes

Through this project, I gained hands-on experience in:

Building full-stack web applications

Designing RESTful APIs

Connecting React frontend with Node.js backend

Managing relational databases using PostgreSQL

Implementing complete CRUD operations

Handling asynchronous API calls with Axios

👨‍💻 Author

Naik Jilani
Aspiring Full Stack Developer
Skilled in React.js, Node.js, Express.js, PostgreSQL
