
import { useState } from "react";
import TaskDisplay from "./TaskDisplay";
import "./App.css";

function App() {
  const [taskCount, setTaskCount] = useState(0);

  const addTask = () => {
    setTaskCount(taskCount + 1);
  };

  return (
    <div className="app">
      <h1>🚀 Space Mission Task Tracker</h1>
      <p className="subtitle">
        Track your tasks as you explore the universe!
      </p>

      <div className="mission-card">
        <h2>🌌 Mission Dashboard</h2>
        <h3>Total Tasks: {taskCount}</h3>

        <button onClick={addTask}>➕ Add Mission Task</button>

        <TaskDisplay count={taskCount} />
      </div>
    </div>
  );
}

export default App;
