import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import AddService from "../pages/dashboard/services/AddService/AddService";
import axios from "axios";
import ServiceDetails from "../pages/home/allServices/ServiceDetails";
import AllService from "../pages/allServices/AllService";
import PribetRoutes from "./PribetRoutes";
import ManageServices from "../pages/manageService/ManageServices";
import UpdateService from "../pages/manageService/UpdateService";
import ErrorPage from "../pages/error/ErrorPage";
import MyServices from "../pages/dashboard/services/myservice/MyServices";
import MyShedule from "../pages/dashboard/myShedule/MyShedule";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "add-service",
                element: <PribetRoutes><AddService /></PribetRoutes>,
            },
            {
                path: "service-details/:id",
                element: <PribetRoutes><ServiceDetails /></PribetRoutes>,
                loader: ({ params }) => axios.get(`http://localhost:5000/api/v1/service/${params.id}`)

            },
            {
                path: "all-services",
                element: <AllService />
            },
            {
                path: "manage-services",
                element: <PribetRoutes><ManageServices /></PribetRoutes>
            },
            {
                path: "update-service/:id",
                element: <PribetRoutes><UpdateService /></PribetRoutes>,
                loader: ({ params }) => axios.get(`http://localhost:5000/api/v1/service/${params.id}`)
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            },
            {
                path: "my-services",
                element: <PribetRoutes><MyServices /></PribetRoutes>
            },
            {
                path: "my-shedule",
                element: <PribetRoutes><MyShedule /></PribetRoutes>
            }

        ]
    },

])