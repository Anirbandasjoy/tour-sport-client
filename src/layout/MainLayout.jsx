import { Outlet, useNavigation } from "react-router-dom"
import Navbar from "../components/navbar/Navbar"
import Header from "../components/navbar/Header"
import Loading from "../components/Loading/Loading"

const MainLayout = () => {
    const navigation = useNavigation()
    return (
        <div className="dark:bg-gray-900  container mx-auto px-2 lg:px-0">
            <Header />
            <Navbar />
            {
                navigation.state === "loading" ? <Loading /> :
                    <Outlet />
            }
        </div>
    )
}

export default MainLayout