import React from 'react'
import useAxiosGetAll from '../../hooks/useAxiosGetAll';
import useAxiosGetSingle from '../../hooks/useAxiosGetSingle';
import { useRefresh } from '../../hooks/useRefresh';
import { useLogout } from '../../hooks/useLogout';
import { Link } from 'react-router-dom';


export const DashboardSiswa = () => {

    const [username, token, tokenExp, resRole] = useRefresh('siswa');
    const profil = useAxiosGetSingle('/siswa/get-profil', token, tokenExp);
    const course = useAxiosGetAll(`/course/get-course`, token, tokenExp);
    const badges = useAxiosGetAll(`siswa/get-badges`, token, tokenExp)

    const logout = useLogout();

    console.log(badges);

    return (
        <>
            <div>Dashboard Siswa</div>
            <p>Hello {profil.nama_siswa} !</p>
            <p>level : {profil.level_siswa}</p>
            <p>point : {profil.point_siswa}</p>
            <p>materi : {profil.materi_finished}</p>
            <p>exercise : {profil.exercise_finished}</p>
            <div>
                <p>Badges : </p>
                {badges.length > 0 && badges.map(e => {
                    return (
                        <div key={e.badge.id_badges}>
                            <p>{e.badge.nama_badges}</p>
                        </div>
                    )
                })}

            </div>

            <button onClick={logout}>Logout</button>
            <p>-------------------------------</p>
            <div>
                <h2>daftar course</h2>
                {course.length === 0 &&
                    <>
                        <h1>No Course Joined</h1>
                    </>
                }
                {course && course.map(({ course }) => {
                    return (
                        <div key={course.id_course}>
                            <h3>{course.judul_course}</h3>
                            <p>{course.deskripsi_course}</p>
                            <Link to={`/course-detail/${course.id_course}`}>Course Detail.. </Link>
                        </div>
                    )
                })}
                <Link to={`/search-course`}>Join Course</Link>
            </div>
        </>

    )
}
