import React, {useContext} from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "./Root";
import Home from "./components/Home";
import Autopay from "./pages/Autopay";
import Log from "./pages/Log";
import Specific from "./pages/Specific";


const root = ReactDOM.createRoot(document.getElementById('root'));


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


root.render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
);

