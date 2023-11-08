import { Outlet, useNavigation } from "react-router-dom"
import Navbar from "../components/navbar/Navbar"
import Header from "../components/navbar/Header"
import Loading from "../components/Loading/Loading"
import Footer from "../pages/footer/Footer"
import { motion, useScroll } from "framer-motion"


const MainLayout = () => {
    const navigation = useNavigation();
    const { scrollYProgress } = useScroll();
    return (

        <div className="dark:bg-gray-900  container mx-auto px-2 lg:px-0">
            <motion.div style={{ scaleX: scrollYProgress }} className="bg-blue-600 h-2 z-[2] w-full fixed left-0 top-0 right-0">

            </motion.div>
            <Header />
            <Navbar />
            {
                navigation.state === "loading" ? <Loading /> :
                    <Outlet />
            }
            <Footer />
        </div>

    )
}

export default MainLayout