import React from "react";
import ReactDOM from "react-dom/client";
import { Root } from "./components/Core/Root";
import "./index.css";
import "modern-normalize/modern-normalize.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Provider, defaultTheme } from "@adobe/react-spectrum";
import { Provider as ReduxProvider, useDispatch } from "react-redux";
import store from "./store/store";
import api from "./services/axios";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: async () => {
      try {
        const userData = await api.post("/auth/check-user-login");
        return userData;
      } catch (err) {
        return null;
      }
    },
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
