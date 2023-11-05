import { useContext } from "react"
import useFetch from "../../../../hooks/useFetch"
import { AuthContext } from "../../../../context/AuthProvider"
import MyService from "./MyService"
const MyServices = () => {
    const { user } = useContext(AuthContext)
    const url = user?.email
        ? `http://localhost:5000/api/v1/my-services?email=${user.email}`
        : null;
    const { data, setData } = useFetch(url);
    console.log(data)
    return (
        <div className="max-w-7xl mx-auto pb-10">
            <div className="lg:my-28 my-14 text-center space-y-6 ">
                <h4 className="text-[#808080] lg:text-[1rem] text-xs sm:text-sm  uppercase font-bold ">MODERN & BEAUTIFUL</h4>
                <h1 className="text-[#061a3a] dark:text-gray-400 lg:text-4xl text-xl sm:text-2xl font-bold ">Our Most Popular Adventures</h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {
                    data.map(service => <MyService key={service._id} service={service} data={data} setData={setData} />)
                }
            </div>

        </div>
    )
}

export default MyServices