import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useRefresh } from '../../hooks/useRefresh'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCourseExerciseThunk, getCourseMateriThunk } from '../../redux/user/thunk';

export const CourseDetailGuru = () => {

    const { id } = useParams()
    const dispatch = useDispatch();

    const [token, tokenExp] = useRefresh('guru');
    const course = useSelector(state => state.user.course);
    const exercise = useSelector(state => state.user.exercise);
    const detail = course.filter(e => e.id_course == id);
    const materi = useSelector(state => state.user.materi);

    useEffect(() => {
        dispatch(getCourseMateriThunk(token, tokenExp, id))
        dispatch(getCourseExerciseThunk(token, tokenExp, id))
    }, [dispatch])

    console.log(materi, detail, materi);

    return (
        <div>
            <div>CourseDetail id : {id}</div>
            <div>
                <h4>Detail course</h4>
                {detail && detail.map((e) => {
                    return (
                        <div key={e.id_course}>
                            <p>{e.id_course}</p>
                            <p>{e.code_course}</p>
                            <p>{e.judul_course}</p>
                            <p>{e.deskripsi_course}</p>
                        </div>
                    )
                })
                }
            </div>
            <p>------------------------------</p>
            <div>
                <h4>Materi Course</h4>
                {materi && materi.map(e => {
                    return (
                        <div key={e.id_materi}>
                            <p>{e.id_materi}</p>
                            <p>{e.judul_materi}</p>
                            <p>{e.point_materi}</p>
                            <Link to={`/course-materi-guru/${e.id_materi}`}>Materi Detail.. </Link>
                        </div>
                    )

                })}
                <Link to={`/add-materi/${id}`}>Tambah Materi</Link>
            </div>
            <p>------------------------------</p>
            <div>
                <h4>Exercise Course</h4>
                {exercise.length > 0 && exercise.map(e => {
                    return (
                        <div key={e.id_exercise}>
                            <p>{e.judul_exercise}</p>
                            <Link to={`/course-exercise/${e.id_exercise}`}>Exercise Detail.. </Link>
                        </div>
                    )
                })}
                <Link to={`/add-exercise/${id}`}>Tambah Exercise</Link>
            </div>
        </div>


    )
}

