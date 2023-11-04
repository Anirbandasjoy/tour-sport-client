import { Outlet } from "react-router-dom"

const MainLayout = () => {
    return (
        <div className="dark:bg-gray-900">
            <Outlet />
        </div>
    )
}

export default MainLayout