import { Helmet } from "react-helmet"
import Banner from "../../components/banner/Banner"
import Contact from "../contact/Contact"
import About from "./About"
import Travel from "./Travel"
import Services from "./allServices/Services"
const Home = () => {
    return (
        <div className="container mx-auto px-2 lg:px-0 pb-16 lg:pb-52">
            <Helmet>
                <title>Home | Tour sport</title>
            </Helmet>
            <Banner />
            <Services />
            <Travel />
            <About />
            <Contact />
        </div>
    )
}

export default Home