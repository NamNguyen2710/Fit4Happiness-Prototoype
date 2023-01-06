import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

import Homepage from './modules/Homepage/Homepage';
import Login from './modules/Login/Login';
import UserSchedule from './modules/User/UserSchedule/UserSchedule';
import UserInput from './modules/User/UserInput/UserInput';
import UserAnalysis from './modules/User/UserJournal/UserJournal';
import UserJournal from './modules/User/UserJournal/UserJournal';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/user/schedule',
    element: <UserSchedule />,
  },
  {
    path: '/user/input',
    element: <UserInput />,
  },
  {
    path: '/user/detail',
    element: <UserAnalysis />,
  },
  {
    path: '/user/journal',
    element: <UserJournal />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
