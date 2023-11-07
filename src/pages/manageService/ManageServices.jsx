import { useContext, useState } from "react"
import useFetch from "../../hooks/useFetch"
import { AuthContext } from "../../context/AuthProvider"
import ManageService from "./ManageService"
import Loading from "../../components/Loading/Loading"
import DataNotAvailable from "../../components/dataNotAvilable/DataNotAvailable"
import { Typewriter } from "react-simple-typewriter"
import { Helmet } from "react-helmet"
const ManageServices = () => {
    const [loopCount, setLoopCount] = useState(-1);

    const handleLoopComplete = () => {

        setLoopCount((prevLoopCount) => prevLoopCount + 1);
    };
    const { user } = useContext(AuthContext)
    const url = user?.email
        ? `https://tour-sport-server.vercel.app/api/v1/my-services?email=${user.email}`
        : null;

    const { data, setData, loading } = useFetch(url);
    if (loading) {
        return <Loading />
    }
    if (data.length === 0) {
        return <div className="flex h-screen justify-center items-center">
            <DataNotAvailable />
        </div>
    }
    return (
        <div>
            <Helmet>
                <title>Manage Services | Tour sport</title>
            </Helmet>
            <div className="bg-blue-100 dark:bg-blue-200   h-36 w-full flex justify-center items-center">
                <h1 className="lg:text-4xl text-2xl text-blue-400 dark:text-blue-600 font-bold">Manage Services</h1>
            </div>
            <div className="max-w-7xl mx-auto pb-10">
                <div className="lg:my-28 my-14 text-center space-y-6 ">

                    <h1 className="text-[#061a3a] dark:text-gray-400 lg:text-4xl text-xl sm:text-2xl font-bold ">Manage <span style={{ color: 'red', fontWeight: 'bold' }}>
                        <Typewriter
                            words={[' Your Services']}
                            loop={loopCount}
                            cursor
                            cursorStyle='❤️'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                            onLoopComplete={handleLoopComplete}

                        />
                    </span></h1>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {
                        data.map(service => <ManageService key={service._id} service={service} data={data} setData={setData} />)
                    }
                </div>

            </div>

        </div>
    )
}

export default ManageServices