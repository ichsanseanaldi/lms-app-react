import React from 'react'
import { useParams } from 'react-router-dom'
import useAxiosGetAll from '../../hooks/useAxiosGetAll'
import { useRefresh } from '../../hooks/useRefresh'
import { Link } from 'react-router-dom';

export const CourseDetail = () => {

    const { id } = useParams()

    const role = localStorage.getItem('role');

    const [username, token, tokenExp, resRole] = useRefresh(role);
    const detail = useAxiosGetAll(`course/get-course-detail/${id}`, token, tokenExp);
    const materi = useAxiosGetAll(`course/get-course-materi/${id}`, token, tokenExp);
    const exercise = useAxiosGetAll(`course/get-course-exercise-all/${id}`, token, tokenExp);

    console.log(exercise);

    return (
        <div>
            <div>CourseDetail id : {id}</div>
            <p>------------------------------</p>
            <div>
                <h4>Detail course</h4>
                {detail && detail.map((e) => {
                    return (
                        <div key={e.id_course}>
                            <p>{e.id_course}</p>
                            <p>{e.code_course}</p>
                            <p>{e.judul_course}</p>
                            <p>{e.deskripsi_course}</p>
                        </div>)

                })}
            </div>
            <p>------------------------------</p>
            <div>
                <h4>Materi Course</h4>
                {materi && materi.map((e) => {
                    return (
                        <div key={e.id_materi}>
                            <p>{e.id_materi}</p>
                            <p>{e.judul_materi}</p>
                            <p>{e.point_materi}</p>
                            <Link to={`/course-materi/${e.id_materi}`}>Materi Detail.. </Link>
                        </div>
                    )

                })}
                {resRole === 'guru' ? <Link to={`/add-materi/${id}`}>Tambah Materi</Link> : ''}
            </div>
            <p>------------------------------</p>
            {resRole === 'guru' ?

                <div>
                    <h4>Exercise Course</h4>
                    {exercise.length > 0 && exercise.map((e) => {
                        return (
                            <div key={e.id_exercise}>
                                <p>{e.judul_exercise}</p>
                                <Link to={`/course-exercise/${e.id_exercise}`}>Exercise Detail.. </Link>
                            </div>
                        )
                    })}
                    <Link to={`/add-exercise/${id}`}>Tambah Exercise</Link>
                </div>

                :

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

            }


        </div>


    )
}
