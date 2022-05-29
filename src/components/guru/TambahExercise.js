import React, { useState } from 'react'
import { useRefresh } from '../../hooks/useRefresh';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addExerciseThunk } from '../../redux/user/thunk';

export const TambahExercise = () => {

    const { id } = useParams();
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [judulExercise, setJudulExercise] = useState('');
    const [token, tokenExp] = useRefresh('guru');

    const randomCode = (() => {
        const date = new Date().getTime().toString().substring(8);
        return date;
    })();

    const body = {
        codeExercise: randomCode,
        judulExercise: judulExercise,
        idcourse: id
    }

    const post = (e) => {
        e.preventDefault();
        dispatch(addExerciseThunk(body, token, tokenExp))
        navigate(`/add-soal/${randomCode}`, { replace: true });
    }

    return (
        <div>

            <h1>Tambah Exercise</h1>

            <form onSubmit={post}>
                <input type="text" name="judulExercise" placeholder='judulExercise' value={judulExercise} onChange={e => setJudulExercise(e.target.value)} />
                <br />
                <br />
                <input type="submit" value="submit" />
            </form>

        </div>
    )
}