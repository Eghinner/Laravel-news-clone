import axios from 'axios'
// import {logOut} from '@/util/auth'

export default const api = () => {
    const api = axios.create({
        baseURL: process.env.APP_URL,
        // timeout: 1000,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
        // withCredentials: true,
    })

    // api.interceptors.response.use(response => response, error => {
    //     if (error.response.status === 401) {
    //         // logOut()

    //         return Promise.reject()
    //     }

    //     return Promise.reject(error)
    // })

    return api
}
