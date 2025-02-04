# Counter Project

This is a simple counter application built using React. The counter allows users to increment, decrement, reset the count, and set the increment/decrement step dynamically.

## Features

- **Increment and Decrement**:  
  Allows the count to be incremented or decremented by a customizable step.
  
- **Reset Functionality**:  
  Resets the count back to `0`.
  
- **Dynamic Step Adjustment**:  
  Users can input a step value, and the counter will increment or decrement accordingly.

## Live Demo

Check out the live demo of the Counter project here: [Counter App](https://react-project-counter1.netlify.app/)

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
    cd React_Projects/Counter
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
The application will be accessible at http://localhost:5173 (default Vite port).

## Usage

1. Open the application in your browser.
2. Use the buttons to increment, decrement, or reset the count.
3. Set the step value in the input box to control the increment or decrement steps.

## Code Overview

### Components and Logic

- **useReducer Hook**:  
  The state and actions for the counter are managed using the `useReducer` hook. This allows for a cleaner and more scalable state management approach.

- **Reducer Function**:  
  The `reducer` function handles the following actions:  
  - `increment`: Increases the count by the current step.  
  - `decrement`: Decreases the count by the current step.  
  - `reset`: Resets the count to `0`.  
  - `setStep`: Dynamically updates the step value based on user input.

### Key Features in Code

- **Dynamic Step**:  
  The user can set the step value dynamically using an input field. The step value is dispatched as an action to the reducer.

- **Clean State Management**:  
  The state object contains both `count` and `step`, making it easy to manage multiple related pieces of state.

- **Accessibility**:  
  Simple and intuitive UI for easy usage.


