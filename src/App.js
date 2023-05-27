import React from "react"
import ReactDOM from "react-dom/client";

import "../index.css"

import Header from "./components/Header.js";
import Body from "./components/Body.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ErrorPage from "./components/ErrorPage";

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <ErrorPage />
    },
    {
        path: "/about",
        element: <AboutUs />
    },
    {
        path: "/error",
        element: <ErrorPage />
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);
