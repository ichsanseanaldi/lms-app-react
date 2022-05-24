import axios from 'axios';

const option = {
    withCredentials: true,
    credentials: 'include',
    baseURL: 'https://lms-app-heroku.herokuapp.com/'
}

export const axiosInstance = axios.create(option)

export const axiosInstanceIntercept = axios.create(option)

axiosInstanceIntercept.interceptors.request.use(async (config) => {

    const currentDate = new Date().getTime();

    if (config.tokenExp * 1000 < currentDate) {
        const res = await axiosInstance.get('auth/refresh');
        config.headers.Authorization = `Bearer ${res.data.accessToken}`
    }
    return config

}, err => {
    return Promise.reject(err);
})
