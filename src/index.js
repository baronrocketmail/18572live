import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom";
import Autopay from "./Autopay";
import Log from "./Log";
import Specific from "./Specific";
import Root from "./Root";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: [
            { index: true, element: <Home /> },

            {
                path: "/autopay",
                element: <Autopay/>
            },
            {
                path: "/log",
                element: <Log/>
            },
            {
                path: "/:id",
                element: <Specific/>
            }
        ]
    },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

