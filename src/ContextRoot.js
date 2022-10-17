import Home from "./components/Home";
import React, {createContext, useContext} from 'react';
import './styles/index.css';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom";
import Autopay from "./pages/Autopay";
import Log from "./pages/Log";
import Specific from "./pages/Specific";
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

export default function ContextRoot(){

    return(
        <>
                <RouterProvider router={router}/>
        </>
    )

}