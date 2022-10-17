import Home from "./Home";
import React, {createContext, useContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom";
import Autopay from "./Autopay";
import Log from "./Log";
import Specific from "./Specific";
import Root from "./Root";
import * as PropTypes from "prop-types";
import {ThemeContext} from "./contexts";


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
            <ThemeContext.Provider value="dark">
                <RouterProvider router={router}/>
            </ThemeContext.Provider>
        </>
    )

}