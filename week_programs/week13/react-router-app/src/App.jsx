import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import App1 from "./App1";

function App() {
  return (
    <Router>

      <nav style={{ background: "#111827", padding: "15px" }}>

        <Link to="/" style={{ marginRight: "20px", color: "#38bdf8" }}>
          🌍 Home
        </Link>

        <Link to="/about" style={{ marginRight: "20px", color: "#38bdf8" }}>
          🌌 About
        </Link>

        <Link to="/contact" style={{ marginRight: "20px", color: "#38bdf8" }}>
          📡 Mission Control
        </Link>

        <Link to="/App1" style={{ color: "#38bdf8" }}>
          🚀 Mission Clock
        </Link>

      </nav>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/App1" element={<App1 />} />

      </Routes>

    </Router>
  );
}

export default App;