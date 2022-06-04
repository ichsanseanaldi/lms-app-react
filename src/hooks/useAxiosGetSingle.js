import { useEffect, useState } from 'react'
import { axiosInstanceIntercept } from '../api/axiosInstance';


const useAxiosGetSingle = (url, token, tokenExp) => {

    const [data, setData] = useState(null);

    useEffect(() => {

        if (data !== null) return;

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

    }, [data])

    return data;


}

export default useAxiosGetSingle;