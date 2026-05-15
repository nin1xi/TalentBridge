# TalentBridge — Full Stack Job Portal Application

A scalable and secure **full-stack job portal platform** built using the **MERN stack**, designed to streamline interaction between **job seekers** and **recruiters** through role-based access control, secure authentication, and modern UI/UX practices.


# Overview

TalentBridge is a full stack job portal application that enables students to search and apply for jobs while allowing recruiters to manage companies, create job postings, and review applications through a dedicated admin interface.

The project focuses on:
- Scalable full-stack architecture
- Secure authentication & authorization
- Real-world CRUD operations
- Cloud-based file handling
- Responsive and dynamic user experience


# Key Features

## Student Module
- User registration and login
- Search and filter jobs
- View detailed job descriptions
- Apply for jobs
- Track application status
- Update profile information
- Upload resume and profile image



## Recruiter Module
- Recruiter authentication
- Company registration and management
- Create, update, and delete job postings
- View applicants for posted jobs
- Accept or reject applications
- Admin dashboard for managing jobs and companies


# Technology Stack

## Frontend
- React.js
- Redux Toolkit
- Redux Persist
- React Router DOM
- Tailwind CSS
- Framer Motion
- Axios


## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt.js
- Multer



## Cloud & Development Tools
- Cloudinary (media storage)
- Postman (API testing)
- Git & GitHub (version control)



# System Architecture

## Backend Structure

```bash
backend/
├── controllers/
├── middleware/
├── models/
├── routes/
├── utils/
└── server.js
```

### Backend Responsibilities
- RESTful API development
- Authentication & authorization
- Database operations
- File upload handling
- Business logic implementation



## Frontend Structure

```bash
frontend/
├── components/
├── hooks/
├── pages/
├── redux/
├── utils/
└── App.jsx
```

### Frontend Responsibilities
- Responsive UI rendering
- State management
- Protected routing
- API integration
- User interaction handling



# Authentication & Security

- JWT-based authentication
- Password hashing using bcrypt
- Tokens stored in HttpOnly cookies
- Protected routes for recruiters/admins
- Role-based access control
- Secure cloud file uploads



# File Upload Management

The application supports:
- Resume upload (PDF)
- Profile image upload
- Company logo upload

Implemented using:
- Multer middleware
- Cloudinary cloud storage



# Application Workflow

## Student Flow
1. Register/Login
2. Browse and search jobs
3. View job details
4. Apply for jobs
5. Track application status


## Recruiter Flow
1. Register/Login
2. Create company profile
3. Post and manage jobs
4. View applicants
5. Accept or reject applications



# Project Outcomes

Through this project, I gained practical experience in:

- Full-stack MERN application development
- REST API design and integration
- JWT authentication and authorization
- MongoDB schema relationships
- Redux state management
- Cloud-based file handling
- Scalable application architecture
- Clean code organization and modular design



# Future Enhancements

- Email notifications
- Advanced job recommendation system
- Resume parsing and skill matching
- Admin analytics dashboard
- Pagination and infinite scrolling
- CI/CD deployment pipeline



# Configuration Details

| Feature | Details |
|---|---|
| Authentication | JWT + HttpOnly Cookies |
| Database | MongoDB Atlas |
| File Storage | Cloudinary |
| Supported Files | PNG, JPG, PDF |
| User Roles | Student, Recruiter |
| Token Expiry | 24 Hours |



# Author

**Nini**  
GitHub: https://github.com/nin1xi

LinkedIn:https://www.linkedin.com/in/poojav91

