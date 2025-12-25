import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Import Browser Router
import { BrowserRouter } from "react-router-dom";

// Import Root Component
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  // Wrap application in BrowserRouter
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
);
