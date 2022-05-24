import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useRefresh } from '../../hooks/useRefresh'
import useAxiosGetAll from '../../hooks/useAxiosGetAll'
import useAxiosGetSingle from '../../hooks/useAxiosGetSingle'
import { useAxiosPost } from '../../hooks/useAxiosPost'


export const CourseExercise = () => {

    const { id } = useParams();

    const role = localStorage.getItem('role');

    const [username, token, tokenExp, resRole] = useRefresh(role);
    const [optionKey, setOptionKey] = useState([]);
    const soal = useAxiosGetAll(`course/get-course-exercise/${id}/soal`, token, tokenExp);
    const { code_exercise } = useAxiosGetSingle(`course/get-course-exercise-id/${id}`, token, tokenExp)


    const post = useAxiosPost('course/verify-answer', {
        jawaban: optionKey,
        idexercise: id
    }, token, tokenExp, `/dashboard-${resRole}`);

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

    console.log(soal);

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
                            <input type="radio" name={e.id_soal} id="optionAradio" value='option_a' onChange={e => handleChange(e)} />
                            <p>{e.option_a}</p>
                            <input type="radio" name={e.id_soal} id="optionBradio" value='option_b' onChange={e => handleChange(e)} />
                            <p>{e.option_b}</p>
                            <input type="radio" name={e.id_soal} id="optionCradio" value='option_c' onChange={e => handleChange(e)} />
                            <p>{e.option_c}</p>
                            <input type="radio" name={e.id_soal} id="optionDradio" value='option_d' onChange={e => handleChange(e)} />
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
                {soal.length > 0 && <button type="submit">submit</button>}
            </form>
            {resRole === 'guru' && <div><Link to={`/add-soal/${code_exercise}`}>Tambah Soal</Link></div>}
        </div >

    )
}
