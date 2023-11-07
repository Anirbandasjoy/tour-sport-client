import axios from "axios";
import PropTypes from "prop-types";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
const ManageService = ({ service, setData, data }) => {
    const { serviceImage, serviceName, servicePrice, serviceProviderImage, serviceProviderName, _id } = service || {};
    const services = data;
    const handleDelete = async (id, setData) => {
        try {
            const res = await axios.delete(`https://tour-sport-server.vercel.app/api/v1/service/${id}`)
            if (res.status === 200) {
                const remainig = services.filter((service) => service._id !== id);
                setData(remainig)
                toast.success("Deleted Successfully")
                console.log(res.data)
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="details">
            <div className="flex flex-col  cursor-pointer  bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 relative dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover w-full flex-1 rounded-t-lg h-full md:h-auto md:w-60 md:rounded-none md:rounded-l-lg" src={serviceImage} />
                <div className=" overlay  hidden lg:block md:w-[18.7rem]  rounded-t-lg h-96  object-cover  md:h-full  absolute ">
                </div>
                <div className="flex flex-col flex-1 justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{serviceName}</h5>
                    <h1 className="lg:text-xl text-[#ff976a] font-bold text-sm">${servicePrice} <span className="text-gray-500"> / </span> <span className="lg:text-sm text-xs text-gray-500 ">Per Person</span> </h1>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    <div className="flex items-center mb-3 ">
                        <div className="flex items-center gap-2">
                            <img className="w-6 rounded-full" src={serviceProviderImage} alt={serviceProviderName} />
                            <h2 className="dark:text-gray-400 text-sm">{serviceProviderName}</h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-2">
                        <Link to={`/service-details/${_id}`}
                            className="text-white rounded-md    bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 text-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Details
                        </Link>
                        <Link
                            to={`/update-service/${_id}`}
                            className="text-white rounded-md    bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 text-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Update
                        </Link>
                        <Link
                            onClick={() => handleDelete(_id, setData)}
                            className="text-white rounded-md    bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 text-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Delete
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

ManageService.propTypes = {
    service: PropTypes.object.isRequired,
    data: PropTypes.array.isRequired,
    setData: PropTypes.func.isRequired
}

export default ManageService;
