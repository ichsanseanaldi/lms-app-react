import React, { useState } from 'react'
import { useRefresh } from '../../hooks/useRefresh';
import { useAxiosPost } from '../../hooks/useAxiosPost';
import { useParams } from 'react-router-dom';

export const TambahExercise = () => {

    const { id } = useParams();
    const [judulExercise, setJudulExercise] = useState('');

    const [x, token, tokenExp, resRole] = useRefresh('guru');

    const randomCode = (() => {

        const date = new Date().getTime().toString().substring(8);

        return date;
    })();

    const post = useAxiosPost('/guru/add-exercise', {
        codeExercise: randomCode,
        judulExercise: judulExercise,
        idcourse: id
    }, token, tokenExp, `/add-soal/${randomCode}`);


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