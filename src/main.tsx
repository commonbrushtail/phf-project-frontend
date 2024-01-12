import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./pages/Login";
import "./index.css";
import "modern-normalize/modern-normalize.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Provider,defaultTheme } from "@adobe/react-spectrum";
const router = createBrowserRouter([
  {
    path: "/",
    Component: Login,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider id="spectrum-provider" theme={defaultTheme}>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
        <RouterProvider router={router}></RouterProvider>
      </GoogleOAuthProvider>
    </Provider>
  </React.StrictMode>
);
