import useFetch from "../../../../hooks/useFetch"
import Service from "./Service";
const url = "http://localhost:5000/api/v1/services"
const Services = () => {
    const { data } = useFetch(url);
    return (
        <div className="max-w-5xl mx-auto pb-10">
            <div className="lg:my-28 my-14 text-center space-y-6 ">
                <h4 className="text-[#808080] lg:text-[1rem] text-xs sm:text-sm  uppercase font-bold ">MODERN & BEAUTIFUL</h4>
                <h1 className="text-[#061a3a] dark:text-gray-400 lg:text-4xl text-xl sm:text-2xl font-bold ">Our Most Popular Adventures</h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {
                    data.map(service => <Service key={service._id} service={service} />)
                }
            </div>
        </div>
    )
}

export default Services