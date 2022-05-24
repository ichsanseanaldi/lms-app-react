import React, { useState } from 'react'
import useAxiosGetSingle from '../../hooks/useAxiosGetSingle';
import { useRefresh } from '../../hooks/useRefresh';
import { useAxiosPost } from '../../hooks/useAxiosPost';

export const TambahCourse = () => {

    const [judulCourse, setJudulCourse] = useState('');
    const [deskripsiCourse, setDeskripsiCourse] = useState('');

    const [x, token, tokenExp, resRole] = useRefresh('guru');
    const profil = useAxiosGetSingle('guru/get-profil', token, tokenExp)

    const randomCode = (() => {

        const date = new Date().getTime().toString().substring(8);

        return date;
    })();

    const post = useAxiosPost('guru/add-course', {
        codeCourse: randomCode,
        judulCourse: judulCourse,
        deskripsiCourse: deskripsiCourse,
        idProfil: profil.id_profil_guru
    }, token, tokenExp, `/dashboard-${resRole}`);


    return (
        <div>

            <h1>Tambah Course</h1>

            <form onSubmit={post}>
                <input type="text" name="judulCourse" placeholder='judulCourse' value={judulCourse} onChange={e => setJudulCourse(e.target.value)} />
                <br />
                <br />
                <input type="text" name="deskripsiCourse" placeholder='deskripsiCourse' value={deskripsiCourse} onChange={e => setDeskripsiCourse(e.target.value)} />
                <br />
                <br />
                <input type="submit" value="submit" />
            </form>

        </div>
    )

}