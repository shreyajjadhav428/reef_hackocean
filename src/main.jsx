// src/main.jsx

import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

// Global Styles
import "./index.css";
import "./styles/globals.css";
import "./styles/variables.css";
import "./styles/typography.css";
import "./styles/animations.css";
import './index.css' // Tailwind CSS

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);