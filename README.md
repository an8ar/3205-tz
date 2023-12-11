# Full-Stack Mini App

## Project Overview

This project is a full-stack mini application demonstrating a seamless interaction between a frontend and a backend service. The application features two inputs on the frontend, with one being optional. It showcases data validation, input masking for a phone field, and the ability to cancel a request within a specified time frame.

### Key Features

- **Two Input Fields**: One mandatory, one optional.
- **Data Validation**: Utilizes `class-validator` in the backend and `yup resolver` in the frontend for robust data validation.
- **Input Masking**: Implements an input mask for the phone field to ensure data consistency.
- **Delayed Response**: The backend holds the response for 5 seconds before sending it back.
- **Request Cancellation**: Frontend allows cancellation of the request within 5 seconds using the Axios library.

## Getting Started

### Prerequisites

- Ensure you have [Node.js](https://nodejs.org/) installed.
- [Yarn](https://yarnpkg.com/) package manager is used for managing dependencies.

### Installation and Running the Project

#### Backend

1. Navigate to the backend directory.
2. Install the necessary packages:
   ```bash
   yarn
   ```
3. Start the backend server:
   ```bash
   yarn start
   ```

#### Frontend

1. Navigate to the frontend directory.
2. Install the necessary packages:
   ```bash
   yarn
   ```
3. Start the frontend development server:
   ```bash
   yarn dev
   ```

### Usage

Upon running both the frontend and backend, the application will be accessible via a web browser. The frontend provides an interface with two input fields. Enter the required data and observe the backend processing and the delay in response. You can also test the cancel feature by clicking the same button within 5 seconds of sending a request.
