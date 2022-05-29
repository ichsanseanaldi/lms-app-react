import React, { useEffect } from 'react'
import { useRefresh } from '../../hooks/useRefresh';
import { useLogout } from '../../hooks/useLogout';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProfilThunk, getCourseThunk, getBadgesThunk } from '../../redux/user/thunk';

export const DashboardSiswa = () => {

    const logout = useLogout();
    const dispatch = useDispatch()

    const [token, tokenExp] = useRefresh('siswa');
    const profil = useSelector(state => state.user.profil);
    const course = useSelector(state => state.user.course);
    const badges = useSelector(state => state.user.badges);

    useEffect(() => {
        dispatch(getProfilThunk(token, tokenExp, 'siswa'));
        dispatch(getCourseThunk(token, tokenExp));
        dispatch(getBadgesThunk(token, tokenExp));
    }, [dispatch])

    return (
        <>
            <div>Dashboard Siswa</div>
            {profil !== null &&
                <div>
                    <p>Hello {profil.nama_siswa} !</p>
                    <p>level : {profil.level_siswa}</p>
                    <p>point : {profil.point_siswa}</p>
                    <p>materi : {profil.materi_finished}</p>
                    <p>exercise : {profil.exercise_finished}</p>
                </div>
            }
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
                <div>
                    <div>Course Lists - siswa </div>
                    <p>-------------------------------</p>
                    <div>
                        {course[0] === '' && <h1>No Course</h1>}
                        {course[0] !== undefined && course[0].course !== undefined && course.map(e => {
                            return (
                                <div key={e.course.id_course}>
                                    <h3> {e.course.judul_course}</h3>
                                    <p>{e.course.deskripsi_course}</p>
                                    <Link to={`/course-detail-siswa/${e.course.id_course}`}>Course Detail.. </Link>
                                </div>
                            )
                        })}
                    </div>
                    <p>-------------------------------</p>
                </div>
                <Link to={`/search-course`}>Join Course</Link>
            </div>
        </>

    )
}
