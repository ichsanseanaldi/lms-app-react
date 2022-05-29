import React, { useState } from 'react'
import { useRefresh } from '../../hooks/useRefresh';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addAkunThunk } from '../../redux/admin/thunk';


export const Register = () => {

    const [usernameRegister, setUsername] = useState('');
    const [passwordRegister, setPassword] = useState('');

    const [token, tokenExp, resRole] = useRefresh('admin');

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const post = (e) => {

        e.preventDefault();

        dispatch(addAkunThunk({
            username: usernameRegister,
            password: passwordRegister
        }, token, tokenExp))

        navigate('/dashboard-admin');
    }

    return (

        <div>

            <h1>Register Akun Guru</h1>

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
