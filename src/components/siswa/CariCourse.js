import React, { useState } from 'react'

import { axiosInstanceIntercept } from '../../api/axiosInstance';

import { useAxiosPost } from '../../hooks/useAxiosPost';
import { useRefresh } from '../../hooks/useRefresh';


export const CariCourse = () => {

    const [code, setCode] = useState('')
    const [course, setCourse] = useState('')
    const [username, token, tokenExp, resRole] = useRefresh('siswa');

    const { coursedetail, joint, materi, exercise } = course;

    // const course = useAxiosGetSingle(`course/get-course-detail-code/${code}`, token, tokenExp);
    const post = useAxiosPost(`course/join`, {
        idcourse: coursedetail && coursedetail.id_course
    }, token, tokenExp, `/dashboard-${resRole}`);

    const get = (e) => {

        e.preventDefault();

        axiosInstanceIntercept.get(`course/get-course-detail-code/${code}`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
            tokenExp: tokenExp
        })
            .then(res => {

                setCourse(res.data)

            })
            .catch(err => console.log(err))
    }


    console.log(course);


    return (
        <>
            <form onSubmit={get}>
                <div>CariCourse</div>
                <input type="text" id='code' value={code} name='code' onChange={e => setCode(e.target.value)} />
                <button type="submit">submit</button>
            </form>
            <div>
                {course &&
                    <div>
                        <h1>{coursedetail.code_course}</h1>
                        <h1>{coursedetail.judul_course}</h1>
                        <h1>{coursedetail.deskripsi_course}</h1>
                        {joint ? <p>Sudah Join!</p> : materi.length < 1 || exercise.length < 1 ? <p>Course ini belum memiliki materi/exercise</p> : <button type='submit' onClick={post}>Join Course</button>}
                    </div>}

            </div>
        </>

    )
}
