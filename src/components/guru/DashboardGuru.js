import React, { useEffect, useState } from 'react'
import { useRefresh } from '../../hooks/useRefresh';
import { useDispatch, useSelector } from 'react-redux';
import { getProfilThunk, getCourseThunk } from '../../redux/user/thunk';
import { StyledContainer } from '../../style/components/StyledContainer';
import { StyledWrapper } from '../../style/components/StyledWrapper';
import { StyledHeading } from '../../style/components/StyledHeading';
import { NavBarGuru } from '../partials/NavBarGuru';
import { Card } from '../partials/Card';
import { grey, primary } from '../../style/ColorVariable';
import { Modal } from '../partials/Modal';

export const DashboardGuru = () => {

  const dispatch = useDispatch()

  const role = localStorage.getItem('role')

  const [token, tokenExp] = useRefresh(role);
  const profil = useSelector(state => state.user.profil);
  const course = useSelector(state => state.user.course);
  const [load, setLoad] = useState(false)

  useEffect(() => {
    setLoad(true)
    dispatch(getProfilThunk(token, tokenExp, role));
    dispatch(getCourseThunk(token, tokenExp));
    setLoad(false)
  }, [dispatch])

  return (

    <StyledContainer flex="flex">
      <NavBarGuru />
      <StyledWrapper>
        <StyledHeading backgroundcolor={primary}>
          Dashboard Guru
        </StyledHeading>
        <div className='m-t-20'>
          <div>
            <h2>Hi there, {profil !== null && profil.nama_guru}!</h2>
          </div>
          <div>
            <p>Selamat datang di dashboard, kamu bisa melihat statistik mu dibawah!</p>
          </div>
        </div>
        <div className='flex flex-wrap m-t-20 p-20-lr course-wrapper'>
          <Card
            svg='<svg width="100" height="100" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M55.315 7.27996C56.7161 6.39168 58.341 5.92004 60 5.92004C61.659 5.92004 63.2838 6.39168 64.685 7.27996L106.6 33.86C107.845 34.6495 108.871 35.7409 109.582 37.0329C110.292 38.3248 110.665 39.7754 110.665 41.25C110.665 42.7245 110.292 44.1751 109.582 45.4671C108.871 46.759 107.845 47.8504 106.6 48.64L64.685 75.22C63.2838 76.1082 61.659 76.5799 60 76.5799C58.341 76.5799 56.7161 76.1082 55.315 75.22L13.4 48.64C12.1546 47.8504 11.129 46.759 10.4184 45.4671C9.70771 44.1751 9.33508 42.7245 9.33508 41.25C9.33508 39.7754 9.70771 38.3248 10.4184 37.0329C11.129 35.7409 12.1546 34.6495 13.4 33.86L55.315 7.27996V7.27996ZM60.67 13.615C60.4696 13.4878 60.2372 13.4202 60 13.4202C59.7627 13.4202 59.5303 13.4878 59.33 13.615L17.415 40.195C17.2374 40.3078 17.0911 40.4637 16.9898 40.6481C16.8885 40.8325 16.8354 41.0395 16.8354 41.25C16.8354 41.4604 16.8885 41.6674 16.9898 41.8518C17.0911 42.0362 17.2374 42.1921 17.415 42.305L59.33 68.885C59.5303 69.0122 59.7627 69.0797 60 69.0797C60.2372 69.0797 60.4696 69.0122 60.67 68.885L102.585 42.305C102.763 42.1921 102.909 42.0362 103.01 41.8518C103.111 41.6674 103.165 41.4604 103.165 41.25C103.165 41.0395 103.111 40.8325 103.01 40.6481C102.909 40.4637 102.763 40.3078 102.585 40.195L60.67 13.615V13.615Z" fill="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.33504 61.62C9.59866 61.2041 9.94163 60.8441 10.3444 60.5607C10.7471 60.2772 11.2017 60.0759 11.6823 59.9682C12.1628 59.8605 12.6599 59.8485 13.1451 59.9329C13.6303 60.0173 14.0941 60.1964 14.51 60.46L59.33 88.885C59.5304 89.0122 59.7627 89.0797 60 89.0797C60.2373 89.0797 60.4697 89.0122 60.67 88.885L105.49 60.46C105.906 60.1961 106.37 60.0166 106.855 59.9319C107.341 59.8473 107.838 59.859 108.319 59.9665C108.799 60.074 109.254 60.2751 109.657 60.5584C110.06 60.8417 110.404 61.2016 110.668 61.6175C110.931 62.0335 111.111 62.4974 111.196 62.9827C111.28 63.468 111.269 63.9652 111.161 64.446C111.054 64.9268 110.852 65.3817 110.569 65.7847C110.286 66.1878 109.926 66.5311 109.51 66.795L64.685 95.22C63.2839 96.1083 61.659 96.5799 60 96.5799C58.341 96.5799 56.7162 96.1083 55.315 95.22L10.49 66.795C9.65077 66.2618 9.05763 65.4171 8.84104 64.4467C8.62445 63.4762 8.80214 62.4595 9.33504 61.62V61.62Z" fill="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.33504 81.62C9.59866 81.2041 9.94163 80.8441 10.3444 80.5607C10.7471 80.2773 11.2017 80.0759 11.6823 79.9682C12.1628 79.8605 12.6599 79.8485 13.1451 79.9329C13.6303 80.0173 14.0941 80.1964 14.51 80.46L59.33 108.885C59.5304 109.012 59.7627 109.08 60 109.08C60.2373 109.08 60.4697 109.012 60.67 108.885L105.49 80.46C106.33 79.9269 107.348 79.7494 108.319 79.9665C109.289 80.1836 110.134 80.7775 110.668 81.6175C111.201 82.4576 111.378 83.475 111.161 84.446C110.944 85.417 110.35 86.2619 109.51 86.795L64.685 115.22C63.2839 116.108 61.659 116.58 60 116.58C58.341 116.58 56.7162 116.108 55.315 115.22L10.49 86.795C9.65077 86.2618 9.05763 85.4171 8.84104 84.4467C8.62445 83.4762 8.80214 82.4595 9.33504 81.62V81.62Z" fill="white"/>
            </svg> 
            '
            judul='Course'
            value={course[0] === '' ? 0 : course.length}
            bordercolor={primary}
          />
          <Card bordercolor={grey} />
          <Card bordercolor={grey} />
        </div>
        {
          load &&

          <Modal
            load={true}
          />

        }
      </StyledWrapper>
    </StyledContainer>


  )
}