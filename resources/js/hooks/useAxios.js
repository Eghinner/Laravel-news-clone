import { useEffect, useState} from 'react'
import axios from 'axios'

axios.defaults.baseURL = process.env.APP_URL

const useAxios = (axiosParams) => {
    const [response, setResponse] = useState(undefined)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    const fetchData = async (params) => {
      try {
       const {data: result} = await axios.request(params);
       // console.log(result)
       setResponse(result.data);
       } catch( error ) {
         setError(error);
       } finally {
         setLoading(false);
       }
    };

    useEffect(() => {
        fetchData(axiosParams);
    }, [])

    return { response, error, loading };
};

export default useAxios;