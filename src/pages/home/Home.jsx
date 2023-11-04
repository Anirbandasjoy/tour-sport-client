import Banner from "../../components/banner/Banner"
import Services from "../dashboard/services/allServices/Services"
const Home = () => {
    return (
        <div className="container mx-auto px-2 lg:px-0">
            <Banner />
            <Services />
        </div>
    )
}

export default Home