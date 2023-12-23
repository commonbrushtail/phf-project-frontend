import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./pages/Login";
import "./index.css";
import 'modern-normalize/modern-normalize.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
const router = createBrowserRouter([
  {
    path: "/",
    Component: Login,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
    <RouterProvider router={router}>
    </RouterProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
