import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/app.css";

// Import page components
import Home from "./pages/Home/Home";

// Function Declaration for App Component
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
