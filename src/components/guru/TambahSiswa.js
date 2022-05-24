import React, { useState } from 'react'
import { useRefresh } from '../../hooks/useRefresh';
import { useAxiosPost } from '../../hooks/useAxiosPost';

export const TambahSiswa = () => {

    const [usernameRegister, setUsername] = useState('');
    const [passwordRegister, setPassword] = useState('');

    const [x, token, tokenExp, resRole] = useRefresh('guru');

    const post = useAxiosPost('/guru/add-akun-siswa', {
        username: usernameRegister,
        password: passwordRegister
    }, token, tokenExp, `/dashboard-${resRole}`);

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
