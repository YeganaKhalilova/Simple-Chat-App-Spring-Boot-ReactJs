
# Simple Chat App (Spring Boot + ReactJS)

This repository contains the source code for a simple chat application built using Spring Boot for the backend and ReactJS for the frontend.

## Project Structure

The project is organized into two main folders:

1. **backend:**
   - Contains the Spring Boot backend code.
   - The `src` directory includes the backend source code.
   - Other files such as `.gitignore`, `mvnw`, `mvnw.cmd`, `pom.xml` are part of the Maven project configuration.

2. **frontend:**
   - Contains the ReactJS frontend code.
   - The `chatbot` directory includes the frontend source code.
   - Other frontend-related files such as `package.json`, `README.md`, etc., may be present in this folder.

## Getting Started

To run the application locally, follow these steps:

### Backend:

1. Navigate to the `backend` folder:

   ```bash
   cd backend
   ```

2. Build and run the Spring Boot application:

   ```bash
   ./mvnw spring-boot:run
   ```

   The backend server will be accessible at `http://localhost:8080`.

### Frontend:

1. Navigate to the `frontend/chatbot` folder:

   ```bash
   cd frontend/chatbot
   ```

2. Install frontend dependencies:

   ```bash
   npm install
   ```

3. Start the React development server:

   ```bash
   npm start
   ```

   The frontend application will be accessible at `http://localhost:3000`.


