import axios from "axios"
import { useContext, useEffect } from "react"
import { AuthContext } from "../context/AuthProvider"
const axiosSecure = axios.create({
    baseURL: 'https://tour-sport-server.vercel.app',
    withCredentials: true
})
const useAxios = () => {
    const authInformation = useContext(AuthContext)
    // const navigate = useNavigate()
    useEffect(() => {
        axios.interceptors.response.use(res => {
            return res
        }, error => {
            console.log("track this error", error)
            if (error.response.status === 401 || error.response.status === 403) {
                authInformation?.logOut()
                    .then(() => {
                        // <Navigate to="/login" />
                    })
                    .catch((err) => console.log(err))
            }

        }
        )
    }, [authInformation])
    return axiosSecure
}

export default useAxios