import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/app.css";

// Import page components
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Chatbot from "./pages/Chatbot/Chatbot";

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
