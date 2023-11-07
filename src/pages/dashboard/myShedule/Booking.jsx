import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import useFetch from "../../../hooks/useFetch";
import { Link } from "react-router-dom";
import axios from "axios";
import Loading from "../../../components/Loading/Loading";
import toast from "react-hot-toast";
import { MdOutlineSentimentDissatisfied } from "react-icons/md";

const Booking = () => {
    const { user } = useContext(AuthContext)
    const url = user?.email
        ? `https://tour-sport-server.vercel.app/api/v1/buyer/bookings?email=${user.email}`
        : null;
    const { data, setData, loading } = useFetch(url);
    if (data.length == 0) {
        return <div className="flex flex-col items-center  mt-32 p-8 rounded-md ">
            <MdOutlineSentimentDissatisfied size={80} className="text-red-500 animate-bounce" />
            <p className="text-gray-600 text-lg mt-4 font-semibold">Oops!  not available. Your Booking</p>
        </div>
    }
    const handleDeleteBooking = async (id, setData) => {
        try {
            const res = await axios.delete(`https://tour-sport-server.vercel.app/api/v1/booking/${id}`)
            if (res.status === 200) {
                if (res.data.deletedCount > 0) {
                    const remaining = data.filter(booking => booking._id !== id)
                    setData(remaining)
                    toast.success("Deleted Successfully")
                    console.log(res.data)
                }

            }
        } catch (error) {
            console.log(error)
        }
    }

    if (loading) {
        return <Loading />
    }

    return (
        <div>
            <div className="bg-blue-100 dark:bg-blue-200   h-36 w-full flex justify-center items-center">
                <h1 className="lg:text-4xl text-2xl text-blue-400 dark:text-blue-600 font-bold">Your Shedule</h1>

            </div>
            {
                data.length ? <div>
                    <h1 className="dark:text-gray-500 font-bold text-2xl lg:text-4xl text-center py-14 text-gray-500">Your Booking </h1>
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full lg:w-3/4 mx-auto text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Service name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Provider Email
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Date
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Price
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-center">
                                        <span className=" dark:text-white ">action</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    data?.map((booking) => {
                                        return <tr key={booking._id} className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                <div className="flex items-center gap-2">

                                                    <img src={booking?.serviceImage} className="w-8 " />
                                                    {booking?.serviceName}
                                                </div>
                                            </th>
                                            <td className="px-6 py-4">

                                                {booking?.serviceProviderEmail}
                                            </td>
                                            <td className="px-6 py-4">
                                                {booking?.serviceTakingDate}
                                            </td>
                                            <td className="px-6 py-4">
                                                ${
                                                    booking?.servicePrice
                                                }
                                            </td>
                                            <td className="px-6 py-4 text-center">
                                                <Link onClick={() => handleDeleteBooking(booking?._id, setData)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</Link>
                                            </td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div> : ""
            }

        </div>
    )
}

export default Booking