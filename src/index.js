import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import Homepage from "./modules/Homepage/Homepage";
import Login from "./modules/Login/Login";
import UserSchedule from "./modules/UserSchedule/UserSchedule";
import UserInput from "./modules/UserInput/UserInput";
import UserAnalysis from "./modules/User/UserAnalysis/UserAnalysis";
import UserSuggestion from "./modules/UserSuggestion/UserSuggestion";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
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
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
