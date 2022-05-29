import React, { useRef, useState } from 'react'
import useAxiosGetSingle from '../../hooks/useAxiosGetSingle';
import { useRefresh } from '../../hooks/useRefresh';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addExerciseSoalThunk } from '../../redux/user/thunk';

export const TambahSoal = () => {

    const { randomcode } = useParams();

    const nomorSoal = useRef(1);
    const [pertanyaanSoal, setPertanyaanSoal] = useState('');
    const [optionA, setOptionA] = useState('');
    const [optionB, setOptionB] = useState('');
    const [optionC, setOptionC] = useState('');
    const [optionD, setOptionD] = useState('');
    const [optionKey, setOptionKey] = useState('');
    const [pointSoal, setPointSoal] = useState('');

    const [token, tokenExp] = useRefresh('guru');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const exercise = useAxiosGetSingle(`course/get-course-exercise/${randomcode}`, token, tokenExp);

    const body = {
        nomorSoal: nomorSoal.current,
        pertanyaanSoal: pertanyaanSoal,
        optionA: optionA,
        optionB: optionB,
        optionC: optionC,
        optionD: optionD,
        optionKey: optionKey,
        pointSoal: pointSoal,
        idExercise: exercise && exercise.id_exercise
    }

    const post = (e) => {
        e.preventDefault();
        dispatch(addExerciseSoalThunk(body, token, tokenExp))
        navigate(`/dashboard-guru`, { replace: true });
    }

    const next = (e) => {
        e.preventDefault();
        dispatch(addExerciseSoalThunk(body, token, tokenExp))
        nomorSoal.current = nomorSoal.current + 1
        setPertanyaanSoal('')
        setOptionKey('')
        setOptionA('')
        setOptionB('')
        setOptionC('')
        setOptionD('')
        setPointSoal('')
    }

    return (
        <div>

            <h1>Tambah Soal</h1>
            <p>{optionKey}</p>
            {nomorSoal.current <= 5 ?
                <>
                    <form onSubmit={post}>
                        <p>Nomor : {nomorSoal.current}</p>
                        <input type="hidden" name="nomorSoal" placeholder='nomorSoal' value={nomorSoal.current} />
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
                        <br />
                        <input type="text" name="pointSoal" placeholder='pointSoal' value={pointSoal} onChange={e => setPointSoal(e.target.value)} />
                        <br />
                        <br />
                        <input type="submit" value="submit" />

                        <br />
                    </form>
                    <button onClick={next}>Next</button>
                </>

                :

                <><p>Batas Maksimum Soal 5</p></>
            }
        </div>
    )
}
