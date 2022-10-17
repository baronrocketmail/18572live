import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/autopay",
        element: <h1>ds</h1>
    },
    {
        path: "/log",
        element: <h1>log</h1>
    },
    {
        path: "/:id",
        element: <h1>specific</h1>
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

