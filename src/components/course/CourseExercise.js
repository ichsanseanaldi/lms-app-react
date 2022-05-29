import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { useRefresh } from '../../hooks/useRefresh'
import useAxiosGetSingle from '../../hooks/useAxiosGetSingle'
import { getCourseExerciseSoalThunk, verifyAnswerThunk } from '../../redux/user/thunk';

export const CourseExercise = () => {

    const { id } = useParams();
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const role = localStorage.getItem('role');

    const [token, tokenExp, resRole] = useRefresh(role);
    const [optionKey, setOptionKey] = useState([]);
    const { code_exercise } = useAxiosGetSingle(`course/get-course-exercise-id/${id}`, token, tokenExp)
    const soal = useSelector(state => state.user.soal)

    useEffect(() => {
        dispatch(getCourseExerciseSoalThunk(token, tokenExp, id))
    }, [dispatch])


    const body = {
        jawaban: optionKey,
        idexercise: id
    }

    const post = () => {
        dispatch(verifyAnswerThunk(body, token, tokenExp))
        navigate(`/dashboard-siswa`, { replace: true })
    }

    const handleChange = (e) => {
        const obj = {
            idSoal: e.target.name,
            answer: e.target.value
        }
        if (optionKey.length > 0) {
            setOptionKey([...optionKey.filter(e => e.idSoal !== obj.idSoal), obj])
        }
        else {
            setOptionKey([obj])
        }

    }

    return (
        <div>
            <div>Course Exercise : {id}</div>
            {soal.length < 1 &&
                <div>
                    <p>belum ada soal</p>
                    {resRole === ' guru' && <Link to={`/add-soal/${code_exercise}`}>Tambah Soal</Link>}
                </div>

            }
            <form onSubmit={post}>
                {soal.length > 0 && soal.map((e) => {
                    return (
                        <div key={e.id_soal}>
                            <p>{e.nomor_soal}</p>
                            <p>{e.pertanyaan_soal}</p>
                            {resRole === 'siswa' && <input type="radio" name={e.id_soal} id="optionAradio" value='option_a' onChange={e => handleChange(e)} />}
                            <p>{e.option_a}</p>
                            {resRole === 'siswa' && <input type="radio" name={e.id_soal} id="optionBradio" value='option_b' onChange={e => handleChange(e)} />}
                            <p>{e.option_b}</p>
                            {resRole === 'siswa' && <input type="radio" name={e.id_soal} id="optionCradio" value='option_c' onChange={e => handleChange(e)} />}
                            <p>{e.option_c}</p>
                            {resRole === 'siswa' && <input type="radio" name={e.id_soal} id="optionDradio" value='option_d' onChange={e => handleChange(e)} />}
                            <p>{e.option_d}</p>
                            <p>{e.point_soal}</p>
                            {resRole === 'guru' &&
                                <div>
                                    <p>{e.option_key}</p>
                                </div>
                            }
                        </div>
                    )
                })
                }
                {resRole === 'siswa' && soal.length > 0 && <button type="submit">submit</button>}
            </form>
            {resRole === 'guru' && soal.length === 0 && <div><Link to={`/add-soal/${code_exercise}`}>Tambah Soal</Link></div>}
        </div >

    )
}
