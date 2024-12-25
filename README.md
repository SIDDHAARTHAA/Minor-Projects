# Course Selling Application

A backend API for a course selling platform where admins can create courses and users can purchase them.

## Features

- **Admin Features**
  - Admin signup and signin with JWT authentication
  - Create new courses
  - View all courses

- **User Features**
  - User signup and signin with JWT authentication
  - View available courses
  - Purchase courses
  - View purchased courses

## API Endpoints

### Admin Routes
- POST `/admin/signup` - Register new admin
- POST `/admin/signin` - Admin login
- POST `/admin/courses` - Create new course
- GET `/admin/courses` - Get all courses

### User Routes
- POST `/user/signup` - Register new user
- POST `/user/signin` - User login
- GET `/user/courses` - View all courses
- POST `/user/buy/:courseId` - Purchase a course
- GET `/user/purchased` - View purchased courses

## Tech Stack
- Node.js
- Express.js
- MongoDB
- JWT for authentication

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   node index.js
   ```

## Environment Variables
- MongoDB connection string
- JWT secret key
- Port number

## Author
[Your Name]