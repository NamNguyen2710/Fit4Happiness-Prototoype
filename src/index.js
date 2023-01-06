import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import App from "App";
import Homepage from "./modules/Homepage/Homepage";
import Login from "./modules/Login/Login";
import SignUp from "modules/Signup/Signup";
import UserPage from "modules/User/UserPage";
import UserSchedule from "./modules/User/UserSchedule/UserSchedule";
import UserInput from "./modules/User/UserInput/UserInput";
import UserAnalysis from "./modules/User/UserAnalysis/UserAnalysis";
import UserSuggestion from "./modules/User/UserSuggestion/UserSuggestion";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/user",
        element: <UserPage />,
        children: [
          {
            path: "/user",
            element: <UserSchedule />,
          },
          {
            path: "/user/input",
            element: <UserInput />,
          },
          {
            path: "/user/detail",
            element: <UserAnalysis />,
          },
          {
            path: "/user/suggestion",
            element: <UserSuggestion />,
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
