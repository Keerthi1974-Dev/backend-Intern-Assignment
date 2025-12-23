** Backend-Intern-Assignment **

This project is a backend application built with Node.js, Express, and SQLite. It provides a dashboard with multiple modules such as Dashboard, Analytics, Leads, Sales, Content, and Settings. The application uses JWT authentication to protect routes, with role-based access (admin/user).

1.Tech Stack                                                                               

Node.js (JavaScript runtime)

Express (Web framework for Node.js)

SQLite (Database)

JWT (JSON Web Tokens) for authentication

dotenv (for managing environment variables)

Setup and Installation


2. Clone the Repository

Start by cloning the repository to your local machine:

git clone https://github.com/Keerthi1974-Dev/backend-Intern-Assignment.git


3. Install Dependencies

After cloning the project, navigate to the project directory and install the necessary dependencies:

cd backend-Intern-Assignment
npm install


4. Environment Variables

Create a .env file in the root of the project and add the following variables:

PORT=5000
JWT_SECRET=your_jwt_secret_key


This file will store sensitive keys like your JWT secret.


5. Initialize the Database

To set up the SQLite database and create the necessary tables, run the following command:

node src/db/init.js

Running the Application
1. Start the Server

Once all the dependencies are installed and the database is set up, start the server using:

npm start


By default, the server will run on port 5000. You can change the port by modifying the .env file.

Docker Setup (Optional)

To run the backend application using Docker, you can follow the steps below:

Build the Docker image:

docker build -t dashboard-backend .


Run the Docker container:

docker run -p 5001:5000 --env-file .env dashboard-backend


This will make the application accessible at http://localhost:5001.

API Routes
Authentication Routes

POST /auth/signup

Body:

{
  "email": "user@example.com",
  "password": "password123",
  "role": "user"   // Optional, defaults to "user"
}


Response:

{ "message": "User created", "role": "user" }


POST /auth/login

Body:

{
  "email": "user@example.com",
  "password": "password123"
}


Response:

{ "token": "your_jwt_token" }

Protected Routes (Require JWT)

These routes are protected and require a valid JWT token in the Authorization header as Bearer <your_jwt_token>.

GET /dashboard

Response:

{ "message": "Dashboard data" }


GET /analytics

Response:

{ "message": "Analytics data" }


POST /leads

Body:

{
  "name": "John Doe",
  "email": "john.doe@example.com"
}


Response:

{ "id": 1 }


GET /leads

Response:

[
  { "id": 1, "name": "John Doe", "email": "john.doe@example.com" }
]


POST /sales

Body:

{
  "product": "Laptop",
  "amount": 1200
}


Response:

{ "id": 1 }


GET /sales

Response:

[
  { "id": 1, "product": "Laptop", "amount": 1200 }
]


POST /content

Body:

{
  "title": "New Content",
  "body": "Content details here."
}


Response:

{ "id": 1 }


GET /content

Response:

[
  { "id": 1, "title": "New Content", "body": "Content details here." }
]


POST /settings

Body:

{
  "name": "theme",
  "value": "dark"
}


Response:

{ "id": 1 }


GET /settings

Response:

[
  { "id": 1, "name": "theme", "value": "dark" }
]

   **API TESTING**
  <img width="1853" height="890" alt="image" src="https://github.com/user-attachments/assets/901a920a-3060-4913-aec7-562e0fa8bf45" />

  **DOCKER SETUP**
  <img width="1884" height="852" alt="image" src="https://github.com/user-attachments/assets/e0626e06-18d0-4a7c-975e-b8f3cb989014" />
  

  

  





  



