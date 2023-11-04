import { Outlet } from "react-router-dom"
import Navbar from "../components/navbar/Navbar"
import Header from "../components/navbar/Header"

const MainLayout = () => {
    return (
        <div className="dark:bg-gray-900  container mx-auto px-2 lg:px-0">
            <Header />
            <Navbar />
            <Outlet />
        </div>
    )
}

export default MainLayout