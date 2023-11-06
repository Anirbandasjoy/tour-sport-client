import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import useFetch from "../../../hooks/useFetch";
import { Link } from "react-router-dom";
import Loading from "../../../components/Loading/Loading";
const PendingWork = () => {
    const { user } = useContext(AuthContext)
    const url = user?.email
        ? `http://localhost:5000/api/v1/provider/bookings?email=${user.email}`
        : null;
    const { data, loading } = useFetch(url);


    return (
        <div>

            {
                data.length ? <div>
                    {
                        loading ? <Loading /> : <>
                            <h1 className="dark:text-gray-200 text-2xl lg:text-4xl text-center py-14 text-gray-500">Your Pending Work </h1>
                            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                                <table className="w-full lg:w-3/4 mx-auto text-sm text-left text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th scope="col" className="px-6 py-3">
                                                Service name
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                buyer Email
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

                                                        {booking?.buyerEmail}
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
                                                        <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Pending</Link>
                                                    </td>
                                                </tr>
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </>
                    }
                </div> : ""
            }

        </div>
    )
}

export default PendingWork