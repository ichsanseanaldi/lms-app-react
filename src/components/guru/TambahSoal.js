import React, { useState } from 'react'
import useAxiosGetSingle from '../../hooks/useAxiosGetSingle';
import { useRefresh } from '../../hooks/useRefresh';
import { useAxiosPost } from '../../hooks/useAxiosPost';
import { useParams } from 'react-router-dom';

export const TambahSoal = () => {

    const { randomcode } = useParams();

    const [nomorSoal, setNomorSoal] = useState('');
    const [pertanyaanSoal, setPertanyaanSoal] = useState('');
    const [optionA, setOptionA] = useState('');
    const [optionB, setOptionB] = useState('');
    const [optionC, setOptionC] = useState('');
    const [optionD, setOptionD] = useState('');
    const [optionKey, setOptionKey] = useState('');
    const [pointSoal, setPointSoal] = useState('');

    const [x, token, tokenExp, resRole] = useRefresh('guru');
    const exercise = useAxiosGetSingle(`course/get-course-exercise/${randomcode}`, token, tokenExp);

    const post = useAxiosPost('/guru/add-exercise-soal', {
        nomorSoal: nomorSoal,
        pertanyaanSoal: pertanyaanSoal,
        optionA: optionA,
        optionB: optionB,
        optionC: optionC,
        optionD: optionD,
        optionKey: optionKey,
        pointSoal: pointSoal,
        idExercise: exercise.id_exercise
    }, token, tokenExp, `/dashboard-${resRole}`);


    return (
        <div>

            <h1>Tambah Soal</h1>
            <p>{optionKey}</p>
            <form onSubmit={post}>
                <input type="text" name="nomorSoal" placeholder='nomorSoal' value={nomorSoal} onChange={e => setNomorSoal(e.target.value)} />
                <br />
                <input type="text" name="pertanyaanSoal" placeholder='pertanyaanSoal' value={pertanyaanSoal} onChange={e => setPertanyaanSoal(e.target.value)} />
                <br />
                <input type="radio" name="option" id="optionAradio" value='option_a' onChange={e => setOptionKey(e.target.value)} />
                <input type="text" name="optionA" placeholder='optionA' value={optionA} onChange={e => setOptionA(e.target.value)} />
                <br />
                <input type="radio" name="option" id="optionBradio" value='option_b' onChange={e => setOptionKey(e.target.value)} />
                <input type="text" name="optionB" placeholder='optionB' value={optionB} onChange={e => setOptionB(e.target.value)} />
                <br />
                <input type="radio" name="option" id="optionCradio" value='option_c' onChange={e => setOptionKey(e.target.value)} />
                <input type="text" name="optionC" placeholder='optionC' value={optionC} onChange={e => setOptionC(e.target.value)} />
                <br />
                <input type="radio" name="option" id="optionDradio" value='option_d' onChange={e => setOptionKey(e.target.value)} />
                <input type="text" name="optionD" placeholder='optionD' value={optionD} onChange={e => setOptionD(e.target.value)} />
                {/* <input type="text" name="optionKey" placeholder='optionKey' value={optionKey} onChange={e => setOptionKey(e.target.value)} /> */}
                <br />
                <input type="text" name="pointSoal" placeholder='pointSoal' value={pointSoal} onChange={e => setPointSoal(e.target.value)} />
                <br />
                <br />
                <input type="submit" value="submit" />
                <br />
            </form>

        </div>
    )
}
