
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../api/axiosInstance';

export const useLogout = () => {

    const navigate = useNavigate();

    const logout = async () => {

        try {

            await axiosInstance.delete('/auth/logout');

            navigate('/');

        } catch (error) {

            console.log(error);

        }

    }


    return logout;
}
