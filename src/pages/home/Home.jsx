import Banner from "../../components/banner/Banner"
import About from "./About"
import Travel from "./Travel"
import Services from "./allServices/Services"
const Home = () => {
    return (
        <div className="container mx-auto px-2 lg:px-0 pb-16 lg:pb-52">
            <Banner />
            <Services />
            <Travel />
            <About />
        </div>
    )
}

export default Home