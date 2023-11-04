import Banner from "../../components/banner/Banner"
import Header from "../../components/navbar/Header"
import Navbar from "../../components/navbar/Navbar"

const Home = () => {
    return (
        <div className="container mx-auto px-2 lg:px-0">
            <Header />
            <Navbar />
            <Banner />
        </div>
    )
}

export default Home