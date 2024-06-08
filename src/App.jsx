import TaskForm from "./components/TaskForm.jsx";
import TaskColumn from "./components/TaskColumn.jsx";
import "./App.css";

import todoIcon from "./assets/direct-hit.png";
import doingIcon from "./assets/glowing-star.png";
import doneIcon from "./assets/check-mark-button.png";
import { useState } from "react";
import { useEffect } from "react";

const oldTasks = localStorage.getItem("tasks");
const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTasks);
  };

  return (
    <div className="app">
      <TaskForm setTasks={setTasks} />
      <main className="app_main">
        <TaskColumn
          tasks={tasks}
          status="todo"
          icon={todoIcon}
          title="To Do"
          handleDelete={handleDelete}
        />
        <TaskColumn
          tasks={tasks}
          status="doing"
          icon={doingIcon}
          title="Doing"
          handleDelete={handleDelete}
        />
        <TaskColumn
          tasks={tasks}
          status="done"
          icon={doneIcon}
          title="Done"
          handleDelete={handleDelete}
        />
      </main>
    </div>
  );
};

export default App;
