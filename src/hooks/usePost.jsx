import axios from "axios"
import { useEffect, useState } from "react"

const usePost = (url, info) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const postData = async (url, info) => {
        try {
            setLoading(true)
            const { data } = await axios.post(url, info)
            setData(data)
            setLoading(false)
            setError(null)
        } catch (error) {
            setError(error.message)
            setLoading(false)
        }
    }

    useEffect(() => {
        postData(url, info)
    }, [url, info])

    return { data, loading, error }

}

export default usePost