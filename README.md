# DreamNest

## Introduction
**DreamNest** is a full-stack rental property web application built using the MERN stack (MongoDB, Express.js, React, Node.js). The platform enables seamless interaction between property seekers and owners, allowing users to list, search, and book rental properties. It provides an intuitive, mobile-responsive interface with robust backend support, solving the problem of scattered and inefficient rental property discovery and management.

## Project Type
**Fullstack**

## Deployed App
- **Frontend**: [https://dream-nest-ashy.vercel.app](https://dream-nest-ashy.vercel.app)
- **Backend**: Hosted on Render
- **Database**: MongoDB Atlas

## Directory Structure
dream-nest/
├─ backend/
│ ├─ config/
│ ├─ controllers/
│ ├─ models/
│ ├─ routes/
│ ├─ server.js
├─ frontend/
│ ├─ public/
│ ├─ src/
│ │ ├─ assets/
│ │ ├─ components/
│ │ ├─ pages/
│ │ ├─ context/
│ │ ├─ App.js
│ │ ├─ index.js

pgsql
Copy
Edit

## Features

- User authentication (signup/login using JWT & bcrypt)
- Property listing by owners with images
- Search & filter properties by category, location, price
- Booking & wishlist functionality for users
- Role-based dashboards (Owner vs. Seeker)
- Responsive design with a smooth UX
- MongoDB-based data persistence with Mongoose schemas
- Secure backend API endpoints

## Design Decisions or Assumptions

- Image uploads handled via MongoDB Base64 (for simplicity)
- Used Material UI for cleaner and responsive design
- Single-page application with React Router
- All users must register to book or list a property
- Only authenticated users can view dashboards

## Installation & Getting Started

### Backend
```bash
cd backend
npm install
npm run dev
Frontend
bash
Copy
Edit
cd frontend
npm install
npm start
Make sure you create a .env file in the backend directory with your MongoDB URI and JWT secret:

ini
Copy
Edit
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
Usage
bash
Copy
Edit
# Clone the repository
git clone https://github.com/your-username/dreamnest.git

# Start backend
cd backend
npm install
npm run dev

# Start frontend
cd frontend
npm install
npm start
Credentials
yaml
Copy
Edit
Demo Owner:
Email: owner@dreamnest.com
Password: owner123

Demo Seeker:
Email: seeker@dreamnest.com
Password: seeker123
APIs Used
No external APIs used currently.

Future integration planned for Google Maps API for location-based searches.

API Endpoints
Auth
POST /api/auth/register – Register a user

POST /api/auth/login – Login a user

Properties
GET /api/properties – Get all properties

POST /api/properties – Add new property

GET /api/properties/:id – Get single property

DELETE /api/properties/:id – Delete property (Owner only)

Booking / Wishlist
POST /api/book/:id – Book a property

POST /api/wishlist/:id – Add to wishlist

Technology Stack
Node.js – Backend runtime

Express.js – Server framework

MongoDB – NoSQL database

Mongoose – ODM for MongoDB

React.js – Frontend library

React Router – Client-side routing

Material UI – Component styling

JWT – Authentication token

Bcrypt.js – Password hashing
