import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

const BlogPost = lazy(() => import("./pages/BlogPost.jsx"));

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/blogs/:slug" element={<BlogPost />} />
          <Route
            path="/blogs"
            element={<Navigate to={{ pathname: "/", hash: "blogs" }} replace />}
          />
          <Route
            path="/personal"
            element={<Navigate to={{ pathname: "/", hash: "off-the-clock" }} replace />}
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </StrictMode>,
);
