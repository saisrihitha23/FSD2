import React from "react";
import Student from "./Student";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>🚀 Space Exploration Dashboard</h1>

      <p className="subtitle">
        Props + State + Events + Conditional Rendering + Lists + Forms
      </p>

      <Student />
    </div>
  );
}

export default App;