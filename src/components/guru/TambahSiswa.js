import React, { useState } from 'react'
import { useRefresh } from '../../hooks/useRefresh';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addSiswaThunk } from '../../redux/user/thunk';

export const TambahSiswa = () => {

    const [usernameRegister, setUsername] = useState('');
    const [passwordRegister, setPassword] = useState('');

    const [token, tokenExp] = useRefresh('guru');

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const body = {
        username: usernameRegister,
        password: passwordRegister
    }

    const post = (e) => {
        e.preventDefault();
        dispatch(addSiswaThunk(body, token, tokenExp))
        navigate(`/dashboard-guru`, { replace: true })
    }

    return (
        <div>

            <h1>Tambah Akun Siswa</h1>

            <form onSubmit={post}>
                <input type="text" name="username" placeholder='username' value={usernameRegister} onChange={e => setUsername(e.target.value)} />
                <br />
                <br />
                <input type="password" name="password" placeholder='password' value={passwordRegister} onChange={e => setPassword(e.target.value)} />
                <br />
                <br />
                <input type="submit" value="submit" />
            </form>


        </div>
    )

}
