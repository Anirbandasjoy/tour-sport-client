import { useContext } from "react"
import useFetch from "../../../../hooks/useFetch"
import { AuthContext } from "../../../../context/AuthProvider"

const MyService = () => {
    const { user } = useContext(AuthContext)
    const url = user?.email
        ? `http://localhost:5000/api/v1/my-services?email=${user.email}`
        : null;
    const { data } = useFetch(url);
    console.log(data)
    return (
        <div>
            <div className="bg-blue-100 dark:bg-blue-200   h-36 w-full flex justify-center items-center">
                <h1 className="lg:text-4xl text-2xl text-blue-400 dark:text-blue-600 font-bold">My Services</h1>
            </div>
        </div>
    )
}

export default MyService