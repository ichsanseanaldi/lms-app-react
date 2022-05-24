import { useEffect, useState } from 'react'
import { axiosInstanceIntercept } from '../api/axiosInstance';

const useAxiosGetAll = (url, token, tokenExp) => {

    const [data, setData] = useState([]);

    useEffect(() => {

        if (data.length) return;

        axiosInstanceIntercept.get(url, {
            headers: {
                Authorization: `Bearer ${token}`
            },
            tokenExp: tokenExp
        })
            .then(res => {
                setData(res.data)

            })
            .catch(err => {
                console.log(err);
            })

        return () => console.log('clean up from all!');

    }, [data])

    return data

}

export default useAxiosGetAll;