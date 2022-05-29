import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useRefresh } from '../../hooks/useRefresh';
import { getCourseByCodeThunk, joinCourseThunk } from '../../redux/user/thunk';

export const CariCourse = () => {

    const [code, setCode] = useState('')
    const [token, tokenExp] = useRefresh('siswa');

    const course = useSelector(state => state.user.course);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { coursedetail, joint, materi, exercise } = course;

    const body = {
        idcourse: coursedetail && coursedetail.id_course
    }

    const post = () => {
        dispatch(joinCourseThunk(body, token, tokenExp));
        navigate('/dashboard-siswa', { replace: true });
    }

    const get = (e) => {
        e.preventDefault();
        dispatch(getCourseByCodeThunk(token, tokenExp, code));
    }

    return (
        <>
            <form onSubmit={get}>
                <div>CariCourse</div>
                <input type="text" id='code' value={code} name='code' onChange={e => setCode(e.target.value)} />
                <button type="submit">submit</button>
            </form>
            <div>
                {course[0] !== '' && coursedetail &&
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