import React, { useState } from 'react'
import { useRefresh } from '../../hooks/useRefresh';
import { useAxiosPost } from '../../hooks/useAxiosPost';


export const Register = () => {

    const [usernameRegister, setUsername] = useState('');
    const [passwordRegister, setPassword] = useState('');

    const [username, token, tokenExp, resRole] = useRefresh('admin');

    const post = useAxiosPost('admin/register-akun', {
        username: usernameRegister,
        password: passwordRegister
    }, token, tokenExp, `/dashboard-${resRole}`);

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
