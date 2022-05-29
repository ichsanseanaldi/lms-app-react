import React, { useEffect } from 'react'
import { useRefresh } from '../../hooks/useRefresh';
import { useLogout } from '../../hooks/useLogout';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProfilThunk, getCourseThunk } from '../../redux/user/thunk';

export const DashboardGuru = () => {

  const dispatch = useDispatch()
  const logout = useLogout();

  const role = localStorage.getItem('role')

  const [token, tokenExp] = useRefresh(role);
  const profil = useSelector(state => state.user.profil);
  const course = useSelector(state => state.user.course);

  useEffect(() => {
    dispatch(getProfilThunk(token, tokenExp, role));
    dispatch(getCourseThunk(token, tokenExp));
  }, [dispatch])

  return (

    <div>
      <h1>Dashboard Guru token : {token}</h1>
      <p>Hello {profil && profil.nama_guru} !</p>
      <p>nip : {profil && profil.nip}</p>
      <button onClick={logout}>Logout</button>
      <p>-------------------------------</p>
      <div>
        <div>CourseLists - guru </div>
        <p>-------------------------------</p>
        <div>
          {course[0] === '' && <h1>No Course</h1>}
          {course[0] !== '' && course.map(course => {
            return (
              <div key={course.id_course}>
                <h3>{course.judul_course}</h3>
                <p>{course.deskripsi_course}</p>
                <Link to={`/course-detail-guru/${course.id_course}`}>Course Detail.. </Link>
              </div>
            )
          })}
        </div>
        <p>-------------------------------</p>
      </div>
      <div>
        <Link to={'/add-siswa'}>Tambah Siswa</Link>
      </div>
      <div>
        <Link to={'/add-course'}>Tambah Course</Link>
      </div>
    </div>
  )
}
