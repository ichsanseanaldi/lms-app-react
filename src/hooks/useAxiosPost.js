
import { useNavigate } from 'react-router-dom';
import { axiosInstanceIntercept } from '../api/axiosInstance';

export const useAxiosPost = (url, body, token, tokenExp, redirectUrl) => {

    const navigate = useNavigate();

    const post = async (e) => {

        e.preventDefault();

        try {
            const res = await axiosInstanceIntercept.post(url, body, {
                headers: {
                    Authorization: `Bearer ${token}`
                },
                tokenExp: tokenExp
            })

            navigate(redirectUrl);

        } catch (error) {

            console.log(error);


        }


    }

    return post;
}
