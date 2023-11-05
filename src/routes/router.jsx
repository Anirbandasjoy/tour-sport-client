import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import AddService from "../pages/dashboard/services/AddService/AddService";
import axios from "axios";
import ServiceDetails from "../pages/home/allServices/ServiceDetails";
import AllService from "../pages/allServices/AllService";
import MyService from "../pages/dashboard/services/myservice/MyService";


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
            },
            {
                path: "service-details/:id",
                element: <ServiceDetails />,
                loader: ({ params }) => axios.get(`http://localhost:5000/api/v1/service/${params.id}`)

            },
            {
                path: "all-services",
                element: <AllService />
            },
            {
                path: "my-services",
                element: <MyService />
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