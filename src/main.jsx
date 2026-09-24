import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/personal"
          element={<Navigate to={{ pathname: "/", hash: "off-the-clock" }} replace />}
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
