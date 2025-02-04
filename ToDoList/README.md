# To-Do List Project

This is a simple To-Do List application built using React. The To-Do List allows users to add, delete, and reorder tasks, making it easy to manage tasks dynamically.

## Features

- Add new tasks to the list.
- Delete tasks from the list.
- Move tasks up or down in the list.
- Display tasks with a clean and interactive UI.

## Live Demo

Check out the live demo of the To-Do List project here: [To-Do List App](https://react-project-todolist1.netlify.app/)

### Prerequisites

Ensure you have the following installed on your system:

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/HariPasapuleti/React_Projects.git
    ```
2. Navigate to the project directory:
    ```bash
    cd React_Projects/ToDoList
    ```
3. Install dependencies:
    ```bash
    npm install
    ```

### Running the Project

To start the development server, run:

```bash
npm run dev
```
The application will be accessible at [http://localhost:5173](http://localhost:5173) (default Vite port).

### Usage

1. Open the application in your browser.
2. Enter a task in the input field and click the `Add` button to add a task to the list.
3. To remove a task, click the `Delete` button next to the task.
4. Use the `Up` and `Down` buttons to move tasks up or down in the list.

### Code Structure

This project consists of the following key components:

- `ToDoList.js`: The main component that handles task management.
    - `tasks`: A state that holds the list of tasks.
    - `newTask`: A state that holds the value of the new task input.
    - Functions:
        - `handleInputChange`: Updates the input state with the entered task.
        - `addTask`: Adds the new task to the task list.
        - `deleteTask`: Deletes a task from the list.
        - `moveTaskUp`: Moves a task up in the list.
        - `moveTaskDown`: Moves a task down in the list.
