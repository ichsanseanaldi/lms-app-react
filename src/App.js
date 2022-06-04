
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
import { CariCourse } from './components/siswa/CariCourse';
import { CourseDetailGuru } from './components/guru/CourseDetailGuru';
import { CourseDetailSiswa } from './components/siswa/CourseDetailSiswa';
import { CourseMateriGuru } from './components/guru/CourseMateriGuru';
import { CourseMateriSiswa } from './components/siswa/CourseMateriSiswa';
import { CourseList } from './components/guru/CourseList';
import { CourseExerciseGuru } from './components/guru/CourseExerciseGuru';
import { CourseListSiswa } from './components/siswa/CourseListSiswa';
import { CourseExerciseSiswa } from './components/siswa/CourseExerciseSiswa';
import { Leaderboard } from './components/siswa/Leaderboard';
import { Transition } from './components/siswa/Transition';

import { Provider } from 'react-redux';
import { store } from './redux/store';

import { GlobalStyled } from './style/GlobalStyle.style';


function App() {

  return (

    <Provider store={store}>

      <GlobalStyled />

      <BrowserRouter>

        <Routes>

          {/* universal */}
          <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/add-profil' element={<NewProfil />} />
          <Route path='/tr' element={<Transition />} />
          {/* admin */}
          <Route path='/register' element={<Register />} />
          <Route path='/dashboard-admin' element={<DashboardAdmin />} />
          {/* siswa */}
          <Route path='/dashboard-siswa' element={<DashboardSiswa />} />
          <Route path='/course-detail-siswa/:id' element={<CourseDetailSiswa />} />
          <Route path='/course-materi/:id' element={<CourseMateriSiswa />} />
          <Route path='/course-list-siswa' element={<CourseListSiswa />} />
          <Route path='/course-exercise-siswa/:id' element={<CourseExerciseSiswa />} />
          <Route path='/search-course' element={<CariCourse />} />
          <Route path='/leaderboard' element={<Leaderboard />} />
          {/* guru */}
          <Route path='/add-siswa' element={<TambahSiswa />} />
          <Route path='/dashboard-guru' element={<DashboardGuru />} />
          <Route path='/add-course' element={<TambahCourse />} />
          <Route path='/add-materi/:id' element={<TambahMateri />} />
          <Route path='/add-exercise/:id' element={<TambahExercise />} />
          <Route path='/add-soal/:randomcode' element={<TambahSoal />} />
          <Route path='/course-detail-guru/:id' element={<CourseDetailGuru />} />
          <Route path='/course-list' element={<CourseList />} />
          <Route path='/course-materi-guru/:id' element={<CourseMateriGuru />} />
          <Route path='/course-exercise-guru/:id' element={<CourseExerciseGuru />} />
          {/* 404 */}
          <Route path='*' element={<LandingPage />} />

        </Routes>

      </BrowserRouter>

    </Provider>

  );
}

export default App;
