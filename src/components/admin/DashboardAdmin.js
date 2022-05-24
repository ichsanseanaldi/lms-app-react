import React from 'react'

import { Link } from 'react-router-dom';

import useAxiosGetAll from '../../hooks/useAxiosGetAll';
import { useLogout } from '../../hooks/useLogout';
import { useRefresh } from '../../hooks/useRefresh';

export const DashboardAdmin = () => {

    const [username, token, tokenExp] = useRefresh('admin');
    const akun = useAxiosGetAll('/admin/get-akun-guru', token, tokenExp);

    const logout = useLogout();

    return (
        <>
            <div>DashboardAdmin : {username}</div>
            <Link to={'/register'}>Register Guru</Link>
            <button onClick={logout}>Logout</button>
            <div>
                <p>Akun Guru:</p>
                {akun && akun.map(e => {
                    return (

                        <p key={e.id_akun}>{e.username}</p>

                    )
                })}

            </div>
        </>

    )
}
