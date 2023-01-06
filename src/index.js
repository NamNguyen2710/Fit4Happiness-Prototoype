import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "App";
import Homepage from "./modules/Homepage/Homepage";
import AboutUs from "modules/AboutUs/AboutUs";
import Login from "./modules/Login/Login";
import SignUp from "modules/Signup/Signup";
import UserPage from "modules/User/UserPage";
import UserSchedule from "./modules/User/UserSchedule/UserSchedule";
import UserInput from "./modules/User/UserInput/UserInput";
import UserAnalysis from "./modules/User/UserAnalysis/UserAnalysis";
import UserJournal from "./modules/User/UserJournal/UserJournal";
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
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/user",
        element: <UserPage />,
        children: [
          {
            path: "/user/schedule",
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
            element: <UserJournal />,
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
