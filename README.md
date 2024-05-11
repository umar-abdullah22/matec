# Matec Challenge

This project demonstrates a full-stack application featuring a React frontend and a Node.js backend. It showcases a gallery where users can upload, view, and delete images. The backend serves as a REST API, and the frontend consumes these services to provide a dynamic web experience.

Language: TypeScript

Frontend: React+ Vite
UI Library Tailwind
State Management Library: Zustand

Backend:
Library: NodeJS
Framework: NestJS


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