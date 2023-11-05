import axios from "axios"
import { useEffect, useState } from "react"

const useFetch = (url) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const postData = async (url) => {
        try {
            setLoading(true)
            const { data } = await axios.get(url)
            setData(data)
            setLoading(false)
            setError(null)
        } catch (error) {
            setError(error.message)
            setLoading(false)
        }
    }

    useEffect(() => {
        postData(url)
    }, [url])

    return { data, setData, loading, error }

}

export default useFetch