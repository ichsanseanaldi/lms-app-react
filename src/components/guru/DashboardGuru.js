import React from 'react'
import useAxiosGetAll from '../../hooks/useAxiosGetAll';
import useAxiosGetSingle from '../../hooks/useAxiosGetSingle';
import { useRefresh } from '../../hooks/useRefresh';
import { useLogout } from '../../hooks/useLogout';
import { Link } from 'react-router-dom';


export const DashboardGuru = () => {

  const [username, token, tokenExp, resRole] = useRefresh('guru');
  const profil = useAxiosGetSingle('guru/get-profil', token, tokenExp);
  const course = useAxiosGetAll(`course/get-course`, token, tokenExp);

  const logout = useLogout();

  return (

    <div>
      <h1>Dashboard Guru token : {token}</h1>
      <p>Hello {profil.nama_guru} !</p>
      <p>nip : {profil.nip}</p>
      <button onClick={logout}>Logout</button>
      <p>-------------------------------</p>
      <div>
        <h2>daftar course</h2>
        {course.length === 0 && <h1>No Course</h1>}
        {course && course.map(course => {
          return (
            <div key={course.id_course}>
              <h3>{course.judul_course}</h3>
              <p>{course.deskripsi_course}</p>
              <Link to={`/course-detail/${course.id_course}`}>Course Detail.. </Link>
            </div>
          )
        })}
      </div>
      <p>-------------------------------</p>
      <div>
        <Link to={'/add-siswa'}>Tambah Siswa</Link>
      </div>
      <div>
        <Link to={'/add-course'}>Tambah Course</Link>
      </div>
    </div>
  )
}
