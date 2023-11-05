import { Link } from "react-router-dom";
import useFetch from "../../../hooks/useFetch"
import Service from "./Service";
import Loading from "../../../components/Loading/Loading";
const url = "http://localhost:5000/api/v1/services"
const Services = () => {
    const { data, loading } = useFetch(url);
    if (loading) {
        return <Loading />
    }
    return (
        <div>
            <div className="max-w-6xl mx-auto pb-10">
                <div className="lg:my-28 my-14 text-center space-y-6 ">
                    <h4 className="text-[#808080] lg:text-[1rem] text-xs sm:text-sm  uppercase font-bold ">MODERN & BEAUTIFUL</h4>
                    <h1 className="text-[#061a3a] dark:text-gray-400 lg:text-4xl text-xl sm:text-2xl font-bold ">Our Most Popular Adventures</h1>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {
                        data.slice(0, 4).map(service => <Service key={service._id} service={service} />)
                    }
                </div>
                <div className="text-center">
                    <Link to="/all-services" className="relative mt-10 mx-auto inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            All Service
                        </span>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Services