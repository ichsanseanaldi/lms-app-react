import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { refreshToken } from '../api/refreshToken';

export const useRefresh = (role) => {

    const [username, setUsername] = useState('');
    const [token, setToken] = useState('')
    const [tokenExp, setTokenExp] = useState('');
    const [resRole, setResRole] = useState('');

    const navigate = useNavigate();

    useEffect(() => {

        refreshToken()
            .then(res => {
                setToken(res[0].accessToken);
                setUsername(res[1].username);
                setTokenExp(res[1].exp);
                setResRole(res[1].role);
                if (res[1].role !== role) navigate('/');
            })
            .catch(err => {
                navigate('/');
            })



    })

    return [username, token, tokenExp, resRole]
}
