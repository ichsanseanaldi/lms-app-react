import React, { useState } from 'react'
import { useRefresh } from '../../hooks/useRefresh';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addCourseThunk } from '../../redux/user/thunk';

export const TambahCourse = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [judulCourse, setJudulCourse] = useState('');
    const [deskripsiCourse, setDeskripsiCourse] = useState('');

    const [token, tokenExp] = useRefresh('guru');
    const id_profil = useSelector(state => state.user.profil.id_profil_guru)

    const randomCode = (() => {

        const date = new Date().getTime().toString().substring(8);

        return date;

    })();

    const body = {
        codeCourse: randomCode,
        judulCourse: judulCourse,
        deskripsiCourse: deskripsiCourse,
        idProfil: id_profil
    }

    const post = (e) => {
        e.preventDefault();
        dispatch(addCourseThunk(body, token, tokenExp))
        navigate('/dashboard-guru', { replace: true });
    }

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