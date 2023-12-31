import { useContext } from "react";
import MyService from "./MyService"
import useFetch from "../../../../hooks/useFetch";
import { AuthContext } from "../../../../context/AuthProvider";
import Loading from "../../../../components/Loading/Loading";
import DataNotAvailable from "../../../../components/dataNotAvilable/DataNotAvailable";
import { Helmet } from "react-helmet";
const MyServices = () => {
    const { user } = useContext(AuthContext)
    const url = user?.email
        ? `https://tour-sport-server.vercel.app/api/v1/my-services?email=${user?.email}`
        : null;
    const { data, setData, loading } = useFetch(url);
    if (loading) {
        return <Loading />
    }
    if (data.length === 0) {
        return <div className="flex h-screen justify-center items-center">
            <Helmet>
                <title>Dashboard-myService| Tour sport</title>
            </Helmet>
            <DataNotAvailable />
        </div>
    }
    return (
        <div>
            <Helmet>
                <title>Dashboard-myService| Tour sport</title>
            </Helmet>
            <div className="bg-blue-100 dark:bg-blue-200   h-36 w-full flex justify-center items-center">
                <h1 className="lg:text-4xl text-2xl text-blue-400 dark:text-blue-600 font-bold">My Services</h1>
            </div>
            <div className="max-w-7xl mx-auto pb-10">
                <div className="lg:my-28 my-14 text-center space-y-6 ">
                    <h4 className="text-[#808080] lg:text-[1rem] text-xs sm:text-sm  uppercase font-bold ">MODERN & BEAUTIFUL</h4>
                    <h1 className="text-[#061a3a] dark:text-gray-400 lg:text-4xl text-xl sm:text-2xl font-bold ">Your Services</h1>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {
                        data.map(service => <MyService key={service._id} service={service} data={data} setData={setData} />)
                    }
                </div>

            </div>

        </div>
    )
}

export default MyServices