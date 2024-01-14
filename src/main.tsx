import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Provider, defaultTheme } from "@adobe/react-spectrum";
import { Provider as ReduxProvider } from "react-redux";
import store from "./store/store";
import api from "./services/axios";
import Login from "./pages/Login";
import Email from "./pages/EmailLogin";
import Root from "./components/Core/Root";
import Experience from "./components/Core/Experience";
import { motion } from "framer-motion";

// Define routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: async ({ request }) => {
      try {
        const userData = await api.post("/auth/check-user-login", {
          signal: request.signal,
        });
        return userData;
      } catch (err) {
        return null;
      }
    },
    children: [
      { path: "login", element: <Login /> },
      {
        path: "email-login",
        element: (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0 }}
          >
            <Email />
          </motion.div>
        ),
      },
      { path: "experience", element: <Experience /> },
    ],
  },
]);

const App = () => {
  return (
    <ReduxProvider store={store}>
      <Provider id="spectrum-provider" theme={defaultTheme}>
        <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
          <RouterProvider router={router}></RouterProvider>
        </GoogleOAuthProvider>
      </Provider>
    </ReduxProvider>
  );
};

// Create the root once
const root = ReactDOM.createRoot(document.getElementById("root")!);

// Use the root's render method
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
