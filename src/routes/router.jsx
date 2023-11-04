import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import AddService from "../pages/dashboard/services/addService/AddService";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "add-service",
                element: <AddService />
            }
        ]
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "register",
        element: <Register />
    }
])