# Digital Clock Project

This is a simple digital clock application built using React. The digital clock displays the current time, including hours, minutes, seconds, and AM/PM format, updating every second.

## Features

- Displays the current time in the format `HH:MM:SS AM/PM`.
- Updates the time dynamically every second.
- Implements responsive design for smooth display on various screen sizes.

## Live Demo

Check out the live demo of the Digital Clock project here: [Digital Clock App](https://react-project-digitalclock.netlify.app/)

## Prerequisites

Ensure you have the following installed on your system:

- Node.js (v14 or later)
- npm or yarn

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/HariPasapuleti/React_Projects.git
    ```
2. Navigate to the project directory:
    ```bash
    cd React_Projects/DigitalClock
    ```
3. Install dependencies:
    ```bash
    npm install
    ```

## Running the Project

To start the development server, run:

```bash
npm run dev
```
The application will be accessible at [http://localhost:5173](http://localhost:5173) (default Vite port).

## Usage

1. Open the application in your browser.
2. The clock will automatically display the current time in the format `HH:MM:SS AM/PM`.
3. The time updates dynamically every second.

## Code Overview

### Components and Logic

- **State Management**:  
  The `useState` hook is used to manage the `time` state, initialized with the current date and time.
  
- **Time Update**:  
  The `useEffect` hook, with a `setInterval` function, updates the `time` state every second.  
  The interval is cleared when the component unmounts using the cleanup function.
  
- **Time Formatting**:  
  - The `formatTime` function formats the time to display it in `HH:MM:SS AM/PM` format.  
  - The `padZero` function ensures that single-digit values are padded with a leading zero for consistent formatting.

### Key Functions

- `formatTime`:  
  Formats the hours, minutes, and seconds, and appends AM/PM based on the time of day.
  
- `padZero`:  
  Ensures single-digit numbers are prefixed with a `0`.

