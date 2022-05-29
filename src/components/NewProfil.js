import React, { useState } from 'react'
import { useRefresh } from '../hooks/useRefresh';
import { useDispatch } from 'react-redux';
import { addProfilThunk } from '../redux/user/thunk';
import { useNavigate } from 'react-router-dom';


export const NewProfil = () => {

    const role = localStorage.getItem('role');

    const [token, tokenExp, resRole] = useRefresh(role);

    const [nip, setNip] = useState('');
    const [namaGuru, setNamaGuru] = useState('');

    const [namaSiswa, setNamaSiswa] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const body = (() => {

        if (resRole === 'guru') {
            return {
                nip: nip,
                namaGuru: namaGuru
            }
        }
        else {
            return {
                namaSiswa: namaSiswa
            }
        }
    })();

    const post = () => {

        dispatch(addProfilThunk(body, token, tokenExp, resRole));

        navigate(`/dashboard-${resRole}`, { replace: true });

    }

    return (

        <div>

            <h1>Add Profil</h1>

            <form onSubmit={post}>

                {resRole === 'guru' ?

                    <div>
                        <p>NIP</p>
                        <input type="text" value={nip} name="nip" id="nip" onChange={e => setNip(e.target.value)} />
                        <br />
                        <p>Nama Guru</p>
                        <input type="text" value={namaGuru} name="namaGuru" id="namaGuru" onChange={e => setNamaGuru(e.target.value)} />

                    </div>

                    :

                    <div>
                        <p>Nama Siswa</p>
                        <input type="text" value={namaSiswa} name="namaSiswa" id="namaSiswa" onChange={e => setNamaSiswa(e.target.value)} />
                    </div>


                }

                <br />
                <button type="submit">submit</button>
            </form>

        </div>
    )
}