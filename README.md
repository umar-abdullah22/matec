# Matec Challenge

This project demonstrates a full-stack application featuring a React frontend and a Node.js backend. It showcases a gallery where users can upload, view, and delete images. The backend serves as a REST API, and the frontend consumes these services to provide a dynamic web experience.

## Technologies Used

- **TypeScript**: Used for both frontend and backend to ensure type safety and enhance code quality and maintainability.
- **React**: A JavaScript library for building user interfaces, chosen for its component-based architecture which makes it easy to manage complex UIs.
- **Vite**: Chosen as the frontend build tool for its fast, hot module replacement which significantly speeds up development.
- **Tailwind CSS**: A utility-first CSS framework used in the frontend for rapid UI development, allowing us to customize styles efficiently without leaving HTML.
- **Zustand**: A minimalistic state management library used for its simplicity and excellent performance, making state management in React straightforward without the boilerplate of Redux.
- **Node.js**: The runtime environment for the backend, popular for its non-blocking, event-driven architecture suitable for I/O-heavy operations.
- **NestJS**: A progressive Node.js framework used for building scalable server-side applications. It is used for its robust architecture which is ideal for creating reliable and maintainable REST APIs.
- **Sharp**: A high-performance Node.js module used to convert large images in common formats to smaller, web-friendly JPEG, PNG, WebP, and AVIF images at high speed. Reduces bandwidth usage and improves load times.


## Prerequisites

Ensure you have the following installed:
- **Node.js**: Version 16.x or higher.
- **npm**: Version 6.x or higher.
- **Docker** and **Docker Compose** (for Docker setups).

## Getting Started

Follow these instructions to get the project up and running on your local machine for development and testing purposes.

### Setup and Running with Docker

#### Building and Running with Docker
If you prefer using Docker, make sure Docker is running on your machine, then execute:

```bash
# Navigate to the project root directory
# Build and start the containers
docker-compose up --build

# To stop and remove containers
docker-compose down

```
If you prefer using Without Docker, then execute:

### Navigate to the server directory from the project root
```bash
cd server
```
### Install dependencies
```bash

npm install
```
### Start the server in production mode
```bash

npm start
```
### For development mode with hot reloading
```bash

npm run start:dev
```

### Open a new terminal and navigate to the client directory from the project root
```bash

cd client
```
### Install dependencies
```bash

npm install
```
### Start the client in development mode
```bash

npm run dev
```

### OR From the project root directory, start both servers
```bash
npm i
npm start
```

### Documentation of API's on Swagger 
- http://localhost:5500/api

