import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import Service from "../home/allServices/Service"
import Loading from "../../components/Loading/Loading";
const AllService = () => {
    const [search, setSearch] = useState("");
    const url = `http://localhost:5000/api/v1/services?search=${search}`
    const { data, loading } = useFetch(url);
    if (loading) {
        return <Loading />
    }
    return (
        <div>
            <div className="bg-blue-100 dark:bg-blue-200   h-36 w-full flex justify-center items-center">
                <h1 className="lg:text-4xl text-2xl text-blue-400 dark:text-blue-600 font-bold">All Services</h1>
            </div>
            <div className="max-w-6xl mx-auto pb-10">
                <div className="lg:my-24 my-14 text-center space-y-6 ">
                    <h4 className="text-[#808080] lg:text-[1rem] text-xs sm:text-sm  uppercase font-bold ">MODERN & BEAUTIFUL</h4>
                    <h1 className="text-[#061a3a] dark:text-gray-400 lg:text-4xl text-xl sm:text-2xl font-bold ">Our Most Popular Adventures</h1>
                </div>

                <div className="mb-6 lg:w-1/4 w-2/4">

                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg
                                className="w-4 h-4 text-gray-700  dark:text-gray-100"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                />
                            </svg>
                        </div>
                        <input
                            onChange={(e) => setSearch(e.target.value)}
                            type="search"
                            id="default-search"
                            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search "
                            required
                        />


                    </div>

                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {
                        data.map(service => <Service key={service._id} service={service} />)
                    }
                </div>
            </div>


        </div>
    )
}

export default AllService