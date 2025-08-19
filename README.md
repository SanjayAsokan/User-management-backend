# Fullstack User Management System - Backend

## Overview
This is the backend for the Fullstack User Management System with Role-Based Access Control (RBAC). It provides APIs for user authentication, role-based authorization, and CRUD operations on resources.

**Features:**
- User registration and login with JWT authentication
- Role-Based Access Control (admin, moderator, user)
- Protected CRUD routes for resources
- Admin-only route to view all users
- Users can view/update their own profile
- Input validation and error handling

---

## Tech Stack
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT (JSON Web Tokens)
- Bcryptjs for password hashing
- CORS middleware

---

## Folder Structure

Backend/
│
├─ controllers/
│ ├─ authController.js
│ ├─ userController.js
│ └─ resourceController.js
│
├─ middleware/
│ ├─ authMiddleware.js
│ └─ roleMiddleware.js
│
├─ models/
│ ├─ User.js
│ └─ Resource.js
│
├─ routes/
│ ├─ auth.js
│ ├─ users.js
│ └─ resources.js
│
├─ .env.example
├─ package.json
└─ server.js

Live URL

Backend: 

GitHub Repo