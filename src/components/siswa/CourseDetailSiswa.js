import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useRefresh } from '../../hooks/useRefresh'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCourseExerciseThunk, getCourseMateriThunk } from '../../redux/user/thunk';

export const CourseDetailSiswa = () => {

    const { id } = useParams()
    const dispatch = useDispatch();

    const [token, tokenExp] = useRefresh('siswa');
    const course = useSelector(state => state.user.course);
    const exercise = useSelector(state => state.user.exercise);
    const detail = course.filter(e => e.id_course == id);
    const materi = useSelector(state => state.user.materi);

    useEffect(() => {
        dispatch(getCourseMateriThunk(token, tokenExp, id))
        dispatch(getCourseExerciseThunk(token, tokenExp, id))
    }, [dispatch])

    console.log(materi);

    return (
        <div>
            <div>CourseDetail id : {id}</div>
            <div>
                <h4>Detail course Siswa</h4>
                {detail && detail.map((e) => {
                    return (
                        <div key={e.course.id_course}>
                            <p>{e.course.id_course}</p>
                            <p>{e.course.code_course}</p>
                            <p>{e.course.judul_course}</p>
                            <p>{e.course.deskripsi_course}</p>
                        </div>
                    )
                })
                }
            </div>
            <p>------------------------------</p>
            <div>
                <h4>Materi Course</h4>
                {materi.length > 0 && materi.map(e => {
                    return (
                        <div key={e.course_materi.id_materi}>
                            <p>{e.course_materi.id_materi}</p>
                            <p>{e.course_materi.judul_materi}</p>
                            <p>{e.course_materi.point_materi}</p>
                            <Link to={`/course-materi/${e.course_materi.id_materi}`}>Materi Detail.. </Link>
                        </div>
                    )

                })}
            </div>
            <p>------------------------------</p>
            <div>
                <h4>Exercise Course</h4>
                {exercise.length > 0 && exercise.map(e => {
                    return (
                        <div key={e.id_joint_exercise}>
                            <p>{e.course_exercise.judul_exercise}</p>
                            {e.isFinished === 'false' ? <Link to={`/course-exercise/${e.id_exercise}`}>Exercise Detail.. </Link> : <p>Exercise telah diselesaikan</p>}
                        </div>
                    )
                })}
            </div>

        </div>


    )
}
