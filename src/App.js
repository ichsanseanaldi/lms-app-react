
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DashboardAdmin } from './components/admin/DashboardAdmin';
import { DashboardGuru } from './components/guru/DashboardGuru';
import { LandingPage } from './components/LandingPage';
import { Login } from './components/Login';
import { Register } from './components/admin/Register';
import { DashboardSiswa } from './components/siswa/DasboardSiswa';
import { NewProfil } from './components/NewProfil';
import { TambahSiswa } from './components/guru/TambahSiswa';
import { TambahCourse } from './components/guru/TambahCourse';
import { TambahMateri } from './components/guru/TambahMateri';
import { TambahExercise } from './components/guru/TambahExercise';
import { TambahSoal } from './components/guru/TambahSoal';
import { CourseDetail } from './components/course/CourseDetail';
import { CourseMateri } from './components/course/CourseMateri';
import { CourseExercise } from './components/course/CourseExercise';
import { CariCourse } from './components/siswa/CariCourse';



function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path='/' element={<LandingPage />} />
        {/* dashboard */}
        <Route path='/dashboard-guru' element={<DashboardGuru />} />
        <Route path='/dashboard-admin' element={<DashboardAdmin />} />
        <Route path='/dashboard-siswa' element={<DashboardSiswa />} />
        {/* universal */}
        <Route path='/login' element={<Login />} />
        <Route path='/add-profil' element={<NewProfil />} />
        {/* guru */}
        <Route path='/add-siswa' element={<TambahSiswa />} />
        <Route path='/add-course' element={<TambahCourse />} />
        <Route path='/add-materi/:id' element={<TambahMateri />} />
        <Route path='/add-exercise/:id' element={<TambahExercise />} />
        <Route path='/add-soal/:randomcode' element={<TambahSoal />} />
        {/* course */}
        <Route path='/course-detail/:id' element={<CourseDetail />} />
        <Route path='/course-materi/:id' element={<CourseMateri />} />
        <Route path='/course-exercise/:id' element={<CourseExercise />} />
        {/* Siswa */}
        <Route path='/search-course' element={<CariCourse />} />
        {/* admin */}
        <Route path='/register' element={<Register />} />

      </Routes>

    </BrowserRouter>

  );
}

export default App;
