import { useEffect, useState } from 'react'
import { axiosInstanceIntercept } from '../api/axiosInstance';


const useAxiosGetSingle = (url, token, tokenExp) => {

    const [data, setData] = useState('');

    useEffect(() => {


        axiosInstanceIntercept.get(url, {
            headers: {
                Authorization: `Bearer ${token}`
            },
            tokenExp: tokenExp
        })
            .then(res => {

                setData(res.data)

            })
            .catch(err => console.log(err))

        return () => console.log('clean up from single!');

    }, [url])

    return data;


}

export default useAxiosGetSingle;