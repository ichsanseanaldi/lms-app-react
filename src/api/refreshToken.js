import jwt_decode from "jwt-decode";
import { axiosInstance } from './axiosInstance';


export const refreshToken = async () => {

    try {

        const { data } = await axiosInstance.get('/auth/refresh');

        const decoded = jwt_decode(data.accessToken);

        return [data, decoded];

    } catch (error) {

        return error

    }

}
