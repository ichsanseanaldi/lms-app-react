import React, { useEffect } from 'react'
import { useRefresh } from '../../hooks/useRefresh';
import { useDispatch } from 'react-redux';
import { getProfilThunk } from '../../redux/user/thunk';
import { useNavigate } from 'react-router-dom';


export const Transition = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const role = localStorage.getItem('role');

    const [token, tokenExp] = useRefresh(role);

    useEffect(() => {
        dispatch(getProfilThunk(token, tokenExp, role));
        navigate(`/dashboard-${role}`, { replace: true });
    }, [dispatch])

    return (
        <div>loading..</div>
    )
}
