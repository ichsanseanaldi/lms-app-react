import jwtDecode from 'jwt-decode';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../api/axiosInstance';

export const Login = () => {


    useEffect(() => {
        localStorage.removeItem('role');
    }, [])


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const authLogin = async (e) => {
        e.preventDefault();

        try {

            const res = await axiosInstance.post('/auth/login', {
                username: username,
                password: password
            })

            const decode = jwtDecode(res.data.accessToken);

            // console.log(decode);
            localStorage.setItem('role', decode.role);

            if (decode.isNew === 'no') {
                navigate(`/dashboard-${decode.role}`);
            }
            else {
                navigate(`/add-profil`);
            }


        } catch (error) {

            console.log(error.response.data.msg);
        }

    }

    return (

        <div>

            <h1>Login</h1>

            <form onSubmit={authLogin}>
                <input type="text" name="username" placeholder='username' value={username} onChange={e => setUsername(e.target.value)} />
                <br />
                <br />
                <input type="password" name="password" placeholder='password' value={password} onChange={e => setPassword(e.target.value)} />
                <br />
                <br />
                <input type="submit" value="submit" />
            </form>


        </div>
    )
}

