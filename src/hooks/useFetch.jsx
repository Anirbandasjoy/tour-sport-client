import axios from "axios";
import { useEffect, useState } from "react";
// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../context/AuthProvider";
// import { useNavigate } from "react-router-dom";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    // const { logOut, user } = useContext(AuthContext)
    // const navigate = useNavigate()
    // axios.interceptors.response.use(
    //     (response) => response,
    //     (axiosError) => {
    //         if (axiosError.response && axiosError.response.status === 401 || axiosError.response.status) {
    //             axios.post("http://localhost:5000/logOut", { email: user?.email }, { withCredentials: true })
    //                 .then(() => {
    //                     console.log("logged out backend")
    //                 })
    //             logOut()
    //                 .then(() => {
    //                     console.log("unauthrize logged out user")
    //                     // navigate("/login")

    //                 })
    //         }
    //         return Promise.reject(axiosError);
    //     }
    // );

    const postData = async (url) => {
        try {
            setLoading(true);
            const { data } = await axios.get(url, { withCredentials: true });
            setData(data);
            setLoading(false);
            setError(null);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        postData(url);
    }, [url]);

    return { data, setData, loading, error };
};

export default useFetch;
