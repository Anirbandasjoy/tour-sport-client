import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import useFetch from "../../../hooks/useFetch";
import Loading from "../../../components/Loading/Loading";
import axios from "axios";

const PendingWork = () => {
    const { user } = useContext(AuthContext);
    const url = user?.email
        ? `http://localhost:5000/api/v1/provider/bookings?email=${user.email}`
        : null;
    const { data, loading } = useFetch(url);

    const [statuses, setStatuses] = useState({});

    const handleChange = (e, id) => {
        setStatuses((prevStatuses) => ({
            ...prevStatuses,
            [id]: e,
        }));

        axios
            .patch(`http://localhost:5000/api/v1/status/${id}`, { status: e })
            .then((res) => {
                if (res.status === 200) {
                    alert("Status Update Successfully");
                    console.log(res.data);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        const initialStatuses = {};
        data.forEach((booking) => {
            initialStatuses[booking._id] = booking.status;
        });
        setStatuses(initialStatuses);
    }, [data]);

    return (
        <div className="mt-16">
            {data.length ? (
                <div>
                    {loading ? (
                        <Loading />
                    ) : (
                        <>
                            <h1 className="dark:text-gray-500 font-bold text-2xl lg:text-4xl text-center py-14 text-gray-500">
                                Your Pending Work
                            </h1>
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
                                                <span className="dark:text-white">action</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data?.map((booking) => {
                                            return (
                                                <tr
                                                    key={booking._id}
                                                    className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover-bg-gray-600"
                                                >
                                                    <th
                                                        scope="row"
                                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                                    >
                                                        <div className="flex items-center gap-2">
                                                            <img src={booking?.serviceImage} className="w-8 " />
                                                            {booking?.serviceName}
                                                        </div>
                                                    </th>
                                                    <td className="px-6 py-4">{booking?.buyerEmail}</td>
                                                    <td className="px-6 py-4">{booking?.serviceTakingDate}</td>
                                                    <td className="px-6 py-4">${booking?.servicePrice}</td>
                                                    <td className="px-6 py-4 flex justify-center">
                                                        <select
                                                            value={statuses[booking._id] || "Pending"}
                                                            onChange={(e) => handleChange(e.target.value, booking._id)}
                                                            id="states"
                                                            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-r-lg border-l-gray-100 dark:border-l-gray-700 border-l-2 focus:ring-blue-500 focus:border-blue-500 block lg:w-2/4 w-full text-xs justify-end p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                        >
                                                            <option value="Pending">Pending</option>
                                                            <option value="Process">Process</option>
                                                            <option value="Approved">Approved</option>
                                                        </select>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </>
                    )}
                </div>
            ) : ""}
        </div>
    );
}

export default PendingWork;
