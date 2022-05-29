import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useLogout } from '../../hooks/useLogout';
import { useRefresh } from '../../hooks/useRefresh';
import { deleteAkunThunk, getAkunThunk } from '../../redux/admin/thunk';


export const DashboardAdmin = () => {

    const [token, tokenExp] = useRefresh('admin');
    const akun = useSelector(state => state.admin.akun);

    const dispatch = useDispatch();
    const logout = useLogout();

    useEffect(() => {
        dispatch(getAkunThunk(token, tokenExp))
    }, [dispatch])

    console.log(akun);


    return (
        <>
            <div>Dashboard Admin</div>
            <Link to={'/register'}>Register Guru</Link>
            <button onClick={logout}>Logout</button>
            <div>
                <p>Akun Guru:</p>
                {akun && akun.map(e => {
                    return (
                        <div key={e.id_akun}>
                            <p >{e.username}</p>
                            <button onClick={() => dispatch(deleteAkunThunk(e.id_akun, token, tokenExp))}>Hapus Akun</button>
                        </div>
                    )
                })}

            </div>
        </>

    )
}
