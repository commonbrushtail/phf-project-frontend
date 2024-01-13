import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Provider, defaultTheme } from "@adobe/react-spectrum";
import { Provider as ReduxProvider } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import store from "./store/store";
import api from "./services/axios";
import Login from "./pages/Login";
import { Email } from "./pages/Email";
import { Root } from "./components/Core/Root";
import { Experience } from "./components/Core/Experience";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AnimatePresence>
        <motion.div
          className="h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Root />
        </motion.div>
      </AnimatePresence>
    ),
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
      {
        path: "/login",
        element: (
          <motion.div
            className="h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Login />
          </motion.div>
        ),
      },
      {
        path: "/email-login",
        element: (
          <motion.div
            className="h-full"
            initial={{ opacity: 0, x: "100" }}
            animate={{ opacity: 1, x: "0" }}
            transition={{ duration: 2 }}
            exit={{ opacity: 0 }}
          >
            <Email />
          </motion.div>
        ),
      },
      {
        path: "/experience",
        element: (
          <motion.div
            className="h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Experience />
          </motion.div>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <Provider id="spectrum-provider" theme={defaultTheme}>
        <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
          <RouterProvider router={router}></RouterProvider>
        </GoogleOAuthProvider>
      </Provider>
    </ReduxProvider>
  </React.StrictMode>
);
