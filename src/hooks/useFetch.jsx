import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { logOut, user } = useContext(AuthContext)
    axios.interceptors.response.use(
        (response) => response,
        (axiosError) => {
            if (axiosError.response && axiosError.response.status === 401 || axiosError.response.status) {
                axios.post("https://tour-sport-server.vercel.app/logOut", { email: user?.email }, { withCredentials: true })
                    .then(() => {

                    })
                logOut()
                    .then(() => {


                    })
            }
            return Promise.reject(axiosError);
        }
    );

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
